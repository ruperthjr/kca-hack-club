---
title: "Relational Database for Library Management System"
description: "Design and implement a comprehensive library database with sample data and complex queries"
difficulty: "intermediate"
unit: "Week 1 Project: Computer Applications"
week: 1
technologies:
    - "SQL"
    - "PostgreSQL/MySQL"
    - "Database Design"
    - "Normalization"
    - "Query Optimization"
learningOutcomes:
    - "Design normalized database schema for real-world application"
    - "Implement complex SQL queries with joins and aggregations"
    - "Create indexes and constraints for data integrity"
    - "Generate meaningful reports from database"
    - "Optimize queries for performance"
estimatedTime: "8-12 hours"
requirements:
    - "Basic SQL knowledge (SELECT, INSERT, UPDATE, DELETE)"
    - "Understanding of database concepts (tables, relationships)"
    - "PostgreSQL or MySQL installed locally"
    - "Database client (pgAdmin, MySQL Workbench, or command line)"
deliverables:
    - "Complete database schema with 5+ tables"
    - "Sample data for testing (50+ records minimum)"
    - "15+ complex SQL queries solving real problems"
    - "Database documentation and entity-relationship diagram"
    - "Query performance analysis and optimization"
resources:
    - name: "Database Systems: Design, Implementation, & Management (Carlos Coronel)"
      url: "https://www.cengage.com/c/database-systems-design-implementation-management-13e-coronel/"
    - name: "Database Processing: Fundamentals, Design, and Implementation (David Kroenke)"
      url: "https://www.pearson.com/en-us/subject-catalog/p/database-processing-fundamentals-design-and-implementation/P200000003978/9780135192001"
    - name: "Beginning Database Design: From Novice to Professional (Clare Churcher)"
      url: "https://www.apress.com/book/9781484208665"
    - name: "SQL Performance Explained (Markus Winand)"
      url: "https://sql-performance-explained.com/"
    - name: "PostgreSQL: Up and Running (Regina O. Obe, Leo S. Hsu)"
      url: "https://www.oreilly.com/library/view/postgresql-up-and/9781491963418/"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Library Management System Database Project

## Overview

Design and implement a relational database for a library management system that manages books, members, transactions, and operations. Focus on database design, complex queries, and practical data management.

## Objective

Build a normalized library database with constraints, sample data, and complex queries to support library operations and reporting.

## Instructions

### Phase 1: Database Design and Schema

**Entities:**
- Books
- Authors
- Publishers
- Members
- Loans
- Reservations
- Categories
- LibraryBranches

**Normalization:** Apply 1NF, 2NF, 3NF, and consider BCNF.

**Schema Example:**
```sql
-- Authors
CREATE TABLE authors (
    author_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birth_date DATE,
    nationality VARCHAR(50),
    biography TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_author_name UNIQUE (first_name, last_name)
);

-- Publishers
CREATE TABLE publishers (
    publisher_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    address TEXT,
    phone VARCHAR(20),
    email VARCHAR(100),
    website VARCHAR(200),
    established_year INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories
CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT,
    parent_category_id INT REFERENCES categories(category_id) ON DELETE SET NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Books
CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    isbn VARCHAR(20) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    edition VARCHAR(20),
    publication_year INT CHECK (publication_year BETWEEN 1000 AND EXTRACT(YEAR FROM CURRENT_DATE)),
    pages INT CHECK (pages > 0),
    language VARCHAR(30),
    summary TEXT,
    cover_image_url VARCHAR(500),
    publisher_id INT REFERENCES publishers(publisher_id) ON DELETE SET NULL,
    category_id INT REFERENCES categories(category_id) ON DELETE SET NULL,
    total_copies INT DEFAULT 1 CHECK (total_copies >= 0),
    available_copies INT DEFAULT 1 CHECK (available_copies >= 0 AND available_copies <= total_copies),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT copies_check CHECK (available_copies <= total_copies)
);

-- Book-Author (Many-to-Many)
CREATE TABLE book_authors (
    book_id INT REFERENCES books(book_id) ON DELETE CASCADE,
    author_id INT REFERENCES authors(author_id) ON DELETE CASCADE,
    PRIMARY KEY (book_id, author_id)
);

-- Library Branches
CREATE TABLE library_branches (
    branch_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(100),
    opening_hours TEXT,
    manager_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Members
CREATE TABLE members (
    member_id SERIAL PRIMARY KEY,
    library_card_number VARCHAR(20) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    date_of_birth DATE,
    membership_type VARCHAR(20) CHECK (membership_type IN ('Student', 'Adult', 'Senior', 'Child')),
    membership_start_date DATE DEFAULT CURRENT_DATE,
    membership_end_date DATE,
    max_books_allowed INT DEFAULT 5 CHECK (max_books_allowed BETWEEN 1 AND 20),
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT membership_dates_check CHECK (membership_end_date IS NULL OR membership_end_date > membership_start_date)
);

-- Loans
CREATE TABLE loans (
    loan_id SERIAL PRIMARY KEY,
    book_id INT REFERENCES books(book_id) ON DELETE CASCADE,
    member_id INT REFERENCES members(member_id) ON DELETE CASCADE,
    branch_id INT REFERENCES library_branches(branch_id) ON DELETE SET NULL,
    loan_date DATE DEFAULT CURRENT_DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE,
    status VARCHAR(20) DEFAULT 'Borrowed' CHECK (status IN ('Borrowed', 'Returned', 'Overdue', 'Lost')),
    late_fee DECIMAL(10, 2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT loan_dates_check CHECK (due_date > loan_date AND (return_date IS NULL OR return_date >= loan_date)),
    CONSTRAINT return_date_check CHECK (return_date IS NULL OR return_date >= loan_date)
);

-- Reservations
CREATE TABLE reservations (
    reservation_id SERIAL PRIMARY KEY,
    book_id INT REFERENCES books(book_id) ON DELETE CASCADE,
    member_id INT REFERENCES members(member_id) ON DELETE CASCADE,
    reservation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'Pending' CHECK (status IN ('Pending', 'Fulfilled', 'Cancelled', 'Expired')),
    priority INT DEFAULT 1,
    notification_sent BOOLEAN DEFAULT FALSE,
    expiry_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_active_reservation UNIQUE (book_id, member_id) WHERE status = 'Pending'
);

-- Indexes
CREATE INDEX idx_books_isbn ON books(isbn);
CREATE INDEX idx_books_title ON books(title);
CREATE INDEX idx_members_email ON members(email);
CREATE INDEX idx_members_card ON members(library_card_number);
CREATE INDEX idx_loans_member ON loans(member_id);
CREATE INDEX idx_loans_book ON loans(book_id);
CREATE INDEX idx_loans_due_date ON loans(due_date) WHERE return_date IS NULL;
CREATE INDEX idx_reservations_book ON reservations(book_id) WHERE status = 'Pending';

-- Views
CREATE VIEW available_books AS
SELECT b.book_id, b.isbn, b.title, b.available_copies, 
             STRING_AGG(a.first_name || ' ' || a.last_name, ', ') AS authors,
             p.name AS publisher, c.name AS category
FROM books b
LEFT JOIN book_authors ba ON b.book_id = ba.book_id
LEFT JOIN authors a ON ba.author_id = a.author_id
LEFT JOIN publishers p ON b.publisher_id = p.publisher_id
LEFT JOIN categories c ON b.category_id = c.category_id
WHERE b.available_copies > 0
GROUP BY b.book_id, p.name, c.name;

CREATE VIEW member_loan_summary AS
SELECT m.member_id, m.first_name, m.last_name, m.email,
             COUNT(l.loan_id) FILTER (WHERE l.return_date IS NULL) AS active_loans,
             COUNT(l.loan_id) FILTER (WHERE l.return_date IS NOT NULL) AS returned_loans,
             SUM(l.late_fee) FILTER (WHERE l.late_fee > 0) AS total_late_fees,
             MAX(l.due_date) FILTER (WHERE l.return_date IS NULL) AS latest_due_date
FROM members m
LEFT JOIN loans l ON m.member_id = l.member_id
GROUP BY m.member_id;
```

### Phase 2: Sample Data Population 

Insert realistic sample data for all tables (authors, publishers, categories, books, book_authors, branches, members, loans, reservations). Ensure at least 50 records total.

### Phase 3: Complex Queries Development

Write at least 15 complex queries, such as:
- Books currently available for loan
- Most popular books
- Members with overdue books
- Library usage statistics by month
- Members who borrow the most books
- Books never borrowed
- Average loan duration by category
- Reservation queue for popular books
- Monthly late fee revenue
- Members nearing borrowing limit

### Phase 4: Stored Procedures and Functions 

Implement functions for:
- Borrowing a book (with checks and updates)
- Returning a book (with late fee calculation)
- Useful dashboard views

### Evaluation Criteria

- **Database Design (30%)**: Normalization, constraints, relationships
- **Query Complexity (25%)**: Advanced SQL, joins, aggregations
- **Data Integrity (20%)**: Constraints, validation, error handling
- **Performance (15%)**: Indexing, optimization
- **Documentation (10%)**: ER diagrams, explanations

### Required Deliverables

- SQL script for schema, data, queries, functions, and views
- Documentation (ER diagram, schema, query explanations, performance notes)
- Report (analysis, design decisions, improvements)

### Common Mistakes to Avoid

- Poor normalization
- Missing foreign keys
- Lack of indexes
- Hardcoded values
- Ignoring NULL handling
- Circular references
- No error handling
- Insufficient documentation

### Bonus Challenges

- Full-text search
- Audit logging
- Materialized views
- Data partitioning
- Geospatial features
- API endpoints
- Row-level security
- Replication setup
- Backup/recovery
- Data archiving

### Tips for Success

- Design first (ER diagram)
- Test incrementally
- Use transactions
- Optimize with EXPLAIN ANALYZE
- Document thoroughly

### Real-World Application

Develops skills for database administration, backend development, BI/reporting, data analysis, and application design.

### Submission Checklist

- Complete SQL script (schema, data, queries, functions, views)
- 50+ sample records
- 15+ complex queries
- Proper indexes
- Views for reports
- ER diagram/schema visualization
- Query performance analysis
- All foreign keys defined
- Database runs without errors
- Documentation included
