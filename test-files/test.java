import java.util.*;

public class TestClass {
    
    // Static method
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
    
    // Public method
    public String processData(String input) {
        return input.toUpperCase();
    }
    
    // Private method
    private boolean validateInput(String input) {
        return input != null && !input.isEmpty();
    }
    
    // Method with multiple parameters
    public void complexMethod(
        String name,
        int age,
        List<String> items,
        boolean isActive
    ) {
        // Implementation
    }
    
    // Generic method
    public <T> List<T> createList(T item, int count) {
        List<T> list = new ArrayList<>();
        for(int i = 0; i < count; i++) {
            list.add(item);
        }
        return list;
    }
    
    // Overloaded methods
    public int calculate(int a, int b) {
        return a + b;
    }
    
    public double calculate(double a, double b) {
        return a + b;
    }
    
    public int calculate(int a, int b, int c) {
        return a + b + c;
    }
    
    // Method with throws
    public void riskyOperation() throws Exception {
        throw new Exception("Something went wrong");
    }
    
    // Abstract method would be here if class was abstract
    // Constructor
    public TestClass() {
        // Constructor logic
    }
    
    // Constructor with parameters
    public TestClass(String name, int value) {
        // Parameterized constructor
    }
}

interface TestInterface {
    void interfaceMethod(String param);
    
    default void defaultMethod() {
        System.out.println("Default implementation");
    }
}