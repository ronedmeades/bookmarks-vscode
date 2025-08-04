#include <stdio.h>
#include <stdlib.h>

// Simple function
int add(int a, int b) {
    return a + b;
}

// Function with pointer
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Function returning pointer
char* getString() {
    return "Hello World";
}

// Function with array parameter
void printArray(int arr[], int size) {
    for(int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
}

// Function with multiple parameters
double calculateArea(double length, double width, double height) {
    return length * width * height;
}

// Static function
static void internalFunction() {
    printf("Internal function\n");
}

// Function with no parameters
void cleanup() {
    printf("Cleaning up\n");
}

// Main function
int main() {
    int x = 5, y = 10;
    printf("Sum: %d\n", add(x, y));
    return 0;
}