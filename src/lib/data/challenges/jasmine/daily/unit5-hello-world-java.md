---
title: "Java Hello World & OOP Foundations"
description: "Write, compile, and run your first Java program, then explore Java's object-oriented features and compare with C++."
difficulty: "beginner"
unit: "Unit 5: Object Oriented Programming with Java"
day: 1
week: 1
month: 1
technologies:
   - Java
   - JDK (Java Development Kit)
   - Command Line
   - IntelliJ IDEA / Eclipse / VS Code
   - Object-Oriented Programming (OOP)
learningOutcomes:
   - Write, compile, and execute basic Java programs
   - Understand Java's class structure and main method
   - Apply object-oriented principles: encapsulation, constructors, methods
   - Compare Java and C++ syntax, compilation, and paradigms
   - Document and explain differences between Java and C++
estimatedTime: "45-60 minutes"
requirements:
   - JDK 11 or higher installed
   - Text editor or IDE (IntelliJ IDEA, Eclipse, VS Code)
   - Command line/terminal access
   - Basic understanding of programming concepts
   - Ability to take and save screenshots
deliverables:
   - HelloWorld.java source file
   - HelloWorldEnhanced.java source file
   - Person.java source file
   - Compiled .class files for each program
   - java-cpp-comparison.md (200-300 words, with table)
   - screenshots/ folder with compilation and output images
resources:
  - name: "Official Java Tutorials: Getting Started"
    url: "https://docs.oracle.com/javase/tutorial/getStarted/index.html"
  - name: "GeeksforGeeks: Object-Oriented Programming in Java"
    url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/"
  - name: "Baeldung: Java vs. C++"
    url: "https://www.baeldung.com/java-vs-c-plus-plus"
  - name: "W3Schools: Java Tutorial"
    url: "https://www.w3schools.com/java/"
  - name: "OpenJDK Downloads"
    url: "https://jdk.java.net/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Java Hello World & OOP Foundations

## Overview

This challenge introduces you to Java's syntax, structure, and compilation process, emphasizing its object-oriented nature. You'll write your first Java program, enhance it with variables and formatted output, and build a simple class to demonstrate OOP. You'll also compare Java and C++ to understand their core differences and real-world applications.

## Objective

By completing this challenge, you'll be able to write, compile, and run Java programs, apply object-oriented principles, and clearly articulate the distinctions between Java and C++.

## Prerequisites

- JDK 11 or higher installed
- Text editor or IDE (IntelliJ IDEA, Eclipse, VS Code)
- Command line/terminal access
- Basic programming knowledge

## Instructions

### Part 1: Set Up Java & Write Hello World

1. Install the JDK and verify with `java -version` and `javac -version`.
2. Create `HelloWorld.java`:
    ```java
    public class HelloWorld {
          public static void main(String[] args) {
                System.out.println("Hello, World!");
          }
    }
    ```
3. Compile: `javac HelloWorld.java`
4. Run: `java HelloWorld`
5. Take screenshots of compilation and output.

### Part 2: Enhance Your Program

1. Create `HelloWorldEnhanced.java` with variables, formatted output, and comments:
    ```java
    public class HelloWorldEnhanced {
          public static void main(String[] args) {
                System.out.println("Hello, World!");
                System.out.println("Welcome to Java Programming!");
                String name = "Jasmine";
                int year = 2026;
                double version = 17.0;
                boolean isObjectOriented = true;
                System.out.println("My name is " + name);
                System.out.println("The year is " + year);
                System.out.println("Java version: " + version);
                System.out.println("Is Java OOP? " + isObjectOriented);
                String formatted = String.format("Hello %s, welcome to Java %,.1f!", name, version);
                System.out.println(formatted);
          }
    }
    ```
2. Compile and run. Take screenshots of output.

### Part 3: Object-Oriented Java

1. Create `Person.java`:
    ```java
    public class Person {
          private String name;
          private int birthYear;
          public Person(String name, int birthYear) {
                this.name = name;
                this.birthYear = birthYear;
          }
          public void greet() {
                System.out.println("Hello, my name is " + name);
          }
          public int getAge(int currentYear) {
                return currentYear - birthYear;
          }
          public static void main(String[] args) {
                Person student = new Person("Jasmine", 2000);
                student.greet();
                System.out.println("I am " + student.getAge(2026) + " years old");
                System.out.println("Learning Java programming!");
          }
    }
    ```
2. Compile and run. Take screenshots of output.

### Part 4: Java vs C++ Comparison

1. Write `java-cpp-comparison.md` (200-300 words) including:
    - Compilation process
    - Memory management
    - OOP design
    - Platform independence
    - Syntax differences
    - Comparison table and code examples

## Deliverables

1. `HelloWorld.java`, `HelloWorldEnhanced.java`, `Person.java`
2. Compiled `.class` files for each program
3. `java-cpp-comparison.md` (with table)
4. `screenshots/` folder: compilation and output images

## Evaluation Criteria

| Criteria                | Weight | Description                                      |
|-------------------------|--------|--------------------------------------------------|
| Code Correctness        | 30%    | Programs compile and run as specified            |
| OOP Implementation      | 25%    | Proper use of classes, encapsulation, methods    |
| Comparison Document     | 25%    | Clear, accurate, well-structured comparison      |
| Documentation & Screens | 20%    | All required screenshots and clear code comments |

## Tips & Common Mistakes

- Ensure filenames match class names exactly (case-sensitive)
- Use `java ClassName` (not `.class` or `.java`) to run
- Only one public class per file
- Save files before compiling
- Read error messages carefully

## Bonus Challenges (Optional)

1. Accept command-line arguments in your Java program.
2. Use `Scanner` for user input and display personalized greetings.

## Submission

Zip your folder as `java-hello-world-[yourname].zip` including all source files, compiled files, comparison document, and screenshots. Submit as instructed by your course or platform.
