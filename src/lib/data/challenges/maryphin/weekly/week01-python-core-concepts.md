---
title: "Python Core Concepts Practice Scripts"
description: "Build and document Python scripts demonstrating fundamental programming concepts and algorithms"
difficulty: "intermediate"
unit: "Week 1 Project: Computational Thinking Theory"
week: 1
technologies:
    - "Python 3"
    - "Data Structures"
    - "Algorithms"
    - "File I/O"
    - "GitHub"
learningOutcomes:
    - "Implement Python data structures (lists, tuples, dictionaries, sets)"
    - "Write functions with proper parameters and return values"
    - "Handle file operations for reading and writing data"
    - "Apply algorithmic thinking to solve problems"
    - "Document code effectively with comments and docstrings"
estimatedTime: "8-10 hours"
requirements:
    - "Basic Python syntax knowledge"
    - "Understanding of variables and data types"
    - "GitHub account for repository creation"
    - "Python 3 installed locally"
deliverables:
    - "7 Python scripts covering core programming concepts"
    - "Comprehensive README explaining each script"
    - "GitHub repository with organized file structure"
    - "Sample input/output for each script"
    - "Code documentation with comments and docstrings"
resources:
  - name: "Python Official Documentation"
    url: "https://docs.python.org/3/"
  - name: "PEP 8 – Style Guide for Python Code"
    url: "https://peps.python.org/pep-0008/"
  - name: "GitHub Guides"
    url: "https://docs.github.com/en/get-started/quickstart"
  - name: "pytest Documentation"
    url: "https://docs.pytest.org/en/latest/"
  - name: "Python CSV Module"
    url: "https://docs.python.org/3/library/csv.html"
  - name: "Python JSON Module"
    url: "https://docs.python.org/3/library/json.html"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Python Core Concepts Project

## Overview

Create a suite of Python scripts to demonstrate core programming concepts. Each script should be self-contained, well-documented, and include usage examples. This project builds foundational skills for data science and backend development.

## Objective

Develop seven Python scripts, each covering a key programming concept. Scripts must be clear, modular, and include sample input/output.

## Instructions

### Phase 1: Project Setup

**Repository Structure:**
```
python-core-concepts/
├── scripts/
│   ├── 01_data_structures.py
│   ├── 02_control_flow.py
│   ├── 03_functions.py
│   ├── 04_list_comprehensions.py
│   ├── 05_dictionary_operations.py
│   ├── 06_file_operations.py
│   └── 07_algorithm_challenge.py
├── data/
│   ├── input.txt
│   ├── sample.csv
│   └── output/
├── tests/
│   └── test_samples.py
├── requirements.txt
└── README.md
```

**Environment Setup:**
- Create virtual environment: `python -m venv venv`
- Activate virtual environment
- Add Python version to requirements.txt
- Initialize Git repository

### Phase 2: Script Development

**Script 1: Data Structures**
- Lists, tuples, sets, dictionaries
- Structure conversions
- Stack/queue with lists
- Set operations

**Script 2: Control Flow**
- If-elif-else chains
- For/while loops
- Nested loops
- Pattern matching (Python 3.10+)

**Script 3: Functions**
- Parameters, return values
- Default/keyword arguments
- *args, **kwargs
- Lambda, map/filter/reduce
- Basic decorators

**Script 4: List Comprehensions & Generators**
- List comprehensions (basic/nested/conditional)
- Generator expressions
- Dict/set comprehensions

**Script 5: Dictionary Operations**
- Creation, merging
- Nested dictionaries
- Comprehensions
- DefaultDict, Counter
- JSON serialization/deserialization

**Script 6: File I/O**
- Read/write text files
- CSV processing
- JSON operations
- Context managers
- Error handling

**Script 7: Algorithm Challenge**
- Sorting/search/data processing
- Clear steps, comments
- Time complexity analysis
- Multiple test cases

### Phase 3: Documentation & Testing

**README Requirements:**
- Project overview
- Installation instructions
- Script explanations
- Example inputs/outputs
- Running instructions
- Dependencies

**Code Documentation:**
- Docstrings for functions
- Inline comments
- Type hints
- Error handling
- Logging

### Phase 4: GitHub Deployment

**Repository Setup:**
- Create GitHub repo
- Add .gitignore
- Commit with descriptive messages
- Optional: GitHub Pages docs, badges

**Commit Strategy:**
- Feature-based commits
- Descriptive messages
- No large files
- Clean history

## Evaluation Criteria

- Code Quality (30%): Clean, readable, PEP-8 compliant
- Functionality (25%): Works as intended, handles edge cases
- Documentation (20%): Clear docstrings, comments, README
- Algorithmic Thinking (15%): Efficient logic
- Repository Organization (10%): Structure, commit history

## Required Deliverables

- GitHub repository
- 7 scripts in /scripts
- README.md
- Sample data files
- requirements.txt
- Documentation
- Example outputs
- Challenges faced/solutions

## Code Quality

- PEP-8 compliance (use black/autopep8)
- Error handling
- Type hints
- Modular code

## Common Mistakes

- No error handling
- Hard-coded values
- Poor variable naming
- No documentation
- Mixing concepts in one script
- Not testing edge cases
- Large, monolithic functions
- Ignoring PEP-8
- Not using virtual environments

## Bonus Challenges

- Unit tests (pytest/unittest)
- CLI for script selection
- Logging
- Performance benchmarking
- Jupyter notebook demos
- Dockerize project
- CI/CD with GitHub Actions
- Type checking with mypy

## Tips for Success

- Start simple
- Test frequently
- Use version control
- Follow PEP-8
- Document as you code

## Real-World Application

- Data preprocessing/cleaning
- Task automation
- Backend API foundations
- Interview algorithm practice
- Building blocks for larger projects

## Submission Checklist

- 7 scripts in /scripts
- Each script demonstrates a core concept
- Comprehensive README
- Sample data/example outputs
- requirements.txt
- Clean GitHub history
- PEP-8 compliance
- Docstrings for functions
- Error handling
- .gitignore included
