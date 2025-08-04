#include <iostream>
#include <vector>
#include <string>

// Namespace
namespace TestNamespace {
    
    // Template function
    template<typename T>
    T findMax(T a, T b) {
        return (a > b) ? a : b;
    }
    
    // Overloaded function
    int multiply(int a, int b) {
        return a * b;
    }
    
    double multiply(double a, double b) {
        return a * b;
    }
    
    // Function with default parameters
    void printMessage(const std::string& msg = "Default message", int times = 1) {
        for(int i = 0; i < times; i++) {
            std::cout << msg << std::endl;
        }
    }
}

class Calculator {
public:
    // Constructor
    Calculator(int initial = 0) : value(initial) {}
    
    // Destructor
    ~Calculator() {}
    
    // Public method
    int getValue() const {
        return value;
    }
    
    // Method with multiple parameters
    void complexOperation(int a, double b, const std::string& op) {
        // Implementation
    }
    
    // Static method
    static Calculator create(int val) {
        return Calculator(val);
    }
    
    // Operator overload
    Calculator operator+(const Calculator& other) {
        return Calculator(value + other.value);
    }

private:
    int value;
    
    // Private method
    void validate() {
        // Validation logic
    }
};

// Function outside class
void globalFunction() {
    std::cout << "Global function" << std::endl;
}

// Inline function
inline int fastAdd(int a, int b) {
    return a + b;
}