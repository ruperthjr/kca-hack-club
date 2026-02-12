---
title: "Number Printing with For Loop"
description: "Practice C++ for loops by printing numbers from 1 to 100, reinforcing loop syntax and console output."
difficulty: "beginner"
unit: "2"
day: 5
week: 1
month: 1
technologies: ["C++", "For Loop", "Standard Output", "g++", "VS Code"]
learningOutcomes:
    - "Implement a C++ program with a correct main function"
    - "Construct and control a for loop for a specific range"
    - "Format and output data using std::cout"
    - "Debug and compile C++ code using a modern compiler"
    - "Apply best practices for code style and readability"
estimatedTime: "20 minutes"
requirements:
    - "C++ compiler (g++, Clang, or MSVC)"
    - "Text editor or IDE (VS Code, CLion, Code::Blocks)"
    - "Basic understanding of C++ syntax and structure"
    - "Ability to run and test console applications"
    - "Familiarity with compiling and executing C++ programs"
deliverables:
    - "print_numbers.cpp – well-formatted C++ source code"
    - "output.png or output.jpg – screenshot of the program output"
    - "README.md – brief explanation of your approach"
resources:
  - name: "C++ Reference: for statement"
    url: "https://en.cppreference.com/w/cpp/language/for"
  - name: "Learn C++: Loops"
    url: "https://www.learncpp.com/cpp-tutorial/for-statements/"
  - name: "C++ Output with cout"
    url: "https://cplusplus.com/doc/tutorial/basic_io/"
  - name: "C++ Compilation Guide"
    url: "https://gcc.gnu.org/wiki/HowToCompileLinux"
  - name: "Microsoft C++ Documentation"
    url: "https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-13"
unlockDate: "2026-02-13"
---

# Number Printing with For Loop

## Overview

Mastering the `for` loop is essential for controlling program flow in C++. This challenge strengthens your understanding of loop structure and output formatting by having you print numbers from 1 to 100. These skills are foundational for more advanced programming tasks such as data processing, algorithms, and automation.

## Objective

Write a C++ program that prints the integers from **1 to 100** (inclusive) to the console, either one per line or space-separated.

## Prerequisites

- Ability to create and edit C++ source files
- Familiarity with compiling and running C++ programs
- Understanding of basic C++ syntax, including `main()`, `#include`, and `std::cout`

## Instructions

### Part 1: Write the Loop

1. Create a file named `print_numbers.cpp`.
2. Include the header: `#include <iostream>`
3. Use `using namespace std;` or prefix with `std::`.
4. Implement `main()` with a `for` loop from 1 to 100.
5. Print each number using `cout`, either with `endl` or a space.

**Example (one per line):**
```cpp
#include <iostream>
using namespace std;

int main() {
        for (int i = 1; i <= 100; i++) {
                cout << i << endl;
        }
        return 0;
}
```

**Example (space-separated):**
```cpp
#include <iostream>
using namespace std;

int main() {
        for (int i = 1; i <= 100; i++) {
                cout << i << " ";
        }
        return 0;
}
```

### Part 2: Compile and Run

- Compile: `g++ print_numbers.cpp -o print_numbers`
- Run: `./print_numbers`
- Verify output: numbers 1 through 100 in correct order.

### Part 3: Document and Capture Output

- Take a screenshot of the console output.
- Write a brief explanation in `README.md` about your approach.

## Deliverables

1. `print_numbers.cpp` – your source code
2. `output.png` or `output.jpg` – screenshot of output
3. `README.md` – short description of your solution

## Evaluation Criteria

| Criteria         | Weight | Description                                      |
|------------------|--------|--------------------------------------------------|
| Correctness      | 50%    | Program compiles and prints numbers 1 to 100     |
| Loop Structure   | 30%    | Proper use of for loop and variable naming       |
| Code Style       | 20%    | Indentation, formatting, and code clarity        |

## Tips & Common Mistakes

- Use `i <= 100` to include 100 in the output.
- Remember semicolons in the for loop header.
- Use `endl` or `" "` for correct formatting.
- Always return 0 at the end of `main()`.
- Address compiler warnings promptly.

## Bonus Challenges (Optional)

1. Print only even numbers from 1 to 100.
2. Print numbers in reverse order (100 to 1).
3. Output 10 numbers per line, aligned in columns.
4. Rewrite using a `while` loop.
5. Add user input to set the range.

## Submission

Push your files to your GitHub repository or submit via your LMS, following the naming convention: `Day5_Unit2_PrintNumbers.cpp`.