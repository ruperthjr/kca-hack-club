---
title: "Sieve of Eratosthenes Implementation"
description: "Implement the classic algorithm for finding all prime numbers up to a given limit."
difficulty: "Intermediate"
unit: "DISCRETE MATHEMATICS"
day: 4
week: 1
month: 1
technologies: ["Python"]
learningOutcomes:
    - "Implement the Sieve of Eratosthenes algorithm"
    - "Analyze time and space complexity of the sieve"
    - "Optimize memory usage with array representations"
estimatedTime: "1 hour"
requirements:
    - "Python 3.x installed"
    - "Familiarity with lists, loops, and conditional statements"
deliverables:
    - "Python script containing the sieve function and a demonstration"
resources:
  - name: "Sieve of Eratosthenes – Wikipedia"
    url: "https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes"
  - name: "Prime Numbers – Khan Academy"
    url: "https://www.khanacademy.org/computing/computer-science/cryptography/comp-number-theory/v/sieve-of-eratosthenes"
  - name: "Python Official Documentation"
    url: "https://docs.python.org/3/tutorial/datastructures.html"
  - name: "Visualising the Sieve of Eratosthenes"
    url: "https://www.cs.hmc.edu/techreports/1994/94-18.pdf"
  - name: "GeeksforGeeks: Sieve of Eratosthenes"
    url: "https://www.geeksforgeeks.org/sieve-of-eratosthenes/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-12"
unlockDate: "2026-02-12"
---

# Sieve of Eratosthenes Implementation

## Overview

The Sieve of Eratosthenes is one of the most efficient algorithms to find all prime numbers up to a given limit. It is a fundamental tool in number theory and is widely used in cryptography, hashing, and various computational mathematics tasks. This challenge will solidify your understanding of algorithmic thinking, array manipulation, and performance optimization.

## Objective

Write a Python function `sieve_of_eratosthenes(n)` that returns a list of all prime numbers less than or equal to `n`. Demonstrate the function with several test cases and analyze its time complexity.

## Prerequisites

- Python 3.x
- Basic understanding of list operations and loops
- (Optional) Familiarity with algorithmic complexity (Big O)

## Instructions

### Part 1: Basic Implementation

1.  Create a function `sieve_of_eratosthenes(n)` that accepts an integer `n >= 2`.
2.  Initialize a boolean list `is_prime` of length `n+1`, all set to `True`. Mark `is_prime[0]` and `is_prime[1]` as `False`.
3.  For `i` from 2 to the square root of `n`:
        - If `is_prime[i]` is `True`, mark all multiples of `i` (starting from `i*i`) as `False`.
4.  Collect indices `i` where `is_prime[i]` is `True` and `i >= 2`.
5.  Return the list of primes.
6.  Test your function with `n = 30`. Print the result and verify that it matches `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`.

### Part 2: Optimization

1.  **Memory optimization**: Instead of storing booleans for even numbers (except 2), modify the algorithm to only consider odd indices. Compare memory usage for `n = 10^6`.
2.  **Speed optimization**: Use Python's `array` module or `bytearray` to store boolean flags more compactly. Implement a version using `bytearray`.
3.  Write a brief explanation (as comments) of why starting the inner loop from `i*i` improves performance.

### Part 3: Analysis and Reporting

1.  Write a function `measure_time(n)` that times your original and optimized sieves for `n = 10^4`, `10^5`, `10^6`. Print the execution times.
2.  Determine the time complexity of your implementation in Big O notation.
3.  Include a discussion (as a multi-line comment or separate print statement) on the trade-offs between time and memory.

## Deliverables

1.  A Python script (`.py` file) containing the basic and optimized sieve functions.
2.  Test calls with `n = 30`, `n = 100`, `n = 1000`, and timing measurements for larger `n` values.
3.  A comment block at the end of the script analyzing the complexity.

## Evaluation Criteria

| Criteria            | Weight | Description                                                              |
| ------------------- | ------ | ------------------------------------------------------------------------ |
| Correctness         | 40%    | The sieve correctly identifies all primes and handles edge cases (n=2).  |
| Optimization        | 30%    | At least one memory or speed optimization is correctly implemented.      |
| Complexity Analysis | 20%    | Time and space complexity are correctly identified and explained.        |
| Code Quality        | 10%    | Code is readable, uses meaningful names, and includes appropriate comments. |

## Tips & Common Mistakes

- Do not forget that 0 and 1 are not prime.
- Off-by-one errors: ensure the list length is `n+1` to include index `n`.
- Marking multiples from `i` instead of `i*i` will work but is slower and may cause redundant work.
- Using `range(i*i, n+1, i)` is more efficient than a `while` loop.

## Bonus Challenges (Optional)

1.  Implement a segmented sieve that can find primes up to `10^9` without using an array of that size.
2.  Write a generator function that yields primes one by one using the sieve incrementally.

## Submission

Push your Python script to your course repository under `unit4/day4/sieve.py` and submit the commit URL.
```
