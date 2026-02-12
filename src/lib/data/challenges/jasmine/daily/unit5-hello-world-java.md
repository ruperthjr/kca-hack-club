---
title: "Java Hello World Program"
description: "Write, compile, and run your first Java program"
difficulty: "beginner"
unit: "Unit 5: Object Oriented Programming with Java"
day: 1
technologies:
  - "Java"
  - "JDK (Java Development Kit)"
  - "Command Line"
  - "OOP Concepts"
learningOutcomes:
  - "Understand Java program structure and class-based design"
  - "Compile and execute Java programs"
  - "Compare Java and C++ syntax and paradigms"
  - "Use Java's object-oriented principles"
estimatedTime: "45-60 minutes"
requirements:
  - "JDK 11 or higher installed"
  - "Text editor or IDE (IntelliJ IDEA, Eclipse, VS Code)"
  - "Command line/terminal access"
  - "Basic understanding of OOP concepts"
deliverables:
  - "Complete HelloWorld.java source file"
  - "Screenshot of successful compilation"
  - "Screenshot of program output"
  - "Comparison document: Java vs C++ (200-300 words)"
resources:
    - name: "Official Java Tutorials: Getting Started"
      url: "https://docs.oracle.com/javase/tutorial/getStarted/index.html"
    - name: "Baeldung: Java vs. C++"
      url: "https://www.baeldung.com/java-vs-c-plus-plus"
    - name: "GeeksforGeeks: Object-Oriented Programming in Java"
      url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/"
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

# Java Hello World Program

## Overview

Java is a class-based, object-oriented programming language designed around the principle that "everything is an object." Unlike C++, which supports both procedural and object-oriented programming, Java enforces object-oriented design from the very beginning. Even the simplest Java program must be contained within a class.

This challenge introduces you to Java's syntax, structure, and compilation process while highlighting the key differences between Java and C++. You'll learn about the Java Virtual Machine (JVM), bytecode compilation, and Java's "write once, run anywhere" philosophy.

## Objective

Write a complete Java program that displays "Hello, World!" to the console, compile it using the Java compiler (javac), execute it with the Java Runtime Environment (java), and create a comparison document explaining the key differences between Java and C++ programming.

## Instructions

### Step 1: Set Up Java Development Environment (10 minutes)

**Install Java Development Kit (JDK):**

**For Windows:**
1. Download JDK from Oracle or adopt OpenJDK
2. Run installer and note installation path
3. Add JAVA_HOME environment variable
4. Add `%JAVA_HOME%\bin` to PATH
5. Verify: `java -version` and `javac -version`

**For macOS:**
```bash
# Using Homebrew
brew install openjdk@17

# Or download from Oracle
# Follow installer instructions

# Verify installation
java -version
javac -version
```

**For Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install default-jdk

# Verify
java -version
javac -version
```

**Expected Output:**
```
java version "17.0.x" or higher
javac 17.0.x
```

### Step 2: Write Your First Java Program (15 minutes)

Create a new file named **`HelloWorld.java`** (exact capitalization matters!):

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**CRITICAL Java Rule:**
- **Filename MUST match class name exactly:** `HelloWorld.java`
- **Capitalization matters:** `helloworld.java` or `helloWorld.java` will fail

**Code Breakdown:**

**Line 1: `public class HelloWorld`**
- `public` - Access modifier (visible everywhere)
- `class` - Java keyword for defining a class
- `HelloWorld` - Class name (must match filename)
- Every Java program must have at least one class

**Line 2: `public static void main(String[] args)`**
- `public` - Method accessible from outside the class
- `static` - Method belongs to class, not instances
- `void` - Method returns nothing
- `main` - Entry point method name (required)
- `String[] args` - Array of command-line arguments

**Line 3: `System.out.println("Hello, World!");`**
- `System` - Built-in Java class for system operations
- `out` - Static field in System class (PrintStream object)
- `println` - Method to print line with newline
- `"Hello, World!"` - String literal

**Key Differences from C++:**
- Everything must be in a class
- No `#include` directives (uses `import` for packages)
- `System.out.println()` instead of `std::cout`
- No semicolon outside method bodies
- No `return 0;` in main (void return type)

### Step 3: Compile the Program (5 minutes)

Navigate to the directory containing `HelloWorld.java` in your terminal:

```bash
javac HelloWorld.java
```

**What Happens During Compilation:**
1. `javac` (Java compiler) reads `HelloWorld.java`
2. Checks syntax and semantics
3. Generates `HelloWorld.class` (bytecode file)
4. Bytecode is platform-independent intermediate code

**Successful Compilation:**
- No output means success
- `HelloWorld.class` file created in same directory
- This `.class` file contains Java bytecode, not machine code

**Common Compilation Errors:**
```
Error: class HelloWorld is public, should be declared in a file named HelloWorld.java
```
**Solution:** Rename file to match class name exactly

```
Error: cannot find symbol
```
**Solution:** Check for typos in method names, variables

### Step 4: Run the Program (5 minutes)

Execute the compiled bytecode using the Java Virtual Machine:

```bash
java HelloWorld
```

**IMPORTANT:**
- Use class name, **NOT** filename
- Don't include `.class` extension
- `java HelloWorld.class` is WRONG
- `java HelloWorld` is CORRECT

**Expected Output:**
```
Hello, World!
```

**Behind the Scenes:**
1. JVM loads `HelloWorld.class`
2. Verifies bytecode for security
3. Just-In-Time (JIT) compiler converts bytecode to native machine code
4. Executes the program
5. Program terminates

**Take screenshots showing:**
1. Directory listing with `.java` and `.class` files
2. Compilation command (`javac HelloWorld.java`)
3. Execution command (`java HelloWorld`)
4. Output: `Hello, World!`

### Step 5: Enhance Your Program (15 minutes)

Create an enhanced version named `HelloWorldEnhanced.java`:

```java
public class HelloWorldEnhanced {
    public static void main(String[] args) {
        // Display greeting
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java Programming!");
        
        // Variables and data types
        String name = "Jasmine";
        int year = 2026;
        double version = 17.0;
        boolean isObjectOriented = true;
        
        // Output with concatenation
        System.out.println("My name is " + name);
        System.out.println("The year is " + year);
        System.out.println("Java version: " + version);
        System.out.println("Is Java OOP? " + isObjectOriented);
        
        // Using String.format (similar to printf)
        String formatted = String.format("Hello %s, welcome to Java %,.1f!", 
                                        name, version);
        System.out.println(formatted);
    }
}
```

**New Concepts:**
- **Comments:** `//` for single-line, `/* */` for multi-line
- **Primitive Types:** `int`, `double`, `boolean`
- **Reference Types:** `String` (object, not primitive)
- **String Concatenation:** Using `+` operator
- **String.format():** Formatted string output

**Compile and Run:**
```bash
javac HelloWorldEnhanced.java
java HelloWorldEnhanced
```

### Step 6: Create Object-Oriented Version (10 minutes)

Java is object-oriented, so let's create a proper OOP version:

```java
public class Person {
    // Instance variables (attributes)
    private String name;
    private int birthYear;
    
    // Constructor
    public Person(String name, int birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
    
    // Method to greet
    public void greet() {
        System.out.println("Hello, my name is " + name);
    }
    
    // Method to calculate age
    public int getAge(int currentYear) {
        return currentYear - birthYear;
    }
    
    // Main method
    public static void main(String[] args) {
        // Create Person object
        Person student = new Person("Jasmine", 2000);
        
        // Call methods
        student.greet();
        System.out.println("I am " + student.getAge(2026) + " years old");
        System.out.println("Learning Java programming!");
    }
}
```

**OOP Concepts Demonstrated:**
- **Encapsulation:** Private fields, public methods
- **Constructor:** Special method to initialize objects
- **this keyword:** Refers to current object
- **Object Creation:** `new` keyword
- **Method Calls:** Using dot notation

This is fundamentally different from C++, where you can write programs without classes.

### Step 7: Write Java vs C++ Comparison (15 minutes)

Create a document named `java-cpp-comparison.txt` (or `.md`) covering:

**Required Comparison Points:**

1. **Compilation Process**
   - C++: Source → Machine code (platform-specific)
   - Java: Source → Bytecode → JVM interprets/JIT compiles

2. **Memory Management**
   - C++: Manual (new/delete, pointers)
   - Java: Automatic (Garbage Collection, no pointers)

3. **Object-Oriented Design**
   - C++: Optional (supports procedural)
   - Java: Mandatory (everything in classes)

4. **Platform Independence**
   - C++: Compile separately for each OS
   - Java: "Write once, run anywhere" (WORA)

5. **Syntax Differences**
   - Headers vs imports
   - cout vs System.out.println
   - Pointers vs references
   - Main function signature

**Format:**
- 200-300 words
- Create a comparison table
- Include code examples
- Explain pros/cons of each approach

**Example Structure:**
```markdown
# Java vs C++ Comparison

## Compilation and Execution
C++ programs...
Java programs...

## Memory Management
[Comparison]

## Object-Oriented Programming
[Comparison]

## Conclusion
[Which to use when]
```

## Evaluation Criteria

Your submission will be assessed on:

1. **Code Correctness** (30%)
   - HelloWorld.java compiles and runs
   - Enhanced version works correctly
   - OOP version demonstrates proper class design
   - Proper Java naming conventions followed

2. **Understanding of Concepts** (25%)
   - Comparison document shows deep understanding
   - Key differences clearly explained
   - Accurate technical information

3. **Documentation** (25%)
   - All required screenshots provided
   - Screenshots show complete workflow
   - Code is well-commented

4. **OOP Implementation** (20%)
   - Person class properly designed
   - Encapsulation demonstrated
   - Constructor and methods work correctly

## Required Deliverables

Submit folder named `java-hello-world-[yourname]` containing:

1. **Source Files:**
   - `HelloWorld.java`
   - `HelloWorldEnhanced.java`
   - `Person.java`

2. **Compiled Files:**
   - `HelloWorld.class`
   - `HelloWorldEnhanced.class`
   - `Person.class`

3. **Documentation:**
   - `java-cpp-comparison.md` (200-300 words)
   - `screenshots/` folder:
     - `basic-compilation.png`
     - `basic-execution.png`
     - `enhanced-output.png`
     - `oop-output.png`

**Submission Format:**
- ZIP file: `java-hello-world-[yourname].zip`

## Common Mistakes to Avoid

- **Filename doesn't match class name** - Most common error!
- **Wrong capitalization** - Java is case-sensitive
- **Using .class extension when running** - Use class name only
- **Forgetting public on main method** - Must be public
- **Wrong main signature** - Must be exact: `public static void main(String[] args)`
- **Trying to run .java file** - Must compile first
- **Not setting JAVA_HOME** - Some IDEs require this

## Bonus Challenges

1. **Command-Line Arguments:**
   ```java
   public static void main(String[] args) {
       if (args.length > 0) {
           System.out.println("Hello, " + args[0] + "!");
       }
   }
   ```
   Run with: `java HelloWorld Jasmine`

2. **Multiple Classes:**
   Create separate `Greeting.java` file and use it in `HelloWorld.java`

3. **Packages:**
   Organize classes into package structure

4. **Scanner Input:**
   ```java
   import java.util.Scanner;
   Scanner scanner = new Scanner(System.in);
   System.out.print("Enter your name: ");
   String name = scanner.nextLine();
   System.out.println("Hello, " + name + "!");
   ```

5. **Exception Handling:**
   Add try-catch blocks for robust error handling

## Java vs C++: Quick Reference

| Feature | C++ | Java |
|---------|-----|------|
| **Paradigm** | Multi-paradigm | Pure OOP |
| **Compilation** | Machine code | Bytecode |
| **Memory** | Manual | Garbage collected |
| **Pointers** | Yes | No (references only) |
| **Multiple Inheritance** | Yes | No (interfaces instead) |
| **Operator Overloading** | Yes | No |
| **Preprocessor** | Yes (#include) | No (import) |
| **Platform** | Dependent | Independent |
| **Speed** | Faster | Slightly slower |
| **Safety** | Less safe | More safe |

## Understanding the JVM

The Java Virtual Machine provides:
- **Platform Independence:** Same bytecode runs on Windows, Mac, Linux
- **Security:** Bytecode verification before execution
- **Memory Management:** Automatic garbage collection
- **JIT Compilation:** Runtime optimization for performance
- **Class Loading:** Dynamic loading of classes

## Tips for Success

1. **Exact Class Names:** Filename must match class name exactly
2. **Case Sensitivity:** Java is stricter than some languages
3. **One Public Class:** Only one public class per file
4. **Save Before Compiling:** Ensure file is saved
5. **Clean Compilation:** Delete .class files if issues arise
6. **Read Error Messages:** Java errors are usually clear
7. **Use IDE:** IntelliJ or Eclipse can catch errors early

## Real-World Application

Java is used for:
- **Android Apps:** Primary language for Android development
- **Enterprise Systems:** Banking, finance, large corporations
- **Web Applications:** Spring Boot, Jakarta EE
- **Big Data:** Hadoop, Spark
- **Cloud Services:** AWS Lambda, Google Cloud
- **Games:** Minecraft (Java Edition)

## Next Steps

After mastering Hello World:
- Data types and variables
- Control structures (if/else, loops)
- Arrays and collections
- Object-oriented principles
- Exception handling
- File I/O operations

## Submission Checklist

- [ ] HelloWorld.java compiles without errors
- [ ] Program outputs "Hello, World!"
- [ ] Enhanced version includes variables
- [ ] OOP version creates and uses objects
- [ ] All .class files generated successfully
- [ ] Comparison document completed (200-300 words)
- [ ] All 4 screenshots captured
- [ ] Files properly named and organized
- [ ] ZIP file created

Welcome to Java programming - where everything is an object!