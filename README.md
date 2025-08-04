# Bookmarks README

A simple, transparent bookmark management extension for VS Code that replicates Visual Studio's bookmark 
functionality. Navigate through your code with ease using persistent bookmarks that work across files and sessions.

## Features

### Visual Studio-Style Bookmark Management
- **Gutter Integration**: Right-click in the gutter (line number area) to add or remove bookmarks, just like breakpoints
- **Context-Sensitive Menus**: Shows "Add Bookmark" when no bookmark exists, "Remove Bookmark" when one does
- **Visual Indicators**: Clean bookmark icons appear in the gutter next to bookmarked lines

### Smart Navigation
- **Tree View Panel**: Dedicated bookmarks panel in the activity bar showing all bookmarks organized by file
- **One-Click Navigation**: Click any bookmark in the tree view to instantly jump to that location
- **Cross-File Support**: Bookmarks work seamlessly across multiple files in your workspace

### Customizable Labels
- **Optional Labels**: Add descriptive labels to your bookmarks for better organization
- **Easy Editing**: Hover over any bookmark in the tree view and click the edit icon to modify labels
- **Clean Workflow**: Create bookmarks instantly, add labels later when needed

### Robust Persistence
- **Session Survival**: Bookmarks persist across VS Code restarts
- **Workspace-Scoped**: Bookmarks are saved per workspace/project
- **File Switching**: Bookmark icons automatically appear when switching between files

### Theme Integration
- **Adaptive Icons**: Bookmark icons automatically adapt to light and dark themes
- **Clean Design**: Minimal visual clutter - no unnecessary overview ruler marks
- **Professional Appearance**: Icons match VS Code's native design language

## Requirements

No additional requirements or dependencies needed. This extension works with VS Code 1.102.0 and above.

## Extension Settings

This extension does not contribute any VS Code settings. It works out of the box with sensible defaults.

## Known Issues

- None currently known. This extension has been thoroughly tested across multiple files and use cases.

## Release Notes

### 0.0.1

Initial release featuring:
- Gutter-based bookmark management with right-click context menus
- Visual bookmark icons with theme adaptation
- Tree view navigation panel
- Label editing capability
- Cross-file bookmark support
- Persistent storage across sessions
- Context-sensitive "Add" vs "Remove" menu items

---

## Architecture & Transparency

This extension was built with transparency and auditability in mind:

- **Open Source**: Complete source code available for review
- **Clean Architecture**: Well-structured TypeScript code following VS Code best practices  
- **Modern APIs**: Uses latest VS Code extension APIs for robust functionality
- **No Telemetry**: No data collection or external dependencies

## Usage

1. **Adding Bookmarks**: Right-click in the gutter next to any line number and select "Add Bookmark"
2. **Removing Bookmarks**: Right-click in the gutter next to a bookmarked line and select "Remove Bookmark"  
3. **Navigation**: Click the bookmark icon in the activity bar to open the bookmarks panel, then click any bookmark to jump to it
4. **Adding Labels**: In the bookmarks panel, hover over any bookmark and click the edit icon to add or modify labels

## Following Extension Guidelines

This extension follows VS Code's extension guidelines and best practices:

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Development

Built using:
- TypeScript for type safety and maintainability
- VS Code Extension API for native integration
- Modern ES6+ features for clean, readable code

## Contributing

Found a bug or have a feature request? Please open an issue on our [GitHub repository](https://github.com/ronedmeades/bookmarks-vscode).

## Author

**Ron Edmeades**
GitHub: [@ronedmeades](https://github.com/ronedmeades)

## License

This extension is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Source Code

The complete source code is available on GitHub for review and contribution:
[https://github.com/ronedmeades/function-navigator](https://github.com/ronedmeades/bookmarks-vscode)


**Enjoy**