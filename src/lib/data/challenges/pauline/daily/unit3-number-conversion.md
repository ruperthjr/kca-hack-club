---
title: "Number System Conversion: Decimal to Binary and Hexadecimal"
description: "Master decimal to binary and hexadecimal conversions with step-by-step methods, verification, and real-world computing applications."
difficulty: "beginner"
unit: "Unit 3: Fundamentals of Computer Systems"
day: 1
week: 1
month: 1
technologies:
   - "Number Systems"
   - "Binary"
   - "Hexadecimal"
   - "Computer Architecture"
   - "Digital Logic"
learningOutcomes:
   - "Perform decimal to binary and hexadecimal conversions with full working."
   - "Verify conversions by reversing the process."
   - "Explain the significance of binary and hexadecimal in computing."
   - "Identify real-world uses of binary and hexadecimal systems."
   - "Relate binary and hexadecimal representations directly."
estimatedTime: "45-60 minutes"
requirements:
   - "Basic arithmetic skills"
   - "Calculator (physical or digital)"
   - "Notebook or digital editor"
   - "Access to Python or JavaScript for verification"
   - "Willingness to show all steps"
deliverables:
   - "Step-by-step decimal to binary conversion for 42"
   - "Step-by-step decimal to hexadecimal conversion for 42"
   - "Verification of both conversions"
   - "Explanation of binary-hexadecimal relationship"
   - "Summary table of all conversions"
   - "Discussion of computing applications with real-world examples"
resources:
  - name: "Khan Academy: Number Systems"
    url: "https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/number-systems-introduction"
  - name: "GeeksforGeeks: Number System Conversions"
    url: "https://www.geeksforgeeks.org/number-system-and-base-conversions/"
  - name: "RapidTables: Decimal to Binary/Hex Converter"
    url: "https://www.rapidtables.com/convert/number/decimal-to-binary.html"
  - name: "Python Documentation: bin() and hex()"
    url: "https://docs.python.org/3/library/functions.html#bin"
  - name: "Wikipedia: Hexadecimal"
    url: "https://en.wikipedia.org/wiki/Hexadecimal"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Number System Conversion: Decimal 42

## Overview

Understanding how to convert numbers between decimal, binary, and hexadecimal is fundamental in computer science. These conversions are essential for interpreting how computers store, process, and represent data, and are widely used in programming, networking, and digital electronics.

## Objective

Convert the decimal number **42** to binary and hexadecimal, verify your results, and explain the importance and real-world applications of these number systems in computing.

## Prerequisites

- Familiarity with basic arithmetic operations
- Calculator or programming language (Python/JavaScript) for verification
- Notebook or digital editor for working out steps

## Instructions

### Part 1: Decimal to Binary Conversion (42₁₀ → ?₂)

**Step-by-Step Division Method:**

```
42 ÷ 2 = 21 remainder 0  ← LSB
21 ÷ 2 = 10 remainder 1
10 ÷ 2 = 5  remainder 0
5 ÷ 2  = 2  remainder 1
2 ÷ 2  = 1  remainder 0
1 ÷ 2  = 0  remainder 1  ← MSB

Reading remainders from bottom to top: 101010₂
```

**Verification:**

```
101010₂ = (1×32) + (0×16) + (1×8) + (0×4) + (1×2) + (0×1) = 32 + 0 + 8 + 0 + 2 + 0 = 42₁₀
```

### Part 2: Decimal to Hexadecimal Conversion (42₁₀ → ?₁₆)

**Step-by-Step Division Method:**

```
42 ÷ 16 = 2 remainder 10 (A in hex)
2 ÷ 16  = 0 remainder 2

Reading from bottom to top: 2A₁₆
```

**Verification:**

```
2A₁₆ = (2×16) + (10×1) = 32 + 10 = 42₁₀
```

### Part 3: Binary to Hexadecimal Direct Conversion

Group binary digits into sets of 4 (right to left):

```
101010₂ → 0010 1010
0010₂ = 2₁₆, 1010₂ = A₁₆ → 2A₁₆
```

### Part 4: Summary Table

| Decimal | Binary   | Hexadecimal | Octal (Bonus) |
|---------|----------|-------------|---------------|
| 42₁₀    | 101010₂  | 2A₁₆        | 52₈           |

### Part 5: Importance in Computing

#### Why Binary?

- Digital circuits use two voltage levels (on/off).
- Binary is robust against noise and easy to implement.
- All logic operations in computers are based on binary.

**Examples:**
- File permissions (Linux): rwx = 111₂ = 7₈
- IP addresses: 192.168.1.1 = 11000000.10101000.00000001.00000001₂
- Memory addressing: 64-bit systems use 64 binary digits.

#### Why Hexadecimal?

- Compact: 1 hex digit = 4 binary digits.
- Easy conversion between binary and hex.
- Widely used in programming, debugging, and color codes.

**Examples:**
- Memory addresses: 0x7FFF5FBFF5A0
- Color codes: #2A2A2A = (42,42,42) in RGB
- Machine code: MOV AX, 42 → B8 2A 00

## Deliverables

1. Step-by-step decimal to binary conversion for 42
2. Step-by-step decimal to hexadecimal conversion for 42
3. Verification of both conversions
4. Explanation of binary-hexadecimal relationship
5. Summary table of all conversions
6. Discussion of computing applications with real-world examples

## Evaluation Criteria

| Criteria                | Weight | Description                                      |
|-------------------------|--------|--------------------------------------------------|
| Binary Conversion       | 25%    | Complete, correct, and fully explained           |
| Hexadecimal Conversion  | 25%    | Complete, correct, and fully explained           |
| Verification            | 20%    | Both conversions verified with calculations      |
| Computing Applications  | 20%    | Clear explanations and at least 3 real examples  |
| Presentation            | 10%    | Well-organized, clear, and error-free            |

## Tips & Common Mistakes

- Always read binary remainders from bottom to top.
- Show every division step.
- Double-check by converting back to decimal.
- Don’t confuse hex digit A (10) with decimal 10.
- Include units (₂, ₁₆, ₁₀) for clarity.

## Bonus Challenges (Optional)

1. Convert 42₁₀ to octal (base-8).
2. Add 101010₂ + 10₂ in binary.
3. Convert 1000₁₀ to binary and hex.
4. Research two's complement for negative numbers.

## Submission

Submit your completed work as a PDF or Markdown file, ensuring all deliverables are included and clearly formatted.
