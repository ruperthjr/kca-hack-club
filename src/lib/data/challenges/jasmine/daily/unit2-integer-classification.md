---
title: "C++ Integer Classification Program"
description: "Write a C++ program using if/else statements to classify integers"
difficulty: "beginner"
unit: "Unit 2: Object Oriented Programming with C++"
day: 3
technologies:
    - "C++ Programming"
    - "Conditional Logic"
    - "Input/Output"
learningOutcomes:
    - "Implement if/else conditional statements"
    - "Handle user input in C++"
    - "Classify numerical values"
    - "Write clean, readable C++ code"
estimatedTime: "45-60 minutes"
requirements:
    - "Basic C++ syntax knowledge"
    - "Understanding of conditional logic"
    - "C++ compiler or online IDE access"
deliverables:
    - "Complete C++ source code"
    - "Program output examples"
    - "Code explanation comments"
    - "Test cases documentation"
    - "Error handling implementation"
resources:
    - name: "C++ Primer, 5th Edition"
      url: "https://www.google.com/search?q=C%2B%2B+Primer+5th+Edition"
    - name: "Programming: Principles and Practice Using C++, 2nd Edition"
      url: "https://www.google.com/search?q=Programming+Principles+and+Practice+C%2B%2B"
    - name: "Starting Out with C++ from Control Structures to Objects"
      url: "https://www.google.com/search?q=Starting+Out+with+C%2B%2B+9th+Edition"
    - name: "Effective C++ by Scott Meyers"
      url: "https://www.google.com/search?q=Effective+C%2B%2B+3rd+Edition"
    - name: "The C++ Programming Language, 4th Edition"
      url: "https://www.google.com/search?q=The+C%2B%2B+Programming+Language+4th"
dateAdded: "2026-02-11"
unlockDate: "2026-02-11"
---

# C++ Integer Classification Program

## Overview

Write a C++ program that reads an integer from the user and classifies it as positive, negative, or zero using if/else statements. This exercise focuses on fundamental C++ concepts including input handling, conditional logic, and program structure.

## Objective

Create a complete, well-documented C++ program that correctly classifies integers and demonstrates proper programming practices.

## Instructions

### Program Requirements

#### Functional Requirements

- Prompt user to enter an integer.
- Read integer input from standard input.
- Classify the integer as:
    - Positive (greater than 0)
    - Negative (less than 0)
    - Zero (equal to 0)
- Display classification result with the original number.
- Handle at least one edge case (e.g., very large numbers).
- Include option for multiple classifications (loop until user quits).

#### Code Quality Requirements

- Use meaningful variable names.
- Include comments explaining logic.
- Proper indentation and formatting.
- Input validation (handle non-integer input).
- Clear user prompts and output messages.

### Program Structure

1. **Header comments:** Program description, author, date.
2. **Include directives:** Required headers.
3. **Function prototypes:** If using functions.
4. **Main function:**
        - Variable declarations.
        - Display program purpose.
        - Main loop for multiple classifications:
                - Prompt user for input.
                - Read input (with validation).
                - Classification logic using if/else.
                - Display result.
                - Ask if user wants to continue.
        - Program termination message.
5. **Function definitions:** If using functions.

### Classification Logic

Use if/else statements:

```cpp
if (number > 0) {
        // Positive number logic
} else if (number < 0) {
        // Negative number logic
} else {
        // Zero logic
}
```

**Extended Requirements:**

- Classify even or odd (for non-zero numbers).
- Single-digit vs multi-digit numbers.
- Range-based classification:
    - Small positive (1-100)
    - Medium positive (101-1000)
    - Large positive (>1000)
    - (Similar for negative)

### Input Validation

- Check if input is actually an integer.
- Handle invalid input with clear error messages.
- Provide retry mechanism for invalid input.
- Consider integer overflow for very large inputs.

Example:

```cpp
if (cin.fail()) {
        cin.clear();
        cin.ignore(1000, '\n');
        cout << "Invalid input. Please enter an integer." << endl;
        continue;
}
```

### Test Cases Documentation

**Format:**

- Test Case 1: Positive Number  
    Input: 42  
    Expected Output: "42 is a positive integer."  
    Special Note: Should also classify as even

- Test Case 2: Negative Number  
    Input: -15  
    Expected Output: "-15 is a negative integer."  
    Special Note: Should also classify as odd

- Test Case 3: Zero  
    Input: 0  
    Expected Output: "0 is zero."  
    Special Note: Neither positive nor negative

- Test Case 4: Boundary Case  
    Input: 1  
    Expected Output: "1 is a positive integer."  
    Special Note: Smallest positive integer

- Test Case 5: Invalid Input  
    Input: "abc"  
    Expected Output: Error message and retry prompt

### Submission Format

Submit your solution as a markdown file containing:

- Complete, compilable C++ source code.
- Code explanation covering all major sections.
- At least 4 program output examples.
- Documentation of 5+ test cases.
- Explanation of input validation approach.

---

## Evaluation Criteria

- **Code Functionality (40%)**: Program compiles without errors, correctly classifies all integer types, handles edge cases, robust input validation, clean user interface.
- **Code Quality (30%)**: Meaningful variable and function names, proper comments, good indentation and formatting, efficient conditional logic, appropriate use of C++ features.
- **Documentation (20%)**: Clear code explanations, complete test case documentation, accurate output examples, thorough edge case consideration.
- **Presentation (10%)**: Well-organized submission, proper code formatting in markdown, clear separation of sections, professional documentation style.

## Common Mistakes to Avoid

- Using `using namespace std;` without understanding implications.
- Not handling invalid input (non-integers).
- Forgetting to include necessary headers.
- Poor variable names (`a`, `b`, `c`).
- No comments or excessive obvious comments.
- Incorrect if/else logic (e.g., checking zero first when it should be last).
- Not considering integer overflow.
- Hardcoding values instead of using constants.
- No loop for multiple operations.
- Inconsistent indentation.

## Example Code Snippet

```cpp
#include <iostream>
#include <limits>

using namespace std;

int main() {
        int userNumber;
        char continueChoice = 'y';

        cout << "=== INTEGER CLASSIFICATION PROGRAM ===" << endl;
        cout << "This program classifies integers as positive, negative, or zero." << endl;

        while (continueChoice == 'y' || continueChoice == 'Y') {
                cout << "\nEnter an integer: ";

                // Input validation
                if (!(cin >> userNumber)) {
                        cin.clear();
                        cin.ignore(numeric_limits<streamsize>::max(), '\n');
                        cout << "Invalid input! Please enter a valid integer." << endl;
                        continue;
                }

                // Classification logic
                cout << "\nClassification Results:" << endl;
                cout << "Number: " << userNumber << endl;

                if (userNumber > 0) {
                        cout << "Type: POSITIVE" << endl;
                        if (userNumber % 2 == 0) {
                                cout << "Parity: EVEN" << endl;
                        } else {
                                cout << "Parity: ODD" << endl;
                        }
                } else if (userNumber < 0) {
                        cout << "Type: NEGATIVE" << endl;
                        if (userNumber % 2 == 0) {
                                cout << "Parity: EVEN" << endl;
                        } else {
                                cout << "Parity: ODD" << endl;
                        }
                } else {
                        cout << "Type: ZERO" << endl;
                        cout << "Parity: NEITHER (zero is neither even nor odd)" << endl;
                }

                cout << "\nWould you like to classify another number? (y/n): ";
                cin >> continueChoice;
        }

        cout << "\nThank you for using the Integer Classifier. Goodbye!" << endl;

        return 0;
}
```

## Tips for Success

- Start simple, then add features.
- Test incrementally.
- Use constants for classification thresholds.
- Format output for readability.
- Handle all cases (e.g., decimal input, very large numbers).
- Comment reasoning, not just code.
- Validate input early.
- Make error messages helpful.

## Bonus Challenges

- Add range classification (small, medium, large).
- Prime number check.
- Multiple number input.
- File input/output.
- Statistical summary.
- GUI version.

## Submission Checklist

- Code compiles without errors.
- All if/else logic correctly implemented.
- Input validation handles non-integer input.
- Program handles positive, negative, and zero cases.
- Option for multiple classifications.
- Code is well-commented.
- Variables have meaningful names.
- Proper indentation and formatting.
- Test cases documented.
- Output examples provided.
- Code explanation included.
