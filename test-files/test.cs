using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TestNamespace
{
    public class TestClass
    {
        // Property
        public string Name { get; set; }
        
        // Simple method
        public void SimpleMethod()
        {
            Console.WriteLine("Simple method");
        }
        
        // Method with parameters
        public int AddNumbers(int a, int b)
        {
            return a + b;
        }
        
        // Async method
        public async Task<string> GetDataAsync()
        {
            await Task.Delay(1000);
            return "Data retrieved";
        }
        
        // Generic method
        public T ProcessItem<T>(T item) where T : class
        {
            return item;
        }
        
        // Overloaded methods
        public void ProcessData(string data)
        {
            // String version
        }
        
        public void ProcessData(int data)
        {
            // Integer version
        }
        
        public void ProcessData(string data, bool validate)
        {
            // Extended version
        }
        
        // Static method
        public static TestClass CreateInstance()
        {
            return new TestClass();
        }
        
        // Private method
        private bool ValidateData(object data)
        {
            return data != null;
        }
        
        // Method with complex parameters
        public void ComplexMethod(
            List<string> items,
            Dictionary<string, int> lookup,
            Action<string> callback
        )
        {
            // Implementation
        }
    }
    
    // Static class
    public static class UtilityClass
    {
        public static void UtilityMethod()
        {
            Console.WriteLine("Utility method");
        }
        
        public static T GetDefault<T>()
        {
            return default(T);
        }
    }
}