// TypeScript test file with various function types
interface User {
    name: string;
    age: number;
}

// Regular function
function processUser(user: User): string {
    return `${user.name} is ${user.age} years old`;
}

// Arrow function
const calculateAge = (birthYear: number): number => {
    return new Date().getFullYear() - birthYear;
};

// Async function
async function fetchUserData(id: number): Promise<User> {
    return { name: "Test", age: 25 };
}

// Generic function
function createArray<T>(item: T, count: number): T[] {
    return new Array(count).fill(item);
}

class UserManager {
    // Class method
    public addUser(user: User): void {
        console.log("Adding user");
    }
    
    // Private method
    private validateUser(user: User): boolean {
        return user.age > 0;
    }
    
    // Static method
    static getInstance(): UserManager {
        return new UserManager();
    }
}

// Function with complex parameters
function complexFunction(
    param1: string,
    param2: { nested: number },
    param3?: boolean
): void {
    // Complex signature test
}

// Export function
export function exportedFunction(): string {
    return "exported";
}