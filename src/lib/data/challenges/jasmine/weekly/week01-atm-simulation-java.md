---
title: "CLI-Based ATM Simulation in Java"
description: "Build a console-based ATM system with user authentication, account management, and transaction history."
difficulty: "intermediate"
unit: "Week 1 Project: Object-Oriented Programming with Java"
week: 1
month: 1
technologies:
        - "Java"
        - "Object-Oriented Design"
        - "File I/O"
        - "Exception Handling"
        - "Console Applications"
learningOutcomes:
        - "Design and implement an object-oriented banking system"
        - "Develop a console-based interactive menu system"
        - "Handle financial transactions with proper validation"
        - "Implement file-based data persistence"
        - "Apply robust error handling and input validation techniques"
estimatedTime: "10-12 hours"
requirements:
        - "Basic understanding of Java programming"
        - "Knowledge of classes, objects, and inheritance"
        - "Familiarity with file handling in Java"
        - "Java Development Kit (JDK) installed"
        - "GitHub account for version control"
deliverables:
        - "Fully functional Java ATM simulation program"
        - "Multiple account types with inheritance"
        - "Transaction history tracking"
        - "File-based data persistence"
        - "GitHub repository with documentation and sample data"
resources:
  - name: "Baeldung: Object-Oriented Programming in Java"
    url: "https://www.baeldung.com/java-object-oriented-programming"
  - name: "Oracle Java Docs: File I/O"
    url: "https://docs.oracle.com/javase/tutorial/essential/io/"
  - name: "GeeksforGeeks: Exception Handling in Java"
    url: "https://www.geeksforgeeks.org/exception-handling-java/"
  - name: "Jenkov: Java Collections Framework"
    url: "http://tutorials.jenkov.com/java-collections/index.html"
  - name: "Refactoring Guru: Design Patterns in Java"
    url: "https://refactoring.guru/design-patterns/java"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# ATM Simulation System Project

## Overview

This challenge involves creating a console-based ATM simulation system that mimics real-world banking operations. Learners will focus on object-oriented programming principles while implementing features like user authentication, account management, transaction processing, and data persistence.

## Objective

Develop a fully functional ATM system that demonstrates object-oriented design, robust error handling, and file-based data persistence. The system should include user authentication, multiple account types, and transaction history tracking.

## Prerequisites

- Basic knowledge of Java programming
- Understanding of object-oriented concepts like inheritance and polymorphism
- Familiarity with file handling and exception handling in Java
- Java Development Kit (JDK) installed
- GitHub account for version control

## Instructions

### Part 1: System Design and Architecture

- Plan the project structure and class hierarchy.
- Create a class diagram to outline relationships between components.
- Define the main classes: `ATM`, `Bank`, `Account`, `Transaction`, and supporting services.

### Part 2: Core Implementation

- Implement the `Account` base class and its subclasses (`SavingsAccount`, `CheckingAccount`).
- Develop the `Transaction` class to record transaction details.
- Create services for account management, transaction processing, and file persistence.

### Part 3: Console Interface

- Build an interactive menu system for user authentication and ATM operations.
- Implement options for deposit, withdrawal, transfer, and viewing transaction history.

## Deliverables

1. Complete Java program with all classes and functionality.
2. GitHub repository with source code, `README.md`, and sample data files.
3. Documentation including class diagrams, user manual, and testing instructions.
4. A runnable JAR file or compiled program.

## Evaluation Criteria

| Criteria                  | Weight | Description                                      |
|---------------------------|--------|--------------------------------------------------|
| Object-Oriented Design    | 30%    | Proper use of encapsulation, inheritance, and polymorphism. |
| Functionality             | 25%    | Implementation of all ATM operations and features. |
| Error Handling            | 20%    | Robust validation and exception handling.       |
| Data Persistence          | 15%    | File-based storage and retrieval of account data. |
| User Interface            | 10%    | Clear and intuitive console-based menu system.  |

## Tips & Common Mistakes

- Use proper encapsulation and avoid public fields.
- Validate user input to prevent errors.
- Handle file I/O exceptions gracefully.
- Follow Java naming conventions and best practices.
- Test edge cases thoroughly.

## Bonus Challenges (Optional)

1. Add interest calculation for savings accounts.
2. Implement a loan application feature.
3. Create an admin interface for managing accounts.
4. Add email/SMS notifications for transactions.
5. Replace file-based storage with a database.

## Submission

Submit the completed project as a GitHub repository. Ensure the repository includes all source code, documentation, and sample data files. Provide a `README.md` with setup and usage instructions.
