---
title: "Solving Linear Systems with NumPy"
description: "Use NumPy's linear algebra tools to solve and analyze a 3x3 system of equations."
difficulty: "Intermediate"
unit: "COMPUTING MATHEMATICS"
day: 6
week: 1
month: 1
technologies: ["Python", "NumPy", "Linear Algebra"]
learningOutcomes:
    - "Represent a system of linear equations in matrix form Ax = b"
    - "Use numpy.linalg.solve to find the solution"
    - "Verify the solution and handle singular or ill‑conditioned systems"
estimatedTime: "1 hour"
requirements:
    - "Python with NumPy installed"
    - "Basic knowledge of matrices and linear equations"
deliverables:
    - "Python script or Jupyter notebook that solves a given 3x3 system and explains each step"
resources:
  - name: "numpy.linalg.solve – Official Documentation"
    url: "https://numpy.org/doc/stable/reference/generated/numpy.linalg.solve.html"
  - name: "Linear Algebra in NumPy – Tutorial"
    url: "https://numpy.org/doc/stable/reference/routines.linalg.html"
  - name: "3Blue1Brown – Essence of Linear Algebra (video series)"
    url: "https://www.3blue1brown.com/topics/linear-algebra"
  - name: "Solving Systems of Linear Equations – Khan Academy"
    url: "https://www.khanacademy.org/math/algebra-home/alg-system-of-equations"
  - name: "Ill‑conditioned Matrices – Wikipedia"
    url: "https://en.wikipedia.org/wiki/Condition_number"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-14"
unlockDate: "2026-02-14"
---

# Solving Linear Systems with NumPy

## Overview

Systems of linear equations are fundamental in computer science, appearing in graphics, machine learning, optimization, and simulations. NumPy provides efficient linear algebra routines to solve such systems, making it essential to understand both the mathematical and computational aspects.

## Objective

Solve a system of three linear equations using NumPy, verify the solution, and analyze the behavior when the system is singular or ill‑conditioned.

## Prerequisites

- Python with NumPy installed (`pip install numpy`)
- Familiarity with matrix multiplication and inverses

## Instructions

### Part 1: Setup and Solution

- Import `numpy` and `numpy.linalg`.
- Define the coefficient matrix `A` (3x3) and constant vector `b` (3x1) as NumPy arrays with `dtype=float`.
- Use `np.linalg.solve(A, b)` to compute the solution vector `x`.
- Print the solution for `x`, `y`, and `z`.

### Part 2: Verification

- Compute `A @ x` and compare with `b` using `np.allclose()`.
- Compute the inverse of `A` (`np.linalg.inv(A)`) and multiply it with `b` to verify the solution.
- Display the determinant of `A` (`np.linalg.det(A)`).

### Part 3: Handling Singular Systems

- Create a singular matrix, e.g., `[[1,2,3],[4,5,6],[7,8,9]]`.
- Attempt to solve a system with this matrix and observe the error.
- Compute its condition number (`np.linalg.cond(A)`) and explain why a large condition number indicates numerical instability.

## Deliverables

1. Python script (`linear_system_solver.py`) or Jupyter notebook with all code and explanations
2. Output showing the solution, verification, and singular case handling
3. Comments or markdown explaining each step and a short answer: "What does the determinant tell you about the solvability of the system?"

## Evaluation Criteria

| Criteria                | Weight | Description                                              |
|-------------------------|--------|----------------------------------------------------------|
| Correct Solution        | 40%    | The system is solved correctly and verification passes   |
| Understanding of Tools  | 30%    | Proper use of `solve`, `inv`, `det`, `cond`             |
| Singular Case           | 20%    | Correct identification and handling of singular systems  |
| Documentation           | 10%    | Clear comments/markdown explaining the concepts          |

## Tips & Common Mistakes

- Ensure `A` is square and invertible for `np.linalg.solve`.
- Use `dtype=float` to avoid integer division issues.
- `A @ x` is matrix multiplication in Python 3.5+.
- A zero determinant means the matrix is singular; a very small determinant may indicate an ill‑conditioned system.

## Bonus Challenges (Optional)

1. Solve a larger system (4x4 or 5x5) and time the operation for different sizes.
2. Implement your own Gaussian elimination solver and compare its performance with `np.linalg.solve`.

## Submission

Push your script or notebook to `unit6/day6/linear_system_solver.py` (or `.ipynb`) and submit the commit URL.
