---
title: "Matrix Multiplication — fork() and pthreads"
description: "Implement and compare matrix multiplication using sequential code, multiple processes (fork + shared memory), and multiple threads (pthreads)."
difficulty: "advanced"
unit: "Operating Systems — Concurrent Computing"
day: null
week: 1
month: 1
technologies:
  - "C"
  - "POSIX threads (pthreads)"
  - "fork() / SysV or POSIX shared memory"
  - "POSIX semaphores / mutexes"
  - "Makefile / GCC / Valgrind / gprof"
learningOutcomes:
  - "Implement correct matrix multiplication in sequential, multi-process, and multi-threaded forms"
  - "Use fork(), shared memory, and inter-process synchronization safely"
  - "Create, join, and synchronize pthreads with mutexes and condition variables"
  - "Measure and analyze performance (time, memory, scalability) and reason about bottlenecks"
  - "Write robust C with resource cleanup, error checking, and reproducible benchmarks"
estimatedTime: "10-14 hours"
requirements:
  - "Linux/Unix development environment (bash, GCC)"
  - "Intermediate C knowledge (pointers, dynamic memory)"
  - "Familiarity with processes, threads, and synchronization primitives"
  - "Build tools: make, valgrind, gprof"
  - "Git for version control"
deliverables:
  - "Well‑structured Git repository (source, tests, Makefile, README)"
  - "Three working implementations: sequential, multiprocess, multithread"
  - "Automated tests demonstrating correctness for multiple matrix sizes"
  - "Benchmark script and plotted results comparing time/memory"
  - "Short report (README or MARKDOWN) summarizing findings and trade‑offs"
resources:
  - name: "The Linux Programming Interface — TLPI"
    url: "https://man7.org/tlpi/"
  - name: "POSIX Threads Programming (LLNL tutorial)"
    url: "https://computing.llnl.gov/tutorials/pthreads/"
  - name: "Beej's Guide to Unix IPC"
    url: "https://beej.us/guide/bgipc/"
  - name: "Advanced Programming in the UNIX Environment"
    url: "https://www.apuebook.com/"
  - name: "Operating System Concepts (OS Book)"
    url: "https://www.os-book.com/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Matrix Multiplication — fork() and pthreads

## Overview
Build a single C project that implements matrix multiplication three ways — sequential, multi-process (fork + shared memory), and multi-threaded (pthreads) — then validate correctness and compare performance, memory use, and implementation complexity.

## Objective
Deliver correct, well‑tested implementations for each approach, with safe synchronization and reproducible benchmarks that demonstrate performance trade‑offs and resource behavior.

## Prerequisites
- Linux development environment with GCC and make
- Basic to intermediate C programming (malloc/free, pointers)
- Familiarity with processes vs threads and synchronization concepts
- Optional: valgrind and gprof for profiling

## Instructions

### Part 1: Sequential implementation
- Implement Matrix type and helpers: create_matrix, free_matrix, fill_random, compare_matrices.
- Implement multiply_sequential(Matrix *A, Matrix *B) returning a new Matrix.
- Add unit tests for correctness on small matrices (2x2, 5x5, random).

### Part 2: Multi-process implementation
- Use fork() to spawn NUM_PROCESSES workers.
- Allocate result matrix in shared memory (shmget/shmat or POSIX shm_open + mmap).
- Partition work by contiguous row ranges per child.
- Synchronize access to any shared bookkeeping with semaphores (POSIX sem_t or SysV semaphores) if needed; children writing disjoint rows do not need a mutex for values.
- Parent waits for all children (waitpid) and verifies result against sequential output.
- Ensure cleanup: detach and remove shared memory, destroy semaphores.

### Part 3: Multi-thread implementation
- Use pthread_create to spawn NUM_THREADS worker threads.
- Partition rows among threads; threads compute into shared result matrix.
- Use a mutex only for shared counters or if writing non‑disjoint regions; otherwise per-row writes can be lock‑free.
- Join all threads and validate result.

### Benchmarking and validation
- Implement a benchmarking harness in main that:
  - Runs each implementation multiple times (configurable runs)
  - Measures elapsed wall time and reports mean/stddev
  - Checks matrix equality between implementations
  - Measures peak memory (ps / smem or /proc/<pid>/status) for comparative analysis
- Provide a script (scripts/benchmark.sh) to run benchmarks over multiple sizes and thread/process counts and output CSV.

## Deliverables
1. Source code implementing sequential, multiprocess, and multithread versions.
2. Makefile with targets: build, debug, test, benchmark, clean.
3. tests/ with unit tests asserting correctness for varied sizes.
4. scripts/benchmark.sh and a small analysis (README or report) with charts/tables.
5. CI or instructions for running valgrind and gprof to check leaks and profile.

## Evaluation Criteria

| Criteria | Weight | Description |
|---------|--------:|-------------|
| Correctness & Tests | 35% | All implementations produce identical results; unit tests present |
| Concurrency & Safety | 30% | Proper use of fork/pthreads, synchronization, and resource cleanup |
| Performance Analysis | 20% | Reproducible benchmarks, memory measurements, and interpretation |
| Code Quality & Documentation | 15% | Readable code, error handling, README and build instructions |

## Tips & Common Mistakes
- Verify return values for fork(), shmget/shm_open, pthread_create, sem_init.
- Children must not close or remove shared memory before parent reads results.
- Avoid unnecessary locking when workers write disjoint rows—locks hurt performance.
- Test frequently with small matrices before scaling up.
- Clean up IPC objects on failure paths to avoid leftover shared memory/semaphores.

## Bonus Challenges (Optional)
1. Implement work stealing to balance uneven row workloads.
2. Support rectangular and sparse matrices and measure impact.
3. Add a thread/process pool and compare overhead.

## Submission
Push a GitHub repository containing:
- src/, include/, tests/, scripts/, Makefile, README.md
- A short results section in README with benchmark plots or CSV
- Instructions to build, run tests, and reproduce benchmarks

