package main

import (
    "fmt"
    "strings"
)

// Simple function
func add(a, b int) int {
    return a + b
}

// Function with multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Function with named return values
func processString(input string) (result string, length int) {
    result = strings.ToUpper(input)
    length = len(result)
    return
}

// Variadic function
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

// Function with slice parameter
func printSlice(items []string) {
    for i, item := range items {
        fmt.Printf("%d: %s\n", i, item)
    }
}

// Function with map parameter
func processMap(data map[string]int) int {
    total := 0
    for _, value := range data {
        total += value
    }
    return total
}

// Function with struct parameter
type Person struct {
    Name string
    Age  int
}

func (p Person) greet() string {
    return fmt.Sprintf("Hello, I'm %s", p.Name)
}

func (p *Person) incrementAge() {
    p.Age++
}

// Function with interface parameter
type Speaker interface {
    Speak() string
}

func makeSpeak(s Speaker) {
    fmt.Println(s.Speak())
}

// Function with channel parameter
func processChannel(ch chan<- int, values []int) {
    for _, v := range values {
        ch <- v
    }
    close(ch)
}

// Main function
func main() {
    fmt.Println("Testing Go functions")
    result := add(5, 3)
    fmt.Printf("Result: %d\n", result)
}