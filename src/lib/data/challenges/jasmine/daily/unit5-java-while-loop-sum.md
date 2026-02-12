---
title: "Summation with Sentinel While Loop"
description: "Create a Java program that reads integers from the user, sums them, and stops when the sentinel value -1 is entered. The program then displays the total sum, excluding the sentinel."
difficulty: "beginner"
unit: "5"
day: 6
week: 1
month: 1
technologies: ["Java", "While Loop", "Scanner", "Sentinel Value", "Input Validation"]
learningOutcomes:
    - "Implement sentinel-controlled repetition using a while loop"
    - "Accumulate and process user input with variables"
    - "Utilize the Scanner class for robust integer input"
    - "Differentiate between while and do-while loop control structures"
    - "Apply best practices for user interaction and resource management"
estimatedTime: "30 minutes"
requirements:
    - "Java Development Kit (JDK) 11 or higher"
    - "Text editor or IDE (e.g., IntelliJ IDEA, VS Code, Eclipse)"
    - "Basic understanding of Java syntax and variables"
    - "Familiarity with loops and conditional statements"
    - "Ability to run Java programs from the command line or IDE"
deliverables:
    - "SumWithSentinel.java – fully commented Java source code"
    - "screenshot.png – console screenshot showing at least three numbers and the final sum"
    - "README.md – brief explanation of your approach"
resources:
  - name: "Java While Loops (Official Oracle Docs)"
    url: "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html"
  - name: "Scanner Class (Java Platform SE 11)"
    url: "https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/Scanner.html"
  - name: "Sentinel-Controlled Loops Explained"
    url: "https://www.programiz.com/java-programming/examples/sentinel-controlled-loop"
  - name: "Java User Input (w3schools)"
    url: "https://www.w3schools.com/java/java_user_input.asp"
  - name: "Java Coding Style Guidelines"
    url: "https://www.oracle.com/java/technologies/javase/codeconventions-contents.html"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-14"
unlockDate: "2026-02-14"
---

# Summation with Sentinel While Loop

## Overview

Sentinel-controlled loops are essential when the number of iterations is unknown in advance. This challenge reinforces your understanding of while loops, user input handling, and sentinel values by building a Java program that sums numbers until a special value is entered.

## Objective

Write a Java program that repeatedly prompts the user for integers, adds each to a running total, and stops when the user enters -1. The program should display the sum of all numbers entered, excluding the sentinel.

## Prerequisites

- Ability to write and run Java programs
- Understanding of variables, loops, and conditional statements
- Familiarity with the Scanner class for input

## Instructions

### Part 1: Set Up Input and Variables

- Create a class named `SumWithSentinel`.
- Import `java.util.Scanner`.
- In the `main` method, declare and initialize:
    - `Scanner sc = new Scanner(System.in);`
    - `int sum = 0;`
    - `int number;`

### Part 2: Implement the Sentinel While Loop

- Prompt the user to enter a number (`-1` to stop).
- Read the first number before the loop.
- Use a `while` loop that continues as long as the number is not `-1`.
    - Inside the loop, add the number to `sum`.
    - Prompt and read the next number.

```java
System.out.print("Enter a number (-1 to stop): ");
int number = sc.nextInt();

while (number != -1) {
        sum += number;
        System.out.print("Enter a number (-1 to stop): ");
        number = sc.nextInt();
}
```

### Part 3: Display the Result and Clean Up

- After the loop, print the total sum.
- Close the Scanner.

```java
System.out.println("Sum of entered numbers: " + sum);
sc.close();
```

## Deliverables

1. `SumWithSentinel.java` – complete, well-commented source code
2. `screenshot.png` – showing program execution with at least three numbers and the sum
3. `README.md` – brief explanation of your solution

## Evaluation Criteria

| Criteria            | Weight | Description                                              |
|---------------------|--------|----------------------------------------------------------|
| Correctness         | 50%    | Program sums numbers and stops only on -1; sentinel not added |
| Loop Implementation | 30%    | Proper use of while loop and exit condition              |
| User Interaction    | 10%    | Clear prompts and result display                         |
| Code Style          | 10%    | Consistent formatting, meaningful names, closes Scanner  |

## Tips & Common Mistakes

- Do not include the sentinel (-1) in the sum.
- Always prompt for input inside the loop to avoid infinite loops.
- Accept and sum negative numbers other than -1.
- Close the Scanner to prevent resource leaks.

## Bonus Challenges (Optional)

1. Count and display how many numbers were entered (excluding the sentinel).
2. Handle non-integer input gracefully using `hasNextInt()`.
3. Calculate and display the average of entered numbers.
4. Rewrite the program using a do-while loop.
5. Add input validation for out-of-range values.

## Submission

Push `SumWithSentinel.java`, `screenshot.png`, and `README.md` to your GitHub repository.
