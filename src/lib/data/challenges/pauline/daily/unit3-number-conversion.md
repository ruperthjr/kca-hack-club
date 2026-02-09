---
title: "Number System Conversion - Decimal to Binary and Hexadecimal"
description: "Convert decimal 42 to binary and hexadecimal with complete step-by-step work shown"
difficulty: "beginner"
unit: "Unit 3: Fundamentals of Computer Systems"
day: 1
technologies:
  - "Number Systems"
  - "Binary"
  - "Hexadecimal"
  - "Computer Architecture"
learningOutcomes:
  - "Convert decimal numbers to binary"
  - "Convert decimal numbers to hexadecimal"
  - "Understand positional notation in different bases"
  - "Explain importance of binary and hex in computing"
estimatedTime: "45-60 minutes"
requirements:
  - "Calculator for verification"
  - "Notebook or digital document"
  - "Pencil and paper for working"
deliverables:
  - "Decimal 42 to binary conversion (complete steps)"
  - "Decimal 42 to hexadecimal conversion (complete steps)"
  - "Verification of both conversions"
  - "Explanation of why these systems are used in computing"
resources:
  - name: "Khan Academy: Number Systems"
    url: "https://www.khanacademy.org/math/algebra-home/alg-intro-to-algebra/algebra-alternate-number-bases/v/number-systems-introduction"
  - name: "GeeksforGeeks: Number System Conversions"
    url: "https://www.geeksforgeeks.org/number-system-and-base-conversions/"
  - name: "RapidTables: Decimal to Binary/Hex Converter"
    url: "https://www.rapidtables.com/convert/number/decimal-to-binary.html"
  - name: "Python Documentation — bin() and hex() built-ins"
    url: "https://docs.python.org/3/library/functions.html#bin"
  - name: "Wikipedia: Binary numeral system"
    url: "https://en.wikipedia.org/wiki/Binary_numeral_system"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Number System Conversion Challenge

## Overview

Computers use binary (base-2) internally because digital circuits have two states: on and off. Hexadecimal (base-16) is used by programmers as a compact way to represent binary numbers. Understanding these conversions is fundamental to computer science.

## Objective

Convert the decimal number **42** to both binary and hexadecimal, showing complete step-by-step work. Verify your answers and explain why computers use these number systems.

## Instructions

### Part 1: Decimal to Binary Conversion (42₁₀ → ?₂)

**Method: Successive Division by 2**

Show every step of the division process:

**Step-by-Step Conversion:**

```
42 ÷ 2 = 21 remainder 0  ← Least Significant Bit (LSB)
21 ÷ 2 = 10 remainder 1
10 ÷ 2 = 5  remainder 0
5 ÷ 2  = 2  remainder 1
2 ÷ 2  = 1  remainder 0
1 ÷ 2  = 0  remainder 1  ← Most Significant Bit (MSB)

Reading remainders from bottom to top:
42₁₀ = 101010₂
```

**Visual Representation:**

```
Division     Quotient    Remainder    Position
42 ÷ 2   =      21           0        Bit 0 (2⁰)
21 ÷ 2   =      10           1        Bit 1 (2¹)
10 ÷ 2   =       5           0        Bit 2 (2²)
5 ÷ 2    =       2           1        Bit 3 (2³)
2 ÷ 2    =       1           0        Bit 4 (2⁴)
1 ÷ 2    =       0           1        Bit 5 (2⁵)

Answer: 101010₂ (reading remainders from bottom to top)
```

**Verification by Converting Back to Decimal:**

```
101010₂ = ?₁₀

Position:  5   4   3   2   1   0
Bit:       1   0   1   0   1   0
Power:    2⁵  2⁴  2³  2²  2¹  2⁰

Calculation:
= (1 × 2⁵) + (0 × 2⁴) + (1 × 2³) + (0 × 2²) + (1 × 2¹) + (0 × 2⁰)
= (1 × 32) + (0 × 16) + (1 × 8) + (0 × 4) + (1 × 2) + (0 × 1)
= 32 + 0 + 8 + 0 + 2 + 0
= 42₁₀ ✓

Verification successful!
```

**Alternative Method: Subtraction by Powers of 2**

```
Find largest power of 2 ≤ 42:
2⁶ = 64 (too large)
2⁵ = 32 ✓

42 - 32 = 10
Bit 5 = 1

2⁴ = 16 (too large for 10)
Bit 4 = 0

2³ = 8 ✓
10 - 8 = 2
Bit 3 = 1

2² = 4 (too large for 2)
Bit 2 = 0

2¹ = 2 ✓
2 - 2 = 0
Bit 1 = 1

2⁰ = 1 (too large for 0)
Bit 0 = 0

Result: 101010₂
```

### Part 2: Decimal to Hexadecimal Conversion (42₁₀ → ?₁₆)

**Hexadecimal Digit Reference:**

```
Decimal:  0  1  2  3  4  5  6  7  8  9  10  11  12  13  14  15
Hex:      0  1  2  3  4  5  6  7  8  9   A   B   C   D   E   F
```

**Method: Successive Division by 16**

```
42 ÷ 16 = 2 remainder 10

Quotient = 2
Remainder = 10 = A (in hexadecimal)

Since quotient is less than 16, we stop here.

Reading from bottom to top: 2A₁₆

Therefore: 42₁₀ = 2A₁₆
```

**Detailed Working:**

```
Division     Quotient    Remainder    Hex Digit    Position
42 ÷ 16  =       2           10           A        16⁰ (ones)
2 ÷ 16   =       0            2           2        16¹ (sixteens)

Answer: 2A₁₆ (reading from bottom to top)
```

**Verification by Converting Back to Decimal:**

```
2A₁₆ = ?₁₀

Position:  1    0
Digit:     2    A (A = 10 in decimal)
Power:    16¹  16⁰

Calculation:
= (2 × 16¹) + (10 × 16⁰)
= (2 × 16) + (10 × 1)
= 32 + 10
= 42₁₀ ✓

Verification successful!
```

### Part 3: Relationship Between Binary and Hexadecimal

**Binary to Hexadecimal Direct Conversion:**

```
Binary: 101010₂

Step 1: Group into sets of 4 bits (from right to left)
        0010 1010
        
Step 2: Convert each group to hexadecimal
        0010₂ = 2₁₆
        1010₂ = A₁₆
        
Result: 2A₁₆

This confirms our answer!
```

**Why This Works:**

```
16 = 2⁴

One hexadecimal digit represents exactly 4 binary digits (bits)

Binary    Decimal    Hexadecimal
0000         0            0
0001         1            1
0010         2            2
0011         3            3
0100         4            4
0101         5            5
0110         6            6
0111         7            7
1000         8            8
1001         9            9
1010        10            A
1011        11            B
1100        12            C
1101        13            D
1110        14            E
1111        15            F
```

### Part 4: Summary Table

**Complete Conversion Summary:**

```
┌──────────┬─────────┬──────────────┬─────────────────┐
│ Decimal  │ Binary  │ Hexadecimal  │  Octal (bonus)  │
├──────────┼─────────┼──────────────┼─────────────────┤
│   42₁₀   │ 101010₂ │     2A₁₆     │      52₈        │
└──────────┴─────────┴──────────────┴─────────────────┘

Verification:
Binary:      (32 + 8 + 2) = 42 ✓
Hexadecimal: (2×16 + 10) = 42 ✓
Octal:       (5×8 + 2) = 42 ✓
```

### Part 5: Why These Number Systems Matter in Computing

**Binary (Base-2):**

**Why Computers Use Binary:**
```
1. Digital circuits have two stable states:
   - ON (1) = High voltage (typically 5V or 3.3V)
   - OFF (0) = Low voltage (typically 0V)

2. Reliability:
   - Easy to distinguish between two states
   - Less susceptible to electrical noise
   - Simple to implement with transistors

3. Boolean Logic:
   - Binary maps perfectly to Boolean algebra (TRUE/FALSE)
   - All computer operations reduce to binary logic gates
   - AND, OR, NOT, XOR operations work on binary digits
```

**Real-World Binary Examples:**

```
1. File Permissions (Linux):
   rwx = 111₂ = 7₈ (read, write, execute)
   r-- = 100₂ = 4₈ (read only)
   
2. IP Addresses:
   192.168.1.1 in binary:
   11000000.10101000.00000001.00000001

3. Memory Addresses:
   64-bit systems use 64 binary digits for memory addressing
   Can address up to 2⁶⁴ bytes = 16 exabytes

4. Image Pixels:
   Each pixel in an 8-bit grayscale image:
   00000000₂ = 0 (black)
   11111111₂ = 255 (white)
```

**Hexadecimal (Base-16):**

**Why Programmers Use Hexadecimal:**
```
1. Compact Representation:
   - 1 hex digit = 4 binary digits
   - Much shorter than writing binary
   - Example: 11111111₂ = FF₁₆ (2 digits vs 8)

2. Easy Conversion:
   - Simple to convert hex to/from binary
   - Just group bits in sets of 4
   - No complex calculations needed

3. Human Readability:
   - Easier to read than long binary strings
   - Easier to spot patterns and errors
   - Standard in programming and debugging
```

**Real-World Hexadecimal Examples:**

```
1. Memory Addresses:
   0x7FFF5FBFF5A0
   (Much clearer than 64-bit binary!)

2. Color Codes (CSS/HTML):
   #FF0000 = Red (255, 0, 0 in RGB)
   #00FF00 = Green (0, 255, 0 in RGB)
   #0000FF = Blue (0, 0, 255 in RGB)
   #2A2A2A = Dark gray (42, 42, 42 in RGB)

3. MAC Addresses:
   00:1A:2B:3C:4D:5E

4. Unicode Characters:
   U+0041 = 'A'
   U+2764 = ❤ (heart symbol)

5. Machine Code:
   Assembly: MOV AX, 42
   Machine code: B8 2A 00
   (2A is hexadecimal for 42)
```

### Part 6: Practice Conversions

**Practice converting these decimal numbers:**

```
Exercise 1: Convert 255₁₀
Binary:    11111111₂
Hex:       FF₁₆

Exercise 2: Convert 128₁₀
Binary:    10000000₂
Hex:       80₁₆

Exercise 3: Convert 100₁₀
Binary:    1100100₂
Hex:       64₁₆

Exercise 4: Convert 16₁₀
Binary:    10000₂
Hex:       10₁₆
```

### Part 7: Common Patterns to Remember

**Powers of 2 (Memorize These):**

```
2⁰ = 1
2¹ = 2
2² = 4
2³ = 8
2⁴ = 16
2⁵ = 32
2⁶ = 64
2⁷ = 128
2⁸ = 256
2⁹ = 512
2¹⁰ = 1024 (1 KB)
2²⁰ = 1,048,576 (1 MB)
2³⁰ = 1,073,741,824 (1 GB)
```

**Important Binary Numbers:**

```
00000000₂ = 0₁₀ = 00₁₆
01111111₂ = 127₁₀ = 7F₁₆
10000000₂ = 128₁₀ = 80₁₆
11111111₂ = 255₁₀ = FF₁₆
```

## Formatting Your Response

**Document Structure:**

```markdown
# Number System Conversion: Decimal 42

## Part 1: Decimal to Binary (42₁₀ → Binary)

### Step-by-Step Division Method:
[Show all division steps]

### Verification:
[Show binary to decimal conversion]

## Part 2: Decimal to Hexadecimal (42₁₀ → Hex)

### Step-by-Step Division Method:
[Show all division steps]

### Verification:
[Show hex to decimal conversion]

## Part 3: Binary to Hexadecimal Direct Conversion
[Show grouping method]

## Part 4: Summary
[Table with all conversions]

## Part 5: Importance in Computing

### Why Binary:
[Explanation with examples]

### Why Hexadecimal:
[Explanation with examples]

### Real-World Applications:
[List at least 3 for each]
```

## Evaluation Criteria

**Binary Conversion (25%):**
- Complete step-by-step work shown
- Correct answer: 101010₂
- Verification calculation included
- Clear explanation of method

**Hexadecimal Conversion (25%):**
- Complete step-by-step work shown
- Correct answer: 2A₁₆
- Verification calculation included
- Hex digit reference shown

**Verification (20%):**
- Both conversions verified correctly
- Calculations shown clearly
- Binary-to-hex relationship demonstrated

**Computing Applications (20%):**
- Clear explanation of why computers use binary
- Clear explanation of why programmers use hex
- At least 3 real-world examples for each

**Presentation (10%):**
- Well-organized
- Clear formatting
- No calculation errors
- Professional appearance

## Required Deliverables

Submit a document (PDF or Markdown) containing:

1. **Decimal to Binary Conversion** (complete steps)
2. **Decimal to Hexadecimal Conversion** (complete steps)
3. **Verification** of both conversions
4. **Binary-Hex Relationship** explanation
5. **Summary Table**
6. **Computing Applications** (why these systems are used)
7. **Real-World Examples** (minimum 3 for each system)

## Common Mistakes to Avoid

- Reading remainders in wrong order (top to bottom instead of bottom to top)
- Forgetting to show all division steps
- Not verifying answers
- Confusing hex digit A (10) with decimal 10
- Arithmetic errors in verification
- Not explaining WHY these systems are important
- Missing units (₂, ₁₆, ₁₀)
- Incomplete working

## Calculator Verification

**After completing by hand, verify using calculator:**

```
Python:
>>> bin(42)
'0b101010'
>>> hex(42)
'0x2a'

JavaScript:
> (42).toString(2)
'101010'
> (42).toString(16)
'2a'

Windows Calculator:
Switch to Programmer mode
Enter 42
View in BIN and HEX modes
```

## Bonus Challenges

1. **Octal Conversion:** Convert 42₁₀ to octal (base-8)
2. **Reverse:** Convert 101010₂ back to decimal showing work
3. **Addition:** Add 101010₂ + 10₂ in binary
4. **Larger Number:** Convert 1000₁₀ to binary and hex
5. **Negative Numbers:** Research two's complement representation

## Tips for Success

1. **Show All Work:** Write every division step
2. **Double-Check:** Verify your answer by converting back
3. **Use Tables:** Create reference tables for hex digits
4. **Practice:** Do the practice problems
5. **Understand Why:** Don't just memorize; understand the process
6. **Group Binary:** Always group binary into 4-bit nibbles

## Submission Checklist

- [ ] Decimal to binary conversion complete
- [ ] All division steps shown for binary
- [ ] Binary result verified
- [ ] Decimal to hex conversion complete
- [ ] All division steps shown for hex
- [ ] Hex result verified
- [ ] Binary-to-hex relationship explained
- [ ] Summary table included
- [ ] Why binary is used explained
- [ ] Why hex is used explained
- [ ] At least 3 real examples for binary
- [ ] At least 3 real examples for hex
- [ ] All calculations are correct
- [ ] Document is well-formatted
- [ ] No spelling or grammar errors
- [ ] Submitted as PDF or Markdown

This foundational knowledge is essential for computer architecture, assembly programming, and low-level systems!