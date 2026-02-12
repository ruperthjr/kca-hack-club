---
title: "Multiplication of 2x2 Matrices"
description: "Learn and practice the multiplication of 2x2 matrices, verify results, and understand the non-commutative property of matrix multiplication."
difficulty: "beginner"
unit: "Unit 5: Computing Mathematics"
day: 6
week: 1
month: 1
technologies:
    - Linear Algebra
    - Matrix Operations
    - Mathematics
    - Dot Product
    - Computational Tools
learningOutcomes:
    - Explain the requirements for matrix multiplication.
    - Accurately compute the product of two 2x2 matrices.
    - Demonstrate and explain the non-commutative property of matrix multiplication.
    - Verify matrix multiplication results using online tools.
    - Connect matrix multiplication to real-world applications.
estimatedTime: "20 minutes"
requirements:
    - Basic arithmetic proficiency.
    - Understanding of matrix notation and structure.
    - Familiarity with the dot product.
    - Ability to follow step-by-step calculations.
    - Access to an online matrix calculator.
deliverables:
    - Step-by-step calculation for both A×B and B×A.
    - Written explanation of non-commutativity.
    - Verification using an online matrix calculator (screenshot or result).
    - Summary statement of findings.
    - PDF submission named MatrixMultiply_YourName.pdf.
resources:
  - name: "Khan Academy – Matrix multiplication"
    url: "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:multiplying-matrices-by-matrices/v/matrix-multiplication-intro"
  - name: "Introduction to Linear Algebra (Strang)"
    url: "https://math.mit.edu/~gs/linearalgebra/"
  - name: "Symbolab Matrix Calculator"
    url: "https://www.symbolab.com/solver/matrix-multiply-calculator"
  - name: "WolframAlpha Matrix Multiplication"
    url: "https://www.wolframalpha.com/input/?i=matrix+multiplication"
  - name: "Linear Algebra Done Right (Axler)"
    url: "https://linear.axler.net"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-14"
unlockDate: "2026-02-14"
---

# Multiplication of 2x2 Matrices

## Overview

Matrix multiplication is a fundamental operation in linear algebra, widely used in fields such as computer graphics, engineering, and machine learning. Mastering the multiplication of 2x2 matrices builds a strong foundation for more advanced topics and helps illustrate key properties like non-commutativity.

## Objective

Compute the product of two 2x2 matrices, verify your result, and demonstrate that matrix multiplication is not commutative.

## Prerequisites

- Ability to add and multiply integers.
- Understanding of matrix notation and dimensions.
- Familiarity with the dot product.
- Access to an online matrix calculator for verification.

## Instructions

### Part 1: Multiply Two 2x2 Matrices

Given:
```
A = [[1, 3],
         [2, 0]]
B = [[4, 1],
         [5, 2]]
```
Calculate C = A × B using the row-by-column rule:
- C[1,1] = (1×4) + (3×5) = 19
- C[1,2] = (1×1) + (3×2) = 7
- C[2,1] = (2×4) + (0×5) = 8
- C[2,2] = (2×1) + (0×2) = 2

So, C = [[19, 7], [8, 2]].

### Part 2: Reverse the Order

Compute D = B × A using the same method. Show all steps and compare D with C.

### Part 3: Verify and Explain

Use an online matrix calculator to check both products. Clearly state whether A×B equals B×A and explain what this demonstrates about matrix multiplication.

## Deliverables

1. Typed or handwritten calculations for A×B and B×A.
2. Written explanation of the non-commutative property.
3. Verification screenshot or result from an online calculator.
4. Summary statement of findings.
5. PDF file named MatrixMultiply_YourName.pdf.

## Evaluation Criteria

| Criteria                        | Weight | Description                                      |
|----------------------------------|--------|--------------------------------------------------|
| Correct calculation of A×B       | 40%    | All entries computed accurately                  |
| Correct calculation of B×A       | 30%    | Reverse multiplication shown and correct         |
| Explanation of non-commutativity | 20%    | Clear statement and demonstration                |
| Verification step                | 10%    | Calculator check included and referenced         |

## Tips & Common Mistakes

- Don’t multiply element-wise; use the row-by-column rule.
- Align rows and columns carefully to avoid indexing errors.
- Double-check calculations with an identity matrix for practice.
- Use parentheses to clarify order of operations.
- Always verify your result with a calculator.

## Bonus Challenges (Optional)

1. Multiply two 3x3 matrices of your choice.
2. Prove associativity: (A×B)×C = A×(B×C) for 2x2 matrices.
3. Compute determinants: det(A), det(B), det(A×B), and verify det(A×B) = det(A)·det(B).

## Submission

Submit your completed calculations and explanations as a single PDF file named MatrixMultiply_YourName.pdf.