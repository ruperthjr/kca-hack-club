---
title: "Binary Addition: 1010 + 1101"
description: "Master binary addition by performing step-by-step addition of two 4-bit binary numbers, handling carries, and verifying results with decimal conversion."
difficulty: "beginner"
unit: "Unit 1: Fundamentals of Computer Systems"
day: 6
week: 1
month: 1
technologies:
    - "Binary Arithmetic"
    - "Number Systems"
    - "Digital Logic"
    - "Computer Fundamentals"
    - "Data Representation"
learningOutcomes:
    - "Perform binary addition with proper carry handling."
    - "Translate binary numbers to decimal and verify results."
    - "Understand the significance of binary arithmetic in computing."
    - "Demonstrate step-by-step problem solving in binary addition."
    - "Identify and correct common mistakes in binary calculations."
estimatedTime: "25 minutes"
requirements:
    - "Understand binary and decimal number systems."
    - "Ability to align numbers for column-wise addition."
    - "Familiarity with basic arithmetic operations."
    - "Awareness of place values in binary."
    - "Ability to convert binary numbers to decimal."
deliverables:
    - "Step-by-step binary addition of 1010 and 1101 with carries."
    - "Decimal conversion and verification of all numbers."
    - "Clear documentation or image showing your working."
    - "Summary explaining each step and result."
    - "Well-organized submission (typed, scanned, or screenshot)."
resources:
    - name: "Binary Addition (Khan Academy)"
      url: "https://www.khanacademy.org/computing/computer-science/cryptography/binary-number-system/a/adding-in-binary"
    - name: "Computer Systems: A Programmer's Perspective"
      url: "https://www.pearson.com/store/p/computer-systems-a-programmers-perspective/P100000855187"
    - name: "Code: The Hidden Language of Computer Hardware and Software"
      url: "https://www.microsoftpressstore.com/store/code-the-hidden-language-of-computer-hardware-and-software-9780137909100"
    - name: "The Elements of Computing Systems"
      url: "https://mitpress.mit.edu/9780262539807/the-elements-of-computing-systems/"
    - name: "Digital Design and Computer Architecture"
      url: "https://www.elsevier.com/books/digital-design-and-computer-architecture/harris/978-0-12-820064-3"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-14"
unlockDate: "2026-02-14"
---

# Binary Addition: 1010 + 1101

## Overview

Binary addition is a foundational operation in digital computing, forming the basis for all arithmetic in computer systems. This challenge will strengthen your understanding of binary arithmetic, carry handling, and the relationship between binary and decimal representations.

## Objective

Add the binary numbers 1010 and 1101 step by step, showing all carries, and verify your result by converting all numbers to decimal.

## Prerequisites

- Understanding of binary and decimal number systems
- Ability to align numbers for column-wise addition
- Familiarity with basic arithmetic operations
- Awareness of binary place values (1s, 2s, 4s, 8s)
- Ability to convert binary numbers to decimal

## Instructions

### Part 1: Align the Numbers

Write the two binary numbers one above the other, right-aligned (least significant bit on the right):

```
   1 0 1 0
+  1 1 0 1
  ---------
```

### Part 2: Add Column by Column

Start from the rightmost column (2⁰):

- Column 1 (2⁰): 0 + 1 = 1, carry 0 → write 1.
- Column 2 (2¹): 1 + 0 = 1, carry 0 → write 1.
- Column 3 (2²): 0 + 1 = 1, carry 0 → write 1.
- Column 4 (2³): 1 + 1 = 0, carry 1 → write 0, carry 1 to next column.
- Column 5 (2⁴): (carry 1) → write 1.

Result: **10111** (5-bit number)

Show the full addition with carries above each column.

### Part 3: Verify with Decimal Conversion

Convert each binary number to decimal:

- 1010₂ = 8 + 0 + 2 + 0 = **10**
- 1101₂ = 8 + 4 + 0 + 1 = **13**
- Decimal sum = 10 + 13 = **23**
- 10111₂ = 16 + 0 + 4 + 2 + 1 = **23** ✓

## Deliverables

1. Step-by-step binary addition with carries clearly shown
2. Decimal conversion and verification for all numbers
3. Well-organized document or image of your work
4. Brief summary explaining your process and result
5. Submission in text, image, or PDF format

## Evaluation Criteria

| Criteria                | Weight | Description                                      |
|-------------------------|--------|--------------------------------------------------|
| Correct binary addition | 40%    | Final binary sum is 10111                        |
| Carry handling          | 30%    | Carries are shown and correctly applied          |
| Decimal conversion      | 20%    | All three decimal values are correct             |
| Step-by-step clarity    | 10%    | Work is easy to follow and well-documented       |

## Tips & Common Mistakes

- Remember: 1 + 1 = 0 with carry 1; 1 + 1 + 1 = 1 with carry 1
- Double-check alignment of bits
- If you get a carry beyond the leftmost column, add it as a new bit
- Always verify your result by converting back to decimal

## Bonus Challenges (Optional)

1. Add 1111 and 0001 – observe the carry behavior
2. Add 1010.11 and 1101.01 (binary fractions)
3. Multiply 1010 by 1101 using binary multiplication

## Submission

Submit your work as a scanned/photo of handwritten notes, a typed document, or a screenshot of your digital calculation.