use std::collections::HashMap;

// Simple function
fn add(a: i32, b: i32) -> i32 {
    a + b
}

// Function with borrowing
fn process_string(s: &str) -> String {
    s.to_uppercase()
}

// Function with mutable reference
fn increment(value: &mut i32) {
    *value += 1;
}

// Function with Option return
fn safe_divide(a: f64, b: f64) -> Option<f64> {
    if b != 0.0 {
        Some(a / b)
    } else {
        None
    }
}

// Function with Result return
fn parse_number(s: &str) -> Result<i32, std::num::ParseIntError> {
    s.parse()
}

// Generic function
fn find_largest<T: PartialOrd + Copy>(list: &[T]) -> T {
    let mut largest = list[0];
    for &item in list {
        if item > largest {
            largest = item;
        }
    }
    largest
}

// Function with complex parameters
fn complex_function(
    data: Vec<String>,
    lookup: HashMap<String, i32>,
    callback: impl Fn(&str) -> bool,
) -> Vec<String> {
    data.into_iter()
        .filter(|s| callback(s))
        .collect()
}

// Struct with methods
struct Calculator {
    value: i32,
}

impl Calculator {
    // Associated function (like static method)
    fn new(initial: i32) -> Self {
        Calculator { value: initial }
    }
    
    // Method with self
    fn get_value(&self) -> i32 {
        self.value
    }
    
    // Method with mutable self
    fn add_value(&mut self, amount: i32) {
        self.value += amount;
    }
    
    // Method that consumes self
    fn consume(self) -> i32 {
        self.value
    }
}

// Function with lifetime parameters
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

// Async function
async fn fetch_data() -> Result<String, &'static str> {
    Ok("Data fetched".to_string())
}

// Main function
fn main() {
    println!("Testing Rust functions");
    let result = add(5, 3);
    println!("Result: {}", result);
}