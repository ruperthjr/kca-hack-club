---
title: "Java Console Menu with Switch Statement"
description: "Build a robust console-based menu system in Java using switch statements and Scanner for user input."
difficulty: "beginner"
unit: "Unit 5: Object Oriented Programming with Java"
day: 4
week: 1
month: 1
technologies: ["Java", "Switch Statement", "Scanner", "Console I/O", "Control Flow"]
learningOutcomes:
    - "Design interactive console menus using Java"
    - "Implement control flow with switch statements"
    - "Safely handle user input and validate choices"
    - "Apply defensive programming for invalid input"
    - "Structure maintainable and readable Java code"
estimatedTime: "30 minutes"
requirements:
    - "Java Development Kit (JDK) 11 or higher"
    - "Text editor or IDE (e.g., IntelliJ IDEA, VS Code, Eclipse)"
    - "Basic Java programming knowledge"
    - "Understanding of loops and conditional statements"
    - "Ability to run Java programs from the command line"
deliverables:
    - "MenuSystem.java – fully commented Java source code"
    - "Screenshot showing both menu options and exit message"
    - "Brief README.md explaining your approach"
resources:
  - name: "Java Tutorials – Oracle"
    url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html"
  - name: "Baeldung: Java Switch Statement"
    url: "https://www.baeldung.com/java-switch"
  - name: "Scanner Class Documentation"
    url: "https://docs.oracle.com/javase/8/docs/api/java/util/Scanner.html"
  - name: "Effective Java, 3rd Edition – Joshua Bloch"
    url: "https://www.oreilly.com/library/view/effective-java-3rd/9780134686097/"
  - name: "Head First Java, 3rd Edition"
    url: "https://www.oreilly.com/library/view/head-first-java/9781492091646/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-12"
unlockDate: "2026-02-12"
---

# Java Console Menu with Switch Statement

## Overview

Interactive console menus are foundational in command-line applications, enabling users to navigate options and perform actions efficiently. This challenge will strengthen your skills in Java control flow, user input handling, and program structure—key abilities for building real-world utilities and larger systems.

## Objective

Create a Java program that displays a menu with two options: print "Hello, World!" or exit. Use a switch statement to process user choices, and ensure the menu repeats until the user selects exit.

## Prerequisites

- Java installed and configured (JDK 11+)
- Familiarity with Java syntax, classes, and the main method
- Understanding of loops, switch statements, and the Scanner class

## Instructions

### Part 1: Project Setup

1. Create a file named `MenuSystem.java`.
2. Import `java.util.Scanner`.
3. Define the `MenuSystem` class and its `main` method.

### Part 2: Menu Loop and Input

1. Instantiate a `Scanner` for `System.in`.
2. Use a loop to repeatedly:
     - Display the menu:
         ```
         === MENU ===
         1. Print Hello
         2. Exit
         Enter your choice:
         ```
     - Read the user's integer input.

### Part 3: Switch Statement Logic

1. Implement a switch statement on the user's choice:
     - `case 1`: Print "Hello, World!"
     - `case 2`: Print exit message and break the loop
     - `default`: Print "Invalid choice. Please enter 1 or 2."
2. Close the Scanner after exiting the loop.

## Deliverables

1. `MenuSystem.java` – well-commented source code
2. Screenshot showing both menu options and the exit message
3. `README.md` briefly describing your solution

## Evaluation Criteria

| Criteria                | Weight | Description                                      |
|-------------------------|--------|--------------------------------------------------|
| Correctness             | 40%    | Program compiles, runs, and meets requirements   |
| Switch & Input Handling | 35%    | Proper use of switch, input validation, and loop |
| Code Style & Comments   | 15%    | Clear, readable, and well-documented code        |
| Submission Completeness | 10%    | All deliverables provided as specified           |

## Tips & Common Mistakes

- Always close your Scanner to avoid resource leaks.
- Use `break` in each switch case to prevent fall-through.
- Test invalid inputs to ensure robust error handling.
- Use meaningful variable names and consistent indentation.

## Bonus Challenges (Optional)

1. Add a third menu option to display the current date.
2. Implement input validation for non-integer entries using `scanner.hasNextInt()`.

## Submission

Commit your `.java` file, screenshot, and `README.md` to your GitHub repository or submit them as instructed. Ensure your screenshot clearly shows both menu options and the exit message.
