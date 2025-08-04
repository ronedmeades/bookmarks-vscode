"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportedFunction = exportedFunction;
// Regular function
function processUser(user) {
    return `${user.name} is ${user.age} years old`;
}
// Arrow function
const calculateAge = (birthYear) => {
    return new Date().getFullYear() - birthYear;
};
// Async function
async function fetchUserData(id) {
    return { name: "Test", age: 25 };
}
// Generic function
function createArray(item, count) {
    return new Array(count).fill(item);
}
class UserManager {
    // Class method
    addUser(user) {
        console.log("Adding user");
    }
    // Private method
    validateUser(user) {
        return user.age > 0;
    }
    // Static method
    static getInstance() {
        return new UserManager();
    }
}
// Function with complex parameters
function complexFunction(param1, param2, param3) {
    // Complex signature test
}
// Export function
function exportedFunction() {
    return "exported";
}
//# sourceMappingURL=test.js.map