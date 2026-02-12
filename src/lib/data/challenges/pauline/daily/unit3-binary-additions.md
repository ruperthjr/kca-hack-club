---
title: "Binary Addition: Fundamentals and Verification"
description: "Master binary addition by adding 1101₂ and 1011₂, verifying results, and exploring hardware relevance."
difficulty: "beginner"
unit: "Unit 3: Fundamentals of Computer Systems"
day: 3
week: 1
month: 1
technologies:
    - "Binary Arithmetic"
    - "Digital Logic"
    - "Number Systems"
    - "Logic Gates"
    - "Computer Architecture"
learningOutcomes:
    - "Perform multi-bit binary addition with carries"
    - "Convert between binary and decimal representations"
    - "Explain binary addition rules and carry propagation"
    - "Verify binary arithmetic using multiple methods"
    - "Relate binary addition to hardware implementations"
estimatedTime: "45-60 minutes"
requirements:
    - "Basic understanding of binary numbers"
    - "Familiarity with decimal system"
    - "Ability to follow step-by-step procedures"
    - "Pen and paper for calculations"
    - "Interest in computer hardware concepts"
deliverables:
    - "Step-by-step binary addition with carries"
    - "Decimal verification of results"
    - "Explanation of addition rules and carry logic"
    - "Alternative addition method"
    - "Brief note on hardware implementation"
resources:
  - name: "Khan Academy: Binary Addition"
    url: "https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/binary-addition"
  - name: "NANDGame: Build a Binary Adder"
    url: "https://nandgame.com/"
  - name: "Binary Calculator Tool"
    url: "https://www.calculator.net/binary-calculator.html"
  - name: "Computer Systems: A Programmer's Perspective"
    url: "http://csapp.cs.cmu.edu/"
  - name: "Wikipedia: Binary Addition"
    url: "https://en.wikipedia.org/wiki/Binary_number#Addition"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-11"
unlockDate: "2026-02-11"
---

# Binary Addition Challenge: 1101₂ + 1011₂

## Overview

Binary addition is a core operation in digital computers, forming the basis of arithmetic logic units and digital circuit design. Mastering binary addition deepens your understanding of how computers process numbers at the hardware level and supports skills in programming, electronics, and computer architecture.

## Objective

Add the binary numbers 1101₂ and 1011₂ using proper binary addition rules, show all steps with carries, verify your result by converting to decimal, and explain the process and its hardware relevance.

## Prerequisites

- Understanding of binary and decimal number systems
- Basic addition skills
- Familiarity with positional notation
- Pen and paper for working out steps
- Interest in digital logic

## Instructions

### Part 1: State Binary Addition Rules

- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 0, carry 1
- With carry-in: 1 + 1 + 1 = 1, carry 1

### Part 2: Perform Step-by-Step Binary Addition

1. Align the numbers by position:
        ```
            1101₂
        + 1011₂
        ```
2. Add from right (least significant bit) to left, tracking carries:
        - 1 + 1 = 0, carry 1
        - 0 + 1 + 1 (carry) = 0, carry 1
        - 1 + 0 + 1 (carry) = 0, carry 1
        - 1 + 1 + 1 (carry) = 1, carry 1
        - Final carry: 1 (write as leftmost bit)
3. Result: **11000₂**

### Part 3: Verify and Explain

- Convert 1101₂ to decimal: 13
- Convert 1011₂ to decimal: 11
- Add: 13 + 11 = 24
- Convert 24 to binary: 11000₂
- Explain how carries propagate and why the result needs 5 bits.

## Deliverables

1. Step-by-step binary addition with carries
2. Decimal conversion and verification
3. Explanation of binary addition rules and carry logic
4. Alternative method (e.g., sequential addition)
5. Brief note on hardware (full adder, ripple carry adder)

## Evaluation Criteria

| Criteria                        | Weight | Description                                   |
|----------------------------------|--------|-----------------------------------------------|
| Correct step-by-step addition    | 40%    | All steps and carries shown accurately        |
| Decimal verification             | 20%    | Inputs and result correctly converted         |
| Explanation of rules and carries | 20%    | Clear, concise, and technically correct       |
| Alternative/hardware relevance   | 20%    | Shows understanding beyond basic calculation  |

## Tips & Common Mistakes

- Always add from right to left
- Track carries at each step
- Double-check decimal conversions
- Don’t forget the final carry bit

## Bonus Challenges (Optional)

1. Add two larger binary numbers (e.g., 10110₂ + 11101₂)
2. Implement binary addition in your favorite programming language

## Submission

Submit your step-by-step addition, decimal verification, explanations, and any bonus work as a markdown file or clear photos/scans of your handwritten work.
