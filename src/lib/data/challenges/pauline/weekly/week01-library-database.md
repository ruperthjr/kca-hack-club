---
title: "Library Management System — Relational Database Project"
description: "Design, implement, and optimize a normalized relational database for a library: schema, 50+ sample records, 15+ complex queries, stored procedures, views, and performance analysis."
difficulty: "intermediate"
unit: "Week 1 Project: Computer Applications"
day: null
week: 1
month: 1
technologies:
    - "SQL"
    - "PostgreSQL"
    - "MySQL"
    - "ERD / database modeling (dbdiagram, draw.io)"
    - "Indexes & query optimization (EXPLAIN ANALYZE)"
    - "Stored procedures & triggers"
    - "pgAdmin / MySQL Workbench / CLI"
    - "Docker (optional for local DB)"
learningOutcomes:
    - "Design a fully normalized relational schema (1NF–BCNF) for a real-world domain"
    - "Implement constraints, foreign keys, indexes, and referential integrity"
    - "Populate realistic sample data (≥50 records) and validate data integrity"
    - "Write advanced SQL queries with joins, window functions, aggregates, and CTEs"
    - "Create stored procedures/functions for transactional workflows (borrow/return)"
    - "Profile and optimize queries using EXPLAIN ANALYZE and indexing strategies"
estimatedTime: "8-12 hours"
requirements:
    - "Basic SQL: SELECT, INSERT, UPDATE, DELETE"
    - "Familiarity with relational concepts: PK/FK, normalization, transactions"
    - "PostgreSQL or MySQL installed (Docker allowed)"
    - "Database client (pgAdmin, MySQL Workbench, or CLI)"
    - "ERD tool for diagrams (dbdiagram.io, draw.io, or similar)"
deliverables:
    - "SQL script: schema, constraints, indexes, views, stored procedures/functions"
    - "Sample data SQL or CSV (≥50 realistic records across all tables)"
    - "15+ documented complex SQL queries with example outputs"
    - "ER diagram (PNG/SVG) and README with design decisions"
    - "Performance notes: EXPLAIN ANALYZE outputs and optimization steps"
resources:
  - name: "PostgreSQL Documentation"
    url: "https://www.postgresql.org/docs/"
  - name: "MySQL Reference Manual"
    url: "https://dev.mysql.com/doc/"
  - name: "SQL Performance Explained"
    url: "https://sql-performance-explained.com/"
  - name: "dbdiagram (ER diagrams)"
    url: "https://dbdiagram.io/"
  - name: "Database Systems: Design, Implementation, & Management — Coronel"
    url: "https://www.cengage.com/c/database-systems-design-implementation-management-13e-coronel/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Library Management System — Relational Database Project

## Overview
Build a production-quality relational database for a library that manages books, authors, publishers, members, loans, reservations, and branches. Emphasize normalization, data integrity, query complexity, and performance tuning.

## Objective
Design and implement a normalized schema, populate realistic sample data, produce 15+ complex queries and transactional functions (borrow/return), and deliver documentation and performance analysis.

## Prerequisites
- SQL basics and relational-model familiarity
- PostgreSQL or MySQL installed and accessible
- An ERD tool (dbdiagram, draw.io) and a SQL client
- Optional: Docker for running the DB locally

## Instructions

### Part 1: Schema design and constraints
1. Model entities: books, authors, publishers, categories, members, library_branches, loans, reservations, book_authors.
2. Normalize through 3NF (eliminate repeating groups, partial and transitive dependencies); evaluate BCNF for critical relations.
3. Implement strong constraints: PKs, FKs, UNIQUE, CHECKs, NOT NULL where appropriate.
4. Add integrity helpers: trigger or generated columns for timestamps; use transactions for multi-step changes.
5. Create targeted indexes and partial indexes for frequent query filters (e.g., loans where return_date IS NULL).

Suggested checks: available_copies ≤ total_copies, membership_end_date > membership_start_date, loan due_date > loan_date.

### Part 2: Sample data & baseline functionality
1. Insert realistic sample data covering edge cases (lost books, overdue loans, reservations, multi-author books).
2. Ensure total sample records ≥ 50 across tables.
3. Validate constraints by attempting invalid inserts and showing failures.
4. Provide seed script(s) that can run on PostgreSQL and a notes section for MySQL differences.

### Part 3: Queries, views, and stored logic
1. Implement at least 15 complex queries (examples below).
2. Create views for dashboards (available_books, member_loan_summary, monthly_usage).
3. Implement transactional functions/stored procedures:
     - borrow_book(member_id, book_id, branch_id) — checks availability, updates copies, inserts loan, enforces member limits, handles reservation priority.
     - return_book(loan_id, return_date) — computes late fee, updates loan and available_copies, notifies next reservation.
4. Add unit test SQL or example transactions demonstrating correctness and error handling.

Recommended complex queries to implement and document:
- books currently available with authors and branch counts
- top 10 most-borrowed books (30/90-day windows)
- members with overdue loans and aggregated late fees
- monthly loans and returns trend (time series)
- members approaching their borrowing limit
- books never borrowed
- average loan duration by category
- reservation queues for high-demand titles
- monthly late-fee revenue and top payers
- correlation of membership type to borrowing frequency

## Deliverables
1. sql/library-schema-and-data.sql — schema, indexes, seed data (idempotent where possible)
2. sql/queries-and-functions.sql — 15+ queries, stored functions/procedures
3. docs/ER-diagram.png and docs/README.md — design rationale, run instructions
4. performance/EXPLAIN-ANALYZE.md — key slow queries and fixes applied
5. repository README with how to run locally (Docker compose optional)

## Evaluation Criteria

| Criteria | Weight | Description |
|---------|--------:|-------------|
| Database Design | 30% | Normalization, clear relationships, appropriate constraints |
| Query Complexity & Correctness | 25% | Advanced SQL (joins, window functions, aggregates, CTEs) and accurate results |
| Data Integrity & Transactions | 20% | Constraints, transactional functions, error handling |
| Performance & Indexing | 15% | Proper indexes, EXPLAIN analysis and optimizations |
| Documentation & Deliverables | 10% | ER diagram, README, reproducible seed/data scripts |

## Tips & Common Mistakes
- Use transactions for multi-step operations (borrow/return).
- Index selectively; prefer partial indexes for NULL-filtered queries.
- Avoid storing derived data unless necessary; keep copies consistent.
- Validate seed data against constraints to ensure reproducibility.
- Test edge cases: concurrent reservations, simultaneous borrows, expired memberships.

## Bonus Challenges (Optional)
1. Add full-text search for book titles and summaries.
2. Implement audit logging (triggers) for sensitive operations.
3. Create materialized views for heavy aggregate reports and schedule refreshes.
4. Expose a minimal REST API (Express / FastAPI) that calls stored procedures.

## Submission
- Push a Git repository or ZIP with the SQL scripts, ER diagram, README, and performance notes.
- Include quick-start instructions and one command to load schema + sample data.
- Indicate DB engine used (Postgres/MySQL) and any engine-specific statements.

