"""
Python test file with various function types and edge cases
"""

import asyncio
from typing import List, Dict, Optional, Union, Callable, Any
from dataclasses import dataclass


# Simple function
def basic_function(param1, param2):
    return param1 + param2


# Function with no parameters
def no_params():
    print("No parameters")


# Function with default parameters
def default_params(name="Anonymous", age=0):
    return f"{name} is {age} years old"


# Function with type hints
def typed_function(name: str, age: int) -> str:
    return f"{name} is {age} years old"


# Function with complex type hints
def complex_types(
    users: List[Dict[str, Union[str, int]]],
    callback: Optional[Callable[[str], bool]] = None
) -> Dict[str, Any]:
    result = {}
    for user in users:
        if callback and callback(user.get('name', '')):
            result[user['name']] = user
    return result


# Function with *args
def args_function(first, *args):
    return [first] + list(args)


# Function with **kwargs
def kwargs_function(required, **kwargs):
    return {"required": required, "optional": kwargs}


# Function with both *args and **kwargs
def args_kwargs_function(first, *args, **kwargs):
    return {
        "first": first,
        "args": args,
        "kwargs": kwargs
    }


# Function with keyword-only arguments
def keyword_only_function(required, *, keyword_only=None, another_kw=True):
    return {"required": required, "kw1": keyword_only, "kw2": another_kw}


# Multi-line function definition
def multiline_function(
    very_long_parameter_name,
    another_long_parameter_name,
    yet_another_parameter_name,
    final_parameter_name
):
    return (very_long_parameter_name + another_long_parameter_name + 
            yet_another_parameter_name + final_parameter_name)


# Async function
async def async_function(url: str) -> Dict[str, Any]:
    await asyncio.sleep(1)
    return {"url": url, "data": "fetched"}


# Generator function
def generator_function(max_value):
    for i in range(max_value):
        yield i


# Lambda functions (probably won't be detected as functions)
square = lambda x: x ** 2
multiply = lambda x, y: x * y


# Class with methods
class Calculator:
    def __init__(self, initial_value=0):
        self.value = initial_value
    
    # Instance method
    def add(self, number):
        self.value += number
        return self
    
    # Method with complex parameters
    def complex_calculation(
        self,
        multiplier: float,
        offset: float = 0,
        precision: int = 2,
        *adjustments: float
    ) -> str:
        result = (self.value * multiplier + offset + sum(adjustments))
        return f"{result:.{precision}f}"
    
    # Class method
    @classmethod
    def create_from_string(cls, value_str: str):
        return cls(int(value_str))
    
    # Static method
    @staticmethod
    def validate_number(value):
        return isinstance(value, (int, float))
    
    # Property
    @property
    def current_value(self):
        return self.value
    
    # Property setter
    @current_value.setter
    def current_value(self, new_value):
        self.value = new_value
    
    # Private method (by convention)
    def _internal_method(self):
        return self.value * 2
    
    # Dunder method
    def __str__(self):
        return f"Calculator({self.value})"
    
    # Async method
    async def save_to_database(self):
        await asyncio.sleep(0.1)
        return f"Saved {self.value}"


# Function with decorators
def timing_decorator(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start} seconds")
        return result
    return wrapper


@timing_decorator
def decorated_function(iterations):
    total = 0
    for i in range(iterations):
        total += i
    return total


# Multiple decorators
def another_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper


@timing_decorator
@another_decorator
def multi_decorated_function(value):
    return value * 2


# Nested functions
def outer_function(x):
    def inner_function(y):
        return x + y
    
    def another_inner_function(z):
        return x * z
    
    return inner_function, another_inner_function


# Function with docstring
def documented_function(width: float, height: float) -> float:
    """
    Calculate the area of a rectangle.
    
    Args:
        width: The width of the rectangle
        height: The height of the rectangle
        
    Returns:
        The area of the rectangle
        
    Raises:
        ValueError: If width or height is negative
    """
    if width < 0 or height < 0:
        raise ValueError("Width and height must be non-negative")
    return width * height


# Function with exception handling
def safe_divide(a: float, b: float) -> Optional[float]:
    try:
        return a / b
    except ZeroDivisionError:
        return None


# Recursive function
def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)


# Function with Union types
def process_input(data: Union[str, int, List[str]]) -> str:
    if isinstance(data, str):
        return data.upper()
    elif isinstance(data, int):
        return str(data * 2)
    elif isinstance(data, list):
        return ", ".join(data)
    else:
        return "Unknown type"


# Function with Optional and default None
def optional_callback(
    data: List[str], 
    processor: Optional[Callable[[str], str]] = None
) -> List[str]:
    if processor:
        return [processor(item) for item in data]
    return data


# Overloaded functions using typing.overload
from typing import overload

@overload
def process_data(input_data: str) -> str: ...

@overload
def process_data(input_data: int) -> int: ...

def process_data(input_data):
    if isinstance(input_data, str):
        return input_data.upper()
    elif isinstance(input_data, int):
        return input_data * 2


# Function with very long signature
def function_with_many_parameters(
    param1: str,
    param2: int,
    param3: float,
    param4: bool,
    param5: List[str],
    param6: Dict[str, int],
    param7: Optional[str] = None,
    param8: Union[str, int] = "default"
) -> Dict[str, Any]:
    return {
        "p1": param1, "p2": param2, "p3": param3, "p4": param4,
        "p5": param5, "p6": param6, "p7": param7, "p8": param8
    }


# Module-level function that might be imported
def utility_function():
    """A utility function that might be imported elsewhere."""
    return "utility result"


if __name__ == "__main__":
    # This won't be detected as a function, but tests the main guard
    print("Running Python test file")
    result = basic_function(5, 3)
    print(f"Result: {result}")