import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Bookmarks extension is now active!');

    const bookmarkProvider = new BookmarkProvider(context);

	const bookmarkDecoration = vscode.window.createTextEditorDecorationType({
		before: {
			contentText: '$(bookmark)',
			margin: '0 0.2em 0 0',
			color: new vscode.ThemeColor('bookmarks.gutterIconColor')
		},
		overviewRulerColor: 'blue', 
		overviewRulerLane: vscode.OverviewRulerLane.Left
	});

    // Register the tree data provider
    vscode.window.registerTreeDataProvider('bookmarksList', bookmarkProvider);
    
    // Load existing bookmarks
    bookmarkProvider.loadBookmarks();

    // Add bookmark command
	const addBookmarkCommand = vscode.commands.registerCommand('bookmarks.add', async (context?: {lineNumber: number, uri: vscode.Uri}) => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('No active editor');
			return;
		}
		
		const lineNumber = context?.lineNumber ? context.lineNumber - 1 : editor.selection.active.line;
		
		// Check if bookmark already exists
		const fileKey = editor.document.uri.toString();
		const fileBookmarks = bookmarkProvider.getBookmarks(fileKey) || [];
		const existingBookmark = fileBookmarks.find(b => b.line === lineNumber);
		
		if (existingBookmark) {
			vscode.window.showInformationMessage('Bookmark already exists at this line');
			return;
		}
		
		bookmarkProvider.addBookmark(editor.document.uri, lineNumber);
		vscode.window.showInformationMessage('Bookmark added');
	});

	// Remove bookmark command  
	const removeBookmarkCommand = vscode.commands.registerCommand('bookmarks.remove', async (context?: {lineNumber: number, uri: vscode.Uri}) => {
		const editor = vscode.window.activeTextEditor;
		if (!editor) {
			vscode.window.showErrorMessage('No active editor');
			return;
		}
		
		const lineNumber = context?.lineNumber ? context.lineNumber - 1 : editor.selection.active.line;
		
		const wasRemoved = bookmarkProvider.removeBookmark(editor.document.uri, lineNumber);
		
		if (wasRemoved) {
			vscode.window.showInformationMessage('Bookmark removed');
		} else {
			vscode.window.showInformationMessage('No bookmark found at this line');
		}
	});

    context.subscriptions.push(addBookmarkCommand, removeBookmarkCommand);
}

interface Bookmark {
    line: number;
    label?: string;
}

class BookmarkProvider implements vscode.TreeDataProvider<BookmarkItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<BookmarkItem | undefined | null | void> = new vscode.EventEmitter<BookmarkItem | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<BookmarkItem | undefined | null | void> = this._onDidChangeTreeData.event;
    
    private bookmarks: Map<string, Bookmark[]> = new Map();
    private context: vscode.ExtensionContext;
	private bookmarkDecoration: vscode.TextEditorDecorationType; // Add this

    constructor(context: vscode.ExtensionContext) {
        this.context = context;
        
        // Create the decoration type
        this.bookmarkDecoration = vscode.window.createTextEditorDecorationType({
            before: {
                contentText: 'BM', // Use visible text instead of $(bookmark)
				margin: '0 0.2em 0 0',
				color: 'red',      // Make it bright red so we can see it
				fontWeight: 'bold'
            },
            overviewRulerColor: 'blue', 
            overviewRulerLane: vscode.OverviewRulerLane.Left
        });
    }

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    loadBookmarks(): void {
        const stored = this.context.workspaceState.get<{[key: string]: Bookmark[]}>('bookmarks', {});
        this.bookmarks = new Map(Object.entries(stored));
        this.refresh();
		this.updateDecorations();
		// To forcefully clear the bookmarks files!
		// this.bookmarks = new Map();
		// this.context.workspaceState.update('bookmarks', {});
		// this.refresh();
		// console.log('Bookmarks forcibly cleared');
		// this.refresh();
    }

    private async saveBookmarks(): Promise<void> {
        const bookmarksObject = Object.fromEntries(this.bookmarks);
        await this.context.workspaceState.update('bookmarks', bookmarksObject);
    }

	getBookmarks(fileKey: string): Bookmark[] | undefined {
    	return this.bookmarks.get(fileKey);
	}

	addBookmark(fileUri: vscode.Uri, line: number, label?: string): void {
		const fileKey = fileUri.toString();
		const fileBookmarks = this.bookmarks.get(fileKey) || [];
		
		const newBookmark: Bookmark = { line, label };
		fileBookmarks.push(newBookmark);
		fileBookmarks.sort((a, b) => a.line - b.line);
		this.bookmarks.set(fileKey, fileBookmarks);
		this.saveBookmarks();
		this.refresh();
		this.updateDecorations();
	}

	removeBookmark(fileUri: vscode.Uri, line: number): boolean {
		const fileKey = fileUri.toString();
		const fileBookmarks = this.bookmarks.get(fileKey) || [];
		
		const existingIndex = fileBookmarks.findIndex(b => b.line === line);
		if (existingIndex >= 0) {
			fileBookmarks.splice(existingIndex, 1);
			if (fileBookmarks.length === 0) {
				this.bookmarks.delete(fileKey);
			} else {
				this.bookmarks.set(fileKey, fileBookmarks);
			}
			this.saveBookmarks();
			this.refresh();
			this.updateDecorations();
			return true;
		}
		return false;
	}

	updateDecorations(): void {
		// Update decorations for all visible editors
		vscode.window.visibleTextEditors.forEach(editor => {
			const fileKey = editor.document.uri.toString();
			const fileBookmarks = this.bookmarks.get(fileKey) || [];
			
			// Create decoration ranges for this file's bookmarks
			const decorationRanges = fileBookmarks.map(bookmark => 
				new vscode.Range(bookmark.line, 0, bookmark.line, 0)
			);
			
			// Apply decorations to this editor
			editor.setDecorations(this.bookmarkDecoration, decorationRanges);
		});
	}

    getTreeItem(element: BookmarkItem): vscode.TreeItem {
        if (element.type === 'file') {
            const item = new vscode.TreeItem(element.label, vscode.TreeItemCollapsibleState.Expanded);
            item.iconPath = vscode.ThemeIcon.File;
            return item;
        } else {
            const item = new vscode.TreeItem(element.label, vscode.TreeItemCollapsibleState.None);
            item.iconPath = new vscode.ThemeIcon('bookmark');
            
            // Command to navigate to bookmark
            item.command = {
                command: 'vscode.open',
                title: 'Go to Bookmark',
                arguments: [
                    element.fileUri,
                    { selection: new vscode.Range(element.line!, 0, element.line!, 0) }
                ]
            };
            
            item.contextValue = 'bookmark';
            return item;
        }
    }

    async getChildren(element?: BookmarkItem): Promise<BookmarkItem[]> {
        if (!element) {
            // Root level - return file groups
            const fileItems: BookmarkItem[] = [];
            
            for (const [fileUriString, bookmarks] of this.bookmarks) {
                if (bookmarks.length > 0) {
                    const fileUri = vscode.Uri.parse(fileUriString);
                    const fileName = fileUri.path.split('/').pop() || fileUriString;
                    
                    fileItems.push({
                        type: 'file',
                        label: fileName,
                        fileUri: fileUri,
                        bookmarks: bookmarks
                    });
                }
            }
            
            return fileItems;
        } else if (element.type === 'file') {
            // File level - return bookmarks for this file
            const bookmarkItems: BookmarkItem[] = [];
            
            for (const bookmark of element.bookmarks || []) {
                const label = bookmark.label 
                    ? `Line ${bookmark.line + 1}: ${bookmark.label}`
                    : `Line ${bookmark.line + 1}`;
                
                bookmarkItems.push({
                    type: 'bookmark',
                    label: label,
                    fileUri: element.fileUri,
                    line: bookmark.line
                });
            }
            
            return bookmarkItems;
        }
        
        return [];
    }
}

interface BookmarkItem {
    type: 'file' | 'bookmark';
    label: string;
    fileUri?: vscode.Uri;
    line?: number;
    bookmarks?: Bookmark[];
}

export function deactivate() {}