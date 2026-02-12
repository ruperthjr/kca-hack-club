---
title: "Polynomial Differentiation"
description: "Compute the derivative of a polynomial function both symbolically and numerically, then verify results."
difficulty: "Beginner"
unit: "COMPUTING MATHEMATICS"
day: 6
week: 1
month: 1
technologies: ["Python", "SymPy", "Calculus"]
learningOutcomes:
    - "Differentiate polynomial functions symbolically using SymPy"
    - "Approximate derivatives numerically using finite differences"
    - "Compare symbolic and numerical results"
estimatedTime: "1 hour"
requirements:
    - "Python with SymPy installed (pip install sympy)"
    - "Basic knowledge of derivatives (power rule)"
deliverables:
    - "Python script or Jupyter notebook demonstrating both symbolic and numeric differentiation"
resources:
  - name: "SymPy Calculus Documentation"
    url: "https://docs.sympy.org/latest/tutorials/intro-tutorial/calculus.html"
  - name: "Derivative – Khan Academy"
    url: "https://www.khanacademy.org/math/differential-calculus"
  - name: "Finite Difference – Wikipedia"
    url: "https://en.wikipedia.org/wiki/Finite_difference"
  - name: "Numerical Differentiation – Paul's Online Notes"
    url: "https://tutorial.math.lamar.edu/Classes/CalcI/DerivativeIntro.aspx"
  - name: "SymPy – Official Website"
    url: "https://www.sympy.org/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-14"
unlockDate: "2026-02-14"
---

# Polynomial Differentiation

## Overview

Differentiation is a cornerstone of calculus, widely used in optimization, physics simulation, and machine learning. This challenge explores both symbolic and numerical approaches to finding derivatives, highlighting their strengths and limitations.

## Objective

Compute the derivative of the polynomial \( f(x) = 4x^3 - 3x^2 + 2x - 5 \) symbolically using SymPy, approximate its derivative numerically at \( x = 2 \) using finite differences, and compare the results with visualizations.

## Prerequisites

- Python with SymPy installed
- Basic calculus (power rule)
- Matplotlib (optional, for plotting)

## Instructions

### Part 1: Symbolic Differentiation

- Import `sympy` and define the symbol `x`.
- Define the polynomial \( f \) as a SymPy expression.
- Use `sympy.diff(f, x)` to compute \( f'(x) \).
- Print the derivative and evaluate it at \( x = 2 \) using `.subs(x, 2).evalf()`.

### Part 2: Numerical Differentiation

- Implement a function `numerical_derivative(f, x, h=1e-5)` using the central difference formula:  
  $$
  f'(x) \approx (f(x + h) - f(x - h)) / (2h)
  $$
- Use a regular Python function or `lambdify` the SymPy expression.
- Test at \( x = 2 \) with \( h = 1e-6, 1e-5, 1e-4 \) and compare with the symbolic result.

### Part 3: Visualization

- Use `sympy.lambdify` to convert the symbolic function and its derivative into NumPy-callable functions.
- Generate 100 x-values between -2 and 3.
- Plot:
    - \( f(x) \) as a solid line.
    - \( f'(x) \) as a dashed line.
    - Mark the point at \( x = 2 \) and draw the tangent line using the numerical derivative.
- Add a legend and grid.

## Deliverables

1. Python script or Jupyter notebook (`polynomial_derivative.py` or `.ipynb`)
2. Output showing symbolic and numerical differentiation, and (optional) plots
3. Comments or markdown cells interpreting the results and error analysis

## Evaluation Criteria

| Criteria                  | Weight | Description                                         |
|---------------------------|--------|-----------------------------------------------------|
| Symbolic Differentiation  | 30%    | Correct derivative expression and evaluation         |
| Numerical Approximation   | 30%    | Accurate central difference implementation & comparison |
| Plot (if included)        | 20%    | Properly labeled plots showing function and derivative |
| Analysis                  | 20%    | Explanation of trade-off in choosing \( h \)         |

## Tips & Common Mistakes

- Central difference is more accurate than forward/backward difference.
- Too small \( h \) causes round-off errors; too large \( h \) causes truncation errors.
- Use `sp.plot` for quick plots, or matplotlib for more control.
- `sympy.diff` returns a symbolic expression; use `lambdify` for numerical evaluation.

## Bonus Challenges (Optional)

1. Implement higher-order finite difference formulas (e.g., 5-point stencil) and compare accuracy.
2. Differentiate a product or composition of functions (e.g., \( \sin(x) \cdot e^x \)) symbolically and numerically.
3. Create an interactive plot with a slider for \( h \) using `ipywidgets`.

## Submission

Commit your script or notebook to `unit6/day6/` and submit the commit URL.
