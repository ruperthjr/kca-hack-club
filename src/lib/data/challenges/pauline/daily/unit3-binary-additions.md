---
title: "Binary Addition - Computer Arithmetic Fundamentals"
description: "Add binary numbers 1101 and 1011 with complete step-by-step work and verification"
difficulty: "beginner"
unit: "Unit 3: Fundamentals of Computer Systems"
day: 3
technologies:
    - "Binary Arithmetic"
    - "Computer Arithmetic"
    - "Number Systems"
    - "Digital Logic"
learningOutcomes:
    - "Perform binary addition with carries"
    - "Convert between binary and decimal"
    - "Explain binary addition rules"
    - "Verify binary arithmetic results"
estimatedTime: "45-60 minutes"
requirements:
    - "Understanding of binary number system"
    - "Basic addition skills"
    - "Pen and paper for working"
deliverables:
    - "Step-by-step binary addition"
    - "Decimal conversion verification"
    - "Carry propagation explanation"
    - "Error checking methods"
resources:
  - name: "Bryant: Computer Systems: A Programmer's Perspective, 3rd Ed."
    url: "http://csapp.cs.cmu.edu/"
  - name: "Petzold: Code: The Hidden Language"
    url: "https://www.charlespetzold.com/code/"
  - name: "Khan Academy: Binary Addition"
    url: "https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/binary-addition"
  - name: "NANDGame: Build a Binary Adder"
    url: "https://nandgame.com/"
  - name: "Binary Calculator Tool"
    url: "https://www.calculator.net/binary-calculator.html"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-11"
unlockDate: "2026-02-11"
---

# Binary Addition Challenge: 1101 + 1011

## Overview

Binary addition is the fundamental arithmetic operation in digital computers, implemented using logic gates at the hardware level. Understanding binary addition is essential for computer architecture, digital logic design, and low-level programming.

## Objective

Add the binary numbers 1101₂ and 1011₂ using proper binary addition rules with carry propagation. Show complete step-by-step work, verify using decimal conversion, and explain the process.

## Instructions

### 1. Binary Addition Rules

- **Basic Rules (without carry-in):**
    - 0 + 0 = 0
    - 0 + 1 = 1
    - 1 + 0 = 1
    - 1 + 1 = 0, carry 1 (written as 10₂)

- **Complete Rules (with carry-in):**
    - 0 + 0 + 0 = 0
    - 0 + 0 + 1 = 1
    - 0 + 1 + 0 = 1
    - 0 + 1 + 1 = 0, carry 1
    - 1 + 0 + 0 = 1
    - 1 + 0 + 1 = 0, carry 1
    - 1 + 1 + 0 = 0, carry 1
    - 1 + 1 + 1 = 1, carry 1

- **Positional Notation:**
    - Binary is base-2, so each position represents a power of 2.
    - Example: 1 1 0 1 (positions: 2³ 2² 2¹ 2⁰; values: 8 4 0 1)

### 2. Step-by-Step Binary Addition

- **Given Numbers:**
    - A = 1101₂
    - B = 1011₂

- **Step 1: Align Numbers by Position**
    ```
    Position: 2³ 2² 2¹ 2⁰
                        1  1  0  1   (1101₂)
                    + 1  0  1  1   (1011₂)
                    ──────────────
    ```

- **Step 2: Add Least Significant Bit (2⁰ position)**
    - 1 (A) + 1 (B) = 0, carry 1

- **Step 3: Add 2¹ position (include carry)**
    - 0 (A) + 1 (B) + 1 (carry) = 0, carry 1

- **Step 4: Add 2² position (include carry)**
    - 1 (A) + 0 (B) + 1 (carry) = 0, carry 1

- **Step 5: Add 2³ position (include carry)**
    - 1 (A) + 1 (B) + 1 (carry) = 1, carry 1

- **Step 6: Handle Final Carry**
    - Carry from 2³ position goes to 2⁴ position

- **Complete Vertical Addition:**
    ```
        1111   ← Carries
        1101₂  ← A
     +1011₂  ← B
     ───────
     11000₂  ← Result
    ```

### 3. Verification

- **Decimal Conversion:**
    - 1101₂ = (1×8) + (1×4) + (0×2) + (1×1) = 13₁₀
    - 1011₂ = (1×8) + (0×4) + (1×2) + (1×1) = 11₁₀
    - 13 + 11 = 24₁₀

- **Convert Result Back to Binary:**
    - 24₁₀ = 11000₂

### 4. Alternative Methods

- **Group Addition:** Add by breaking into groups (e.g., 1000 + 1000, etc.).
- **Sequential Addition:** Add each bit sequentially with carries.

### 5. Hardware Implementation

- **Half Adder:** Sum = A XOR B, Carry = A AND B
- **Full Adder:** Sum = A XOR B XOR Carry-in, Carry-out = (A AND B) OR (Carry-in AND (A XOR B))
- **Ripple Carry Adder:** Connect full adders in series for multi-bit addition.

### 6. Error Checking

- **Parity Check:** Odd + Odd = Even parity
- **Range Check:** 4-bit numbers overflow, result needs 5 bits
- **Two's Complement Check:** Signed interpretation changes meaning

### 7. Related Binary Operations

- **Subtraction:** 1101₂ - 1011₂ = 0010₂
- **Multiplication:** 1101₂ × 1011₂ = 10001111₂
- **Division:** 1101₂ ÷ 1011₂ = 1 remainder 10₂

### 8. Real-World Applications

- **Computer Arithmetic Units:** ALU, CPU addition circuits
- **Network Protocols:** Checksums, sequence numbers
- **File Systems:** Addressing, parity
- **Graphics Programming:** Color blending, coordinate arithmetic

### 9. Common Errors and Pitfalls

- Incorrect carry handling
- Misalignment of numbers
- Confusing binary with decimal
- Adding from left instead of right

### 10. Assessment Criteria

- Step-by-step addition with carries
- Decimal verification
- Explanation of rules and carry propagation
- Alternative method shown

### 11. Extension Challenges

- Add larger numbers
- Add multiple numbers
- Signed (two's complement) addition
- Hexadecimal conversion
- Programming implementation

## Submission Checklist

- [ ] Step-by-step binary addition shown
- [ ] All carries clearly indicated
- [ ] Final result: 11000₂
- [ ] Decimal conversion of inputs
- [ ] Decimal addition: 13 + 11 = 24
- [ ] Back-conversion: 24 = 11000₂
- [ ] Binary addition rules stated
- [ ] Alternative method shown
- [ ] Hardware relevance discussed
- [ ] All calculations verified
- [ ] No arithmetic errors

This binary addition exercise builds foundational skills for computer architecture, digital logic design, assembly programming, and understanding how computers perform arithmetic at the hardware level.
