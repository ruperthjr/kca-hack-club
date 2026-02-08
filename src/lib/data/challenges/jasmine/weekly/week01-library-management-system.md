---
title: "Library Management System"
description: "Build a complete library management system using C++ with file persistence and full CRUD operations"
difficulty: "intermediate"
unit: "Unit 2: Object Oriented Programming with C++"
week: 1
technologies:
  - "C++"
  - "File I/O"
  - "Object-Oriented Programming"
  - "Data Structures"
learningOutcomes:
  - "Design and implement class hierarchies"
  - "Implement file-based data persistence"
  - "Build complete CRUD operations"
  - "Apply OOP principles (encapsulation, inheritance, polymorphism)"
estimatedTime: "5-6 hours"
requirements:
  - "C++ compiler (GCC 11+ or MSVC 2019+)"
  - "Text editor or IDE (VS Code, CLion, Visual Studio)"
  - "Understanding of OOP concepts"
  - "Basic knowledge of file I/O"
deliverables:
  - "Complete C++ source code with proper structure"
  - "Sample data files demonstrating functionality"
  - "README with compilation and usage instructions"
  - "Test cases covering all CRUD operations"
resources:
  - name: "C++ File I/O Documentation"
    url: "https://cplusplus.com/reference/fstream/"
  - name: "Object-Oriented Programming in C++"
    url: "https://www.learncpp.com/cpp-tutorial/introduction-to-object-oriented-programming/"
  - name: "C++ Best Practices"
    url: "https://github.com/cpp-best-practices/cppbestpractices"
dateAdded: "2026-02-09"
---

# Library Management System

## Project Overview

Build a comprehensive library management system in C++ that allows librarians to manage books, members, and borrowing transactions. The system should persist data to files and provide a menu-driven interface for all operations.

## Core Features

### 1. Book Management
- Add new books to the library
- Update book information
- Delete books from the system
- Search books by title, author, or ISBN
- Display all books with availability status

### 2. Member Management
- Register new members
- Update member information
- Remove members
- View member borrowing history
- Search members by ID or name

### 3. Transaction Management
- Issue books to members
- Return books
- Calculate and apply late fees
- Generate borrowing reports
- Track due dates

### 4. Data Persistence
- Save all data to files (books, members, transactions)
- Load data on program startup
- Implement proper error handling for file operations
- Support data backup and restoration

## Technical Requirements

### Class Structure

```cpp
// Base classes
class Book {
private:
    string isbn;
    string title;
    string author;
    int publicationYear;
    bool isAvailable;
    
public:
    // Constructor, getters, setters
    // Methods for display, file I/O
};

class Member {
private:
    int memberId;
    string name;
    string email;
    string phone;
    vector<string> borrowedBooks;
    
public:
    // Constructor, getters, setters
    // Methods for borrowing, returning
};

class Transaction {
private:
    int transactionId;
    int memberId;
    string isbn;
    time_t issueDate;
    time_t dueDate;
    time_t returnDate;
    double lateFee;
    
public:
    // Constructor, getters, setters
    // Calculate late fees
};

class Library {
private:
    vector<Book> books;
    vector<Member> members;
    vector<Transaction> transactions;
    
public:
    // CRUD operations for all entities
    // File I/O methods
    // Search and filter methods
    // Report generation
};
```

### File Format

Use text files with clear delimiters:

**books.txt:**
```
ISBN|Title|Author|Year|Available
978-0-13-468599-1|Clean Code|Robert Martin|2008|1
978-0-13-235088-4|Clean Architecture|Robert Martin|2017|0
```

**members.txt:**
```
MemberID|Name|Email|Phone
1001|John Doe|john@email.com|555-0101
1002|Jane Smith|jane@email.com|555-0102
```

**transactions.txt:**
```
TransactionID|MemberID|ISBN|IssueDate|DueDate|ReturnDate|LateFee
1|1001|978-0-13-468599-1|2026-02-01|2026-02-15||0.00
```

## Menu System

Implement a clear, hierarchical menu:

```
===== LIBRARY MANAGEMENT SYSTEM =====
1. Book Management
   1.1 Add Book
   1.2 Update Book
   1.3 Delete Book
   1.4 Search Books
   1.5 Display All Books
   
2. Member Management
   2.1 Register Member
   2.2 Update Member
   2.3 Remove Member
   2.4 Search Members
   2.5 Display All Members
   
3. Transaction Management
   3.1 Issue Book
   3.2 Return Book
   3.3 View Transactions
   3.4 Generate Reports
   
4. System
   4.1 Backup Data
   4.2 Restore Data
   4.3 Exit
```

## Validation Requirements

Your system must validate:
- ISBN format (ISBN-13)
- Email addresses
- Phone numbers
- Dates (no past due dates)
- Member ID uniqueness
- Book availability before issuing

## Advanced Features (Optional)

If you finish early, add:
- Book reservation system
- Fine calculation with grace period
- Book categories and filtering
- Member types (student, faculty, public)
- Statistical reports (most borrowed books, active members)
- Search with partial matching
- Export data to CSV

## Testing

Create test cases for:
1. Adding valid and invalid books
2. Registering members with duplicate IDs
3. Issuing unavailable books
4. Returning books with late fees
5. Data persistence across program runs
6. Edge cases (empty file, corrupted data)

## Example Usage

```cpp
Library library;
library.loadData();

// Add a book
Book newBook("978-0-13-468599-1", "Clean Code", 
             "Robert Martin", 2008);
library.addBook(newBook);

// Register a member
Member newMember(1001, "John Doe", 
                 "john@email.com", "555-0101");
library.registerMember(newMember);

// Issue a book
library.issueBook(1001, "978-0-13-468599-1");

// Save all changes
library.saveData();
```

## Evaluation Criteria

Your project will be evaluated on:

1. **Code Quality** (30%)
   - Clean, readable code
   - Proper use of OOP principles
   - Consistent naming conventions
   - Adequate comments

2. **Functionality** (40%)
   - All CRUD operations work correctly
   - File persistence is reliable
   - Validation is thorough
   - Menu system is intuitive

3. **Error Handling** (15%)
   - Graceful handling of invalid input
   - File operation error management
   - User-friendly error messages

4. **Documentation** (15%)
   - Clear README
   - Code comments
   - Usage examples

## Submission Checklist

- [ ] All source files (.cpp, .h)
- [ ] Sample data files
- [ ] README.md with:
  - [ ] Compilation instructions
  - [ ] Usage guide
  - [ ] Feature list
  - [ ] Known limitations
- [ ] Test cases and results
- [ ] Screenshots of program execution

## Tips for Success

1. Start with a single class and test thoroughly
2. Implement file I/O early to ensure data persistence works
3. Use version control (Git) from the start
4. Test edge cases regularly
5. Keep functions small and focused
6. Use const references where appropriate
7. Follow RAII principles for resource management

## Common Pitfalls to Avoid

- Not closing files properly
- Forgetting to check if file operations succeeded
- Mixing input/output streams incorrectly
- Not validating user input
- Hardcoding file paths
- Not handling empty data scenarios

Good luck building your library management system!