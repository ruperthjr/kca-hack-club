---
title: "Python Core Concepts Practice"
description: "Develop and document Python scripts that showcase essential programming concepts, data handling, and algorithmic thinking."
difficulty: "intermediate"
unit: "Week 1 Project: Computational Thinking"
week: 1
month: 1
technologies:
  - "Python 3"
  - "Git & GitHub"
  - "pytest"
  - "JSON & CSV"
  - "VS Code"
learningOutcomes:
  - "Design and implement Python data structures and algorithms"
  - "Write modular, well-documented, and testable code"
  - "Perform file I/O and data serialization"
  - "Apply control flow and functional programming concepts"
  - "Collaborate using Git and GitHub best practices"
estimatedTime: "8-10 hours"
requirements:
  - "Basic Python programming experience"
  - "Python 3 installed locally"
  - "GitHub account"
  - "Familiarity with command line"
  - "VS Code or similar code editor"
deliverables:
  - "7 Python scripts, each demonstrating a core concept"
  - "Comprehensive README.md with usage and explanations"
  - "Sample input/output files"
  - "requirements.txt listing dependencies"
  - "Well-organized GitHub repository"
resources:
  - name: "Python Official Documentation"
    url: "https://docs.python.org/3/"
  - name: "PEP 8 – Style Guide for Python Code"
    url: "https://peps.python.org/pep-0008/"
  - name: "pytest Documentation"
    url: "https://docs.pytest.org/en/latest/"
  - name: "GitHub Docs: Getting Started"
    url: "https://docs.github.com/en/get-started/quickstart"
  - name: "Real Python: File I/O"
    url: "https://realpython.com/read-write-files-python/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Python Core Concepts Practice

## Overview

This challenge guides you through building a suite of Python scripts that demonstrate foundational programming concepts, data structures, algorithms, and best practices for code documentation and collaboration. Completing this project will strengthen your skills for data science, automation, and backend development.

## Objective

Create seven well-structured Python scripts, each focusing on a key programming concept. Document your code, provide sample inputs/outputs, and organize your work in a GitHub repository.

## Prerequisites

- Python 3 installed
- Basic knowledge of Python syntax and data types
- Git and GitHub account
- Code editor (e.g., VS Code)
- Familiarity with command line

## Instructions

### Part 1: Project Setup

- Create a new GitHub repository (e.g., `python-core-concepts`)
- Set up the following folder structure:
  ```
  python-core-concepts/
  ├── scripts/
  ├── data/
  ├── tests/
  ├── requirements.txt
  └── README.md
  ```
- Initialize a virtual environment and add dependencies to `requirements.txt`
- Add a `.gitignore` file and make your first commit

### Part 2: Script Development

- Write seven scripts in `/scripts`, each covering:
  1. Data Structures (lists, tuples, sets, dictionaries)
  2. Control Flow (if/else, loops, pattern matching)
  3. Functions (parameters, return values, decorators)
  4. List Comprehensions & Generators
  5. Dictionary Operations (merging, nested, Counter, JSON)
  6. File I/O (text, CSV, JSON, error handling)
  7. Algorithm Challenge (sorting/searching/data processing)
- Include docstrings, type hints, and comments in each script
- Provide sample input/output files in `/data`

### Part 3: Documentation & Testing

- Write a detailed `README.md` explaining each script, setup, and usage
- Add example inputs/outputs for each script
- Write basic tests in `/tests` using `pytest`

## Deliverables

1. Seven Python scripts in `/scripts`
2. Sample input/output files in `/data`
3. Comprehensive `README.md`
4. `requirements.txt` with dependencies
5. Organized GitHub repository

## Evaluation Criteria

| Criteria            | Weight | Description                                      |
|---------------------|--------|--------------------------------------------------|
| Code Quality        | 30%    | Readable, modular, PEP-8 compliant, error handling|
| Functionality       | 25%    | Scripts work as intended, handle edge cases      |
| Documentation       | 20%    | Clear docstrings, comments, and README           |

## Tips & Common Mistakes

- Test scripts frequently and handle errors gracefully
- Avoid hard-coded values and poor variable names
- Keep functions small and focused
- Document as you code
- Use version control for all changes

## Bonus Challenges (Optional)

1. Add unit tests for each script using `pytest`
2. Implement a CLI to select and run scripts

## Submission

Push your completed repository to GitHub and submit the link as instructed.
