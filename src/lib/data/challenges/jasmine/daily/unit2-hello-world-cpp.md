---
title: "C++ Hello World & Program Structure"
description: "Write, compile, and run your first C++ program, then enhance it with variables and output."
difficulty: "beginner"
unit: "Unit 2: Object Oriented Programming with C++"
day: 1
week: 1
month: 1
technologies:
   - "C++"
   - "g++ Compiler"
   - "Command Line"
   - "VS Code"
   - "CLion"
learningOutcomes:
   - "Understand and write basic C++ program structure"
   - "Compile and execute C++ programs from the command line"
   - "Use preprocessor directives, namespaces, and standard I/O"
   - "Declare and use variables of different types"
   - "Document and explain the compilation process"
estimatedTime: "30-45 minutes"
requirements:
   - "C++ compiler (g++, clang++, or Visual Studio) installed and configured"
   - "Text editor or IDE (VS Code, CLion, or Code::Blocks)"
   - "Basic command line/terminal skills"
   - "Ability to take and save screenshots"
   - "Familiarity with file and folder management"
deliverables:
   - "hello.cpp: Basic Hello World source code"
   - "hello-enhanced.cpp: Enhanced version with variables"
   - "hello-explanation.md: 150-200 word technical explanation"
   - "screenshots/: Folder with source, compilation, execution, and enhanced output screenshots"
resources:
  - name: "LearnCpp: Writing Your First Program"
    url: "https://www.learncpp.com/cpp-tutorial/writing-your-first-program/"
  - name: "C++ Getting Started (cplusplus.com)"
    url: "https://cplusplus.com/doc/tutorial/introduction/"
  - name: "W3Schools: C++ Get Started"
    url: "https://www.w3schools.com/cpp/cpp_getstarted.asp"
  - name: "GeeksforGeeks: C++ Hello World"
    url: "https://www.geeksforgeeks.org/cpp-hello-world-program/"
  - name: "VS Code C++ Setup Guide"
    url: "https://code.visualstudio.com/docs/cpp/config-mingw"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# C++ Hello World & Program Structure

## Overview

This challenge introduces you to C++ by guiding you through writing, compiling, and running a simple "Hello, World!" program. You'll learn the essentials of C++ syntax, program structure, and the compilation process, then enhance your program with variables and additional output. These skills are foundational for all future C++ development.

## Objective

Create, compile, and execute a basic C++ program that prints "Hello, World!" to the console, then enhance it with variables and document your process with clear explanations and screenshots.

## Prerequisites

- C++ compiler (g++, clang++, or Visual Studio) installed and added to PATH
- Text editor or IDE (VS Code, CLion, or Code::Blocks)
- Basic command line/terminal usage
- Ability to take and save screenshots

## Instructions

### Part 1: Set Up Your Environment

1. Install a C++ compiler for your OS (g++, clang++, or Visual Studio).
2. Verify installation by running `g++ --version` or equivalent in your terminal.
3. Choose and set up your preferred text editor or IDE.

### Part 2: Write and Run Hello World

1. Create a file named `hello.cpp` with the following code:
    ```cpp
    #include <iostream>

    int main() {
          std::cout << "Hello, World!" << std::endl;
          return 0;
    }
    ```
2. Open your terminal, navigate to the file's directory, and compile:
    ```bash
    g++ hello.cpp -o hello
    ```
3. Run the program:
    - Windows: `hello.exe`
    - macOS/Linux: `./hello`
4. Take a screenshot showing the code, compilation, and output.

### Part 3: Enhance Your Program

1. Modify your code to include variables and more output:
    ```cpp
    #include <iostream>
    #include <string>

    int main() {
          std::cout << "Hello, World!" << std::endl;
          std::cout << "This is my first C++ program." << std::endl;
          std::string name = "Jasmine";
          std::cout << "My name is " << name << std::endl;
          int year = 2026;
          std::cout << "The year is " << year << std::endl;
          return 0;
    }
    ```
2. Save as `hello-enhanced.cpp`, recompile, and run.
3. Take a screenshot of the enhanced output.

## Deliverables

1. `hello.cpp` and `hello-enhanced.cpp` source files
2. `hello-explanation.md` (150-200 words covering program structure, compilation, and output)
3. `screenshots/` folder with:
    - Source code
    - Compilation
    - Execution/output
    - Enhanced output

## Evaluation Criteria

| Criteria              | Weight | Description                                      |
|-----------------------|--------|--------------------------------------------------|
| Code Correctness      | 30%    | Compiles, runs, and outputs as specified         |
| Enhanced Features     | 20%    | Correct use of variables and additional output   |
| Documentation         | 25%    | Clear explanations and required screenshots      |
| Explanation Quality   | 25%    | Accurate, concise, and technically sound writing |

## Tips & Common Mistakes

- Always include `#include <iostream>` at the top.
- Watch for missing semicolons and case sensitivity.
- Use `std::` prefix unless using `using namespace std;`.
- Save files before compiling and check file extensions.
- Read compiler error messages carefully.

## Bonus Challenges (Optional)

1. Prompt the user for their name and greet them personally.
2. Add comments explaining each line of your code.

## Submission

Zip your folder as `cpp-hello-world-[yourname].zip` and submit it via the course platform or email as instructed.
