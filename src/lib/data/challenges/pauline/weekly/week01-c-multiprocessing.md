---
title: "C Program with Multi-Process and Multi-Threading"
description: "Demonstrate concurrent computing with processes and threads using fork() and pthreads"
difficulty: "advanced"
unit: "Week 1 Project: Operating Systems"
week: 1
technologies:
    - "C Programming"
    - "POSIX Threads"
    - "fork() System Call"
    - "Synchronization"
    - "Performance Analysis"
learningOutcomes:
    - "Implement multi-processing using fork() system calls"
    - "Create and manage threads with pthread library"
    - "Apply synchronization mechanisms (mutexes, semaphores)"
    - "Compare performance between processes and threads"
    - "Handle inter-process communication (pipes, shared memory)"
estimatedTime: "10-14 hours"
requirements:
    - "Intermediate C programming knowledge"
    - "Understanding of pointers and memory management"
    - "Linux/Unix development environment"
    - "GCC compiler"
    - "Basic knowledge of operating system concepts"
deliverables:
    - "C program demonstrating both fork() and pthread usage"
    - "Synchronization implementation with mutexes/semaphores"
    - "Performance comparison analysis"
    - "Git repository with clean code and documentation"
    - "Makefile for building the project"
resources:
    - name: "Operating System Concepts, 10th Edition"
      url: "https://www.os-book.com/"
    - name: "The Linux Programming Interface"
      url: "https://man7.org/tlpi/"
    - name: "Advanced Programming in the UNIX Environment"
      url: "https://www.apuebook.com/"
    - name: "POSIX Threads Programming"
      url: "https://computing.llnl.gov/tutorials/pthreads/"
    - name: "Beej's Guide to Unix IPC"
      url: "https://beej.us/guide/bgipc/"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# C Multi-Process and Multi-Threading Project

## Overview

Build a C program that demonstrates concurrent computing using both multi-processing (`fork()`) and multi-threading (pthreads). You'll explore the differences between processes and threads by solving matrix multiplication with each approach.

## Objective

Create a C application that performs matrix multiplication in three ways: sequentially, with multiple processes, and with multiple threads. Compare performance, memory usage, and implementation complexity, using proper synchronization and error handling.

## Instructions

### Phase 1: Project Setup

**Suggested Structure:**
```
concurrent-computing/
├── src/
│   ├── main.c
│   ├── sequential.c
│   ├── multiprocess.c
│   ├── multithread.c
│   ├── matrix.c
│   ├── matrix.h
│   ├── utils.c
│   └── utils.h
├── include/
│   └── common.h
├── tests/
│   ├── test_matrix.c
│   └── test_concurrent.c
├── scripts/
│   ├── benchmark.sh
│   └── plot_results.py
├── Makefile
├── README.md
└── .gitignore
```

**Makefile Example:**
```makefile
CC = gcc
CFLAGS = -Wall -Wextra -O2 -pthread
TARGET = matrix_multiplier
SOURCES = src/main.c src/sequential.c src/multiprocess.c src/multithread.c src/matrix.c src/utils.c
HEADERS = include/common.h src/matrix.h src/utils.h

$(TARGET): $(SOURCES) $(HEADERS)
    $(CC) $(CFLAGS) -o $(TARGET) $(SOURCES)

debug: CFLAGS += -g -DDEBUG
debug: $(TARGET)

clean:
    rm -f $(TARGET) *.o

test: $(TARGET)
    ./$(TARGET) --test

benchmark: $(TARGET)
    ./scripts/benchmark.sh

.PHONY: clean test benchmark debug
```

**Common Header (`include/common.h`):**
```c
#ifndef COMMON_H
#define COMMON_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>
#include <sys/time.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <sys/ipc.h>
#include <sys/shm.h>
#include <unistd.h>
#include <pthread.h>
#include <semaphore.h>

#define MATRIX_SIZE 1000
#define NUM_THREADS 4
#define NUM_PROCESSES 4

typedef struct {
        int rows;
        int cols;
        double **data;
} Matrix;

#define TIME_START struct timeval start, end; gettimeofday(&start, NULL);
#define TIME_END gettimeofday(&end, NULL); \
        double elapsed = (end.tv_sec - start.tv_sec) + \
                                         (end.tv_usec - start.tv_usec) / 1000000.0;

#endif // COMMON_H
```

---

### Phase 2: Sequential Implementation

**Matrix Operations (`src/matrix.c`):**
```c
Matrix* create_matrix(int rows, int cols);
void free_matrix(Matrix *mat);
void fill_random(Matrix *mat);

Matrix* multiply_sequential(Matrix *a, Matrix *b);
```
Implement basic matrix creation, freeing, random filling, and sequential multiplication.

---

### Phase 3: Multi-Process Implementation

**Using `fork()` and Shared Memory (`src/multiprocess.c`):**
- Divide rows among processes.
- Use shared memory and semaphores for synchronization.
- Each process computes its assigned rows and writes results safely.

---

### Phase 4: Multi-Thread Implementation

**Using pthreads and Mutexes (`src/multithread.c`):**
- Divide rows among threads.
- Use a mutex to protect shared writes.
- Each thread computes its assigned rows.

---

### Phase 5: Performance Comparison

**Benchmarking (`src/main.c`):**
- Run all three implementations for several runs.
- Measure and print average times and speedups.
- Compare memory usage and correctness.

---

## Evaluation Criteria

- **Code Correctness (30%)**: Compiles, runs, and produces correct results.
- **Concurrent Implementation (25%)**: Proper use of `fork()` and pthreads, correct synchronization.
- **Performance Analysis (20%)**: Benchmarks, comparisons, and conclusions.
- **Error Handling (15%)**: Handles edge cases and cleans up resources.
- **Code Quality & Documentation (10%)**: Clean, well-commented code and README.

---

## Deliverables

- GitHub repository with all source code
- Makefile
- README with build and usage instructions
- Benchmark results and analysis
- Documentation on implementation and findings

---

## Common Mistakes

- Not checking return values of `fork()` or `pthread_create`
- Missing synchronization (race conditions)
- Not waiting for child processes
- Memory leaks
- Not cleaning up shared memory or semaphores
- Assuming perfect speedup (Amdahl's law)
- Not testing with different matrix sizes

---

## Bonus Challenges

- Work stealing for load balancing
- Non-square matrix support
- Strassen's algorithm
- GPU acceleration (CUDA/OpenCL)
- Visualization of computation
- Thread/process pool pattern
- Sparse matrix support
- Distributed computing (MPI)
- Performance profiling (gprof)
- Interactive CLI

---

## Tips

- Start with sequential version
- Test incrementally with small matrices
- Use debugging and profiling tools
- Document assumptions and limitations

---

## Real-World Applications

- High-performance computing
- OS and server development
- Scientific and embedded systems

---

## Submission Checklist

- All three implementations working
- Proper synchronization and error handling
- Makefile and README
- Benchmark results and analysis
- No memory leaks (check with valgrind)
- Consistent code style and comments
