---
title: "Binary Number System Conversion"
description: "Convert decimal numbers to binary representation and understand base-2 numbering system"
difficulty: "beginner"
unit: "Unit 1: Fundamentals of Computer Systems"
day: 3
technologies:
    - "Number Systems"
    - "Binary Arithmetic"
    - "Computer Mathematics"
learningOutcomes:
    - "Convert decimal numbers to binary representation"
    - "Understand place values in binary system"
    - "Perform division-by-2 conversion method"
    - "Verify binary conversions using arithmetic"
estimatedTime: "20-30 minutes"
requirements:
    - "Textbook: Code: The Hidden Language of Computer Hardware and Software"
    - "Calculator (optional, for verification)"
    - "Pen and paper for manual calculations"
deliverables:
    - "Step-by-step conversion of decimal 10 to binary"
    - "Three additional decimal-to-binary conversions"
    - "Explanation of binary place values (bits, bytes, nibbles)"
resources:
  - name: "Decimal to Binary Conversion Tutorial"
    url: "https://www.electronics-tutorials.ws/binary/bin_2.html"
  - name: "Binary Number System Explained"
    url: "https://www.mathsisfun.com/binary-number-system.html"
  - name: "Interactive Binary Converter Tool"
    url: "https://www.rapidtables.com/convert/number/decimal-to-binary.html"
  - name: "Binary Arithmetic Operations Guide"
    url: "https://www.tutorialspoint.com/computer_logical_organization/binary_arithmetic.htm"
  - name: "Number Systems in Computing"
    url: "https://www.geeksforgeeks.org/number-system-and-base-conversions/"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-11"
unlockDate: "2026-02-11"
---

# Binary Number System Conversion Challenge

## Overview

In this foundational computing challenge, you'll master the essential skill of converting between decimal and binary number systems. Understanding binary representation is crucial for computer science, digital electronics, and low-level programming.

## Objective

Convert the decimal number 10 to its binary equivalent using the division-by-2 method, then verify your result and extend your understanding to additional conversions and binary concepts.

## Instructions

### Step 1: Understand Binary Basics

**Key Concepts:**

- **Binary:** Base-2 number system (digits: 0 and 1)
- **Bit:** Single binary digit (0 or 1)
- **Byte:** 8 bits (e.g., 10110101)
- **Nibble:** 4 bits (half a byte)
- **Place Values:** Right-to-left: 2⁰, 2¹, 2², 2³, etc. (1, 2, 4, 8, 16, ...)

**Decimal 10 in Binary:**

- Should equal: 1×8 + 0×4 + 1×2 + 0×1 = 8 + 0 + 2 + 0 = 10
- Binary representation: 1010

### Step 2: Convert Decimal 10 to Binary

Use the division-by-2 method:

**Procedure:**

1. Start with decimal number: 10
2. Divide by 2, record quotient and remainder:
        - 10 ÷ 2 = 5 remainder 0
        - 5 ÷ 2 = 2 remainder 1
        - 2 ÷ 2 = 1 remainder 0
        - 1 ÷ 2 = 0 remainder 1
3. Read remainders backward (bottom to top): 1010

**Step-by-step table:**

| Division   | Quotient | Remainder |
|------------|----------|-----------|
| 10 ÷ 2     | 5        | 0   ↑     |
| 5 ÷ 2      | 2        | 1   │     |
| 2 ÷ 2      | 1        | 0   │     |
| 1 ÷ 2      | 0        | 1   ↓     |

Binary result: **1010₂**

### Step 3: Verify Your Conversion

**Method 1: Expand binary places:**

1010₂ = (1 × 2³) + (0 × 2²) + (1 × 2¹) + (0 × 2⁰)  
= (1 × 8) + (0 × 4) + (1 × 2) + (0 × 1)  
= 8 + 0 + 2 + 0  
= 10₁₀

**Method 2: Add place values:**

From right to left: 0 (1s place), 1 (2s place), 0 (4s place), 1 (8s place)  
Sum positions with 1: 8 + 2 = 10

### Step 4: Practice Additional Conversions

Convert these decimal numbers to binary:

- **Decimal 7:** (should be 111₂)
- **Decimal 15:** (should be 1111₂)
- **Decimal 21:** (should be 10101₂)

Show your work using division-by-2 method for each.

### Step 5: Explore Binary Concepts

Answer these questions:

- What is the maximum decimal number representable with:
        - 4 bits (nibble): ______
        - 8 bits (byte): ______
        - 16 bits (2 bytes): ______
- How would you represent these in binary:
        - Decimal 0: ______
        - Decimal 1: ______
        - Decimal 2: ______
        - Decimal 3: ______
- What happens when you add binary 1010 + 0001? (Show work)

## Evaluation Criteria

- **Accuracy (40%):** Correct conversion of decimal 10 to binary 1010
- **Methodology (30%):** Proper use of division-by-2 method with clear steps
- **Verification (20%):** Correct validation of conversion results
- **Extension (10%):** Accurate additional conversions and concept answers

## Common Mistakes to Avoid

- Reading remainders in wrong direction (top-to-bottom instead of bottom-to-top)
- Forgetting to continue division until quotient reaches 0
- Incorrect binary place values (wrong powers of 2)
- Confusing binary with other bases (hexadecimal, octal)
- Not verifying results through back-conversion
- Mishandling of decimal 0 and 1 (special cases)

## Real-World Application

Binary conversion skills help you:

- Understand how computers store and process data
- Debug low-level programming issues
- Work with bitwise operations in programming languages
- Design digital circuits and logic gates
- Understand memory addressing and data representation
- Prepare for computer architecture and digital logic courses

## Submission Format

Submit a single document showing:

1. Step-by-step conversion of decimal 10 to binary
2. Verification of your conversion
3. Three additional conversions (7, 15, 21) with work shown
4. Answers to binary concept questions

**Format:** PDF or Markdown with clear sections
