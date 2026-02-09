---
title: "Production-Ready Library Management System"
description: "Complete library system with database, backend API, and basic web frontend"
difficulty: "advanced"
month: 1
technologies:
  - "Backend: Python Flask/Django OR Node.js Express"
  - "Database: MySQL/PostgreSQL"
  - "Frontend: HTML/CSS/JavaScript"
  - "RESTful API"
  - "SQL & Database Design"
learningOutcomes:
  - "Design normalized relational database schemas"
  - "Build RESTful APIs with full CRUD operations"
  - "Implement business logic and validation"
  - "Create full-stack applications"
  - "Deploy complete systems"
estimatedTime: "18-25 hours"
requirements:
  - "Backend framework (Flask/Django OR Express.js)"
  - "Database (MySQL OR PostgreSQL)"
  - "Postman for API testing"
  - "Git/GitHub"
  - "Basic SQL knowledge"
deliverables:
  - "Backend API with complete documentation"
  - "Functional database with proper schema"
  - "Frontend web interface"
  - "Book CRUD operations"
  - "Member management system"
  - "Check-out/return system"
  - "Search functionality"
  - "Reports generation"
  - "Deployed application"
resources:
  - name: "Flask (Official Documentation)"
    url: "https://flask.palletsprojects.com/"
  - name: "Flask-SQLAlchemy Documentation"
    url: "https://flask-sqlalchemy.palletsprojects.com/"
  - name: "PostgreSQL Tutorial"
    url: "https://www.postgresqltutorial.com/"
  - name: "REST API Best Practices (RESTfulAPI.net)"
    url: "https://restfulapi.net/"
  - name: "Docker — Get Started"
    url: "https://docs.docker.com/get-started/"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Production-Ready Library Management System

## Project Overview

Build a complete library management system that allows librarians to manage books, members, and lending operations. This project simulates real-world library software with database design, API development, and user interface implementation.

## Core Features

### 1. Book Management
- Add new books to catalog
- Edit book information
- Delete books (with safety checks)
- View book details
- Track available vs checked-out copies
- ISBN validation
- Category/genre classification

### 2. Member Management
- Register new library members
- Update member information
- View member borrowing history
- Track overdue items per member
- Member status (active/suspended)
- Membership expiry tracking

### 3. Transaction System
- Check out books to members
- Return books
- Renewal of borrowed books
- Calculate due dates
- Track overdue items
- Fine calculation (optional)

### 4. Search & Reporting
- Search books by title, author, ISBN, category
- Search members by name, ID, email
- Generate overdue books report
- Generate most popular books report
- Member activity report
- Inventory status report

## Database Schema

### Tables Design

**books table:**
```sql
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    isbn VARCHAR(13) UNIQUE NOT NULL,
    title VARCHAR(200) NOT NULL,
    author VARCHAR(100) NOT NULL,
    publisher VARCHAR(100),
    publication_year INTEGER,
    category VARCHAR(50),
    total_copies INTEGER DEFAULT 1,
    available_copies INTEGER DEFAULT 1,
    shelf_location VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**members table:**
```sql
CREATE TABLE members (
    id SERIAL PRIMARY KEY,
    member_id VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    membership_date DATE DEFAULT CURRENT_DATE,
    expiry_date DATE,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**transactions table:**
```sql
CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    book_id INTEGER REFERENCES books(id),
    member_id INTEGER REFERENCES members(id),
    checkout_date DATE DEFAULT CURRENT_DATE,
    due_date DATE NOT NULL,
    return_date DATE,
    status VARCHAR(20) DEFAULT 'borrowed',
    renewed_count INTEGER DEFAULT 0,
    fine_amount DECIMAL(10,2) DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Sample Data Inserts:**
```sql
-- Insert sample books
INSERT INTO books (isbn, title, author, publisher, publication_year, category, total_copies, available_copies, shelf_location)
VALUES 
('9780132350884', 'Clean Code', 'Robert C. Martin', 'Prentice Hall', 2008, 'Programming', 3, 3, 'A-101'),
('9780201633610', 'Design Patterns', 'Gang of Four', 'Addison-Wesley', 1994, 'Programming', 2, 2, 'A-102'),
('9780262033848', 'Introduction to Algorithms', 'CLRS', 'MIT Press', 2009, 'Computer Science', 2, 1, 'B-201');

-- Insert sample members
INSERT INTO members (member_id, name, email, phone, expiry_date, status)
VALUES
('MEM001', 'Alice Johnson', 'alice@email.com', '0712345678', '2026-12-31', 'active'),
('MEM002', 'Bob Smith', 'bob@email.com', '0723456789', '2026-12-31', 'active');
```

## Backend API Structure (Flask Example)

### Project Structure
```
library-api/
├── app/
│   ├── __init__.py
│   ├── models.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── books.py
│   │   ├── members.py
│   │   └── transactions.py
│   ├── schemas.py
│   └── utils.py
├── migrations/
├── tests/
├── config.py
├── requirements.txt
└── run.py
```

### Models (models.py)
```python
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timedelta

db = SQLAlchemy()

class Book(db.Model):
    __tablename__ = 'books'
    
    id = db.Column(db.Integer, primary_key=True)
    isbn = db.Column(db.String(13), unique=True, nullable=False)
    title = db.Column(db.String(200), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    publisher = db.Column(db.String(100))
    publication_year = db.Column(db.Integer)
    category = db.Column(db.String(50))
    total_copies = db.Column(db.Integer, default=1)
    available_copies = db.Column(db.Integer, default=1)
    shelf_location = db.Column(db.String(20))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    transactions = db.relationship('Transaction', backref='book', lazy='dynamic')
    
    def to_dict(self):
        return {
            'id': self.id,
            'isbn': self.isbn,
            'title': self.title,
            'author': self.author,
            'publisher': self.publisher,
            'publication_year': self.publication_year,
            'category': self.category,
            'total_copies': self.total_copies,
            'available_copies': self.available_copies,
            'shelf_location': self.shelf_location
        }

class Member(db.Model):
    __tablename__ = 'members'
    
    id = db.Column(db.Integer, primary_key=True)
    member_id = db.Column(db.String(20), unique=True, nullable=False)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(20))
    address = db.Column(db.Text)
    membership_date = db.Column(db.Date, default=datetime.utcnow().date)
    expiry_date = db.Column(db.Date)
    status = db.Column(db.String(20), default='active')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    transactions = db.relationship('Transaction', backref='member', lazy='dynamic')
    
    def to_dict(self):
        return {
            'id': self.id,
            'member_id': self.member_id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'address': self.address,
            'membership_date': self.membership_date.isoformat() if self.membership_date else None,
            'expiry_date': self.expiry_date.isoformat() if self.expiry_date else None,
            'status': self.status
        }

class Transaction(db.Model):
    __tablename__ = 'transactions'
    
    id = db.Column(db.Integer, primary_key=True)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
    member_id = db.Column(db.Integer, db.ForeignKey('members.id'), nullable=False)
    checkout_date = db.Column(db.Date, default=datetime.utcnow().date)
    due_date = db.Column(db.Date, nullable=False)
    return_date = db.Column(db.Date)
    status = db.Column(db.String(20), default='borrowed')
    renewed_count = db.Column(db.Integer, default=0)
    fine_amount = db.Column(db.Numeric(10, 2), default=0.00)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'book_id': self.book_id,
            'member_id': self.member_id,
            'checkout_date': self.checkout_date.isoformat() if self.checkout_date else None,
            'due_date': self.due_date.isoformat() if self.due_date else None,
            'return_date': self.return_date.isoformat() if self.return_date else None,
            'status': self.status,
            'renewed_count': self.renewed_count,
            'fine_amount': float(self.fine_amount)
        }
```

### API Routes (routes/books.py)
```python
from flask import Blueprint, request, jsonify
from app.models import db, Book
from sqlalchemy.exc import IntegrityError

books_bp = Blueprint('books', __name__)

@books_bp.route('/api/books', methods=['GET'])
def get_books():
    page = request.args.get('page', 1, type=int)
    per_page = request.args.get('per_page', 10, type=int)
    search = request.args.get('search', '')
    category = request.args.get('category', '')
    
    query = Book.query
    
    if search:
        query = query.filter(
            (Book.title.ilike(f'%{search}%')) |
            (Book.author.ilike(f'%{search}%')) |
            (Book.isbn.ilike(f'%{search}%'))
        )
    
    if category:
        query = query.filter_by(category=category)
    
    books = query.paginate(page=page, per_page=per_page, error_out=False)
    
    return jsonify({
        'books': [book.to_dict() for book in books.items],
        'total': books.total,
        'pages': books.pages,
        'current_page': page
    })

@books_bp.route('/api/books', methods=['POST'])
def create_book():
    data = request.get_json()
    
    required_fields = ['isbn', 'title', 'author']
    for field in required_fields:
        if field not in data:
            return jsonify({'error': f'Missing field: {field}'}), 400
    
    try:
        book = Book(
            isbn=data['isbn'],
            title=data['title'],
            author=data['author'],
            publisher=data.get('publisher'),
            publication_year=data.get('publication_year'),
            category=data.get('category'),
            total_copies=data.get('total_copies', 1),
            available_copies=data.get('available_copies', 1),
            shelf_location=data.get('shelf_location')
        )
        
        db.session.add(book)
        db.session.commit()
        
        return jsonify({'message': 'Book created successfully', 'book': book.to_dict()}), 201
    
    except IntegrityError:
        db.session.rollback()
        return jsonify({'error': 'Book with this ISBN already exists'}), 400

@books_bp.route('/api/books/<int:id>', methods=['GET'])
def get_book(id):
    book = Book.query.get_or_404(id)
    return jsonify(book.to_dict())

@books_bp.route('/api/books/<int:id>', methods=['PUT'])
def update_book(id):
    book = Book.query.get_or_404(id)
    data = request.get_json()
    
    book.title = data.get('title', book.title)
    book.author = data.get('author', book.author)
    book.publisher = data.get('publisher', book.publisher)
    book.publication_year = data.get('publication_year', book.publication_year)
    book.category = data.get('category', book.category)
    book.total_copies = data.get('total_copies', book.total_copies)
    book.shelf_location = data.get('shelf_location', book.shelf_location)
    
    db.session.commit()
    return jsonify({'message': 'Book updated successfully', 'book': book.to_dict()})

@books_bp.route('/api/books/<int:id>', methods=['DELETE'])
def delete_book(id):
    book = Book.query.get_or_404(id)
    
    if book.transactions.filter_by(status='borrowed').count() > 0:
        return jsonify({'error': 'Cannot delete book with active borrowings'}), 400
    
    db.session.delete(book)
    db.session.commit()
    return jsonify({'message': 'Book deleted successfully'})
```

### Transaction Routes (routes/transactions.py)
```python
from flask import Blueprint, request, jsonify
from app.models import db, Transaction, Book, Member
from datetime import datetime, timedelta

transactions_bp = Blueprint('transactions', __name__)

@transactions_bp.route('/api/transactions/checkout', methods=['POST'])
def checkout_book():
    data = request.get_json()
    
    book = Book.query.get_or_404(data['book_id'])
    member = Member.query.get_or_404(data['member_id'])
    
    if book.available_copies <= 0:
        return jsonify({'error': 'No copies available'}), 400
    
    if member.status != 'active':
        return jsonify({'error': 'Member account is not active'}), 400
    
    active_loans = member.transactions.filter_by(status='borrowed').count()
    if active_loans >= 3:
        return jsonify({'error': 'Member has reached maximum loan limit'}), 400
    
    checkout_date = datetime.utcnow().date()
    due_date = checkout_date + timedelta(days=14)
    
    transaction = Transaction(
        book_id=book.id,
        member_id=member.id,
        checkout_date=checkout_date,
        due_date=due_date,
        status='borrowed'
    )
    
    book.available_copies -= 1
    
    db.session.add(transaction)
    db.session.commit()
    
    return jsonify({
        'message': 'Book checked out successfully',
        'transaction': transaction.to_dict(),
        'due_date': due_date.isoformat()
    }), 201

@transactions_bp.route('/api/transactions/<int:id>/return', methods=['POST'])
def return_book(id):
    transaction = Transaction.query.get_or_404(id)
    
    if transaction.status != 'borrowed':
        return jsonify({'error': 'Book already returned'}), 400
    
    book = Book.query.get(transaction.book_id)
    return_date = datetime.utcnow().date()
    
    transaction.return_date = return_date
    transaction.status = 'returned'
    
    if return_date > transaction.due_date:
        days_overdue = (return_date - transaction.due_date).days
        transaction.fine_amount = days_overdue * 10.00
    
    book.available_copies += 1
    
    db.session.commit()
    
    return jsonify({
        'message': 'Book returned successfully',
        'transaction': transaction.to_dict(),
        'fine_amount': float(transaction.fine_amount)
    })

@transactions_bp.route('/api/transactions/overdue', methods=['GET'])
def get_overdue_books():
    today = datetime.utcnow().date()
    
    overdue = Transaction.query.filter(
        Transaction.status == 'borrowed',
        Transaction.due_date < today
    ).all()
    
    results = []
    for trans in overdue:
        days_overdue = (today - trans.due_date).days
        results.append({
            'transaction': trans.to_dict(),
            'book': trans.book.to_dict(),
            'member': trans.member.to_dict(),
            'days_overdue': days_overdue,
            'calculated_fine': days_overdue * 10.00
        })
    
    return jsonify(results)
```

## Frontend Interface

### Main Dashboard (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library Management System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">📚 Library System</a>
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="books.html">Books</a></li>
                <li class="nav-item"><a class="nav-link" href="members.html">Members</a></li>
                <li class="nav-item"><a class="nav-link" href="transactions.html">Transactions</a></li>
                <li class="nav-item"><a class="nav-link" href="reports.html">Reports</a></li>
            </ul>
        </div>
    </nav>

    <div class="container mt-4">
        <div class="row">
            <div class="col-md-3">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <h5>Total Books</h5>
                        <h2 id="totalBooks">0</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-white bg-success">
                    <div class="card-body">
                        <h5>Active Members</h5>
                        <h2 id="activeMembers">0</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-white bg-warning">
                    <div class="card-body">
                        <h5>Books Out</h5>
                        <h2 id="booksOut">0</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card text-white bg-danger">
                    <div class="card-body">
                        <h5>Overdue</h5>
                        <h2 id="overdueCount">0</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header"><h5>Recent Transactions</h5></div>
                    <div class="card-body">
                        <div id="recentTransactions"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header"><h5>Overdue Books</h5></div>
                    <div class="card-body">
                        <div id="overdueBooks"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        async function loadDashboard() {
            try {
                const statsResponse = await fetch('/api/stats');
                const stats = await statsResponse.json();
                
                document.getElementById('totalBooks').textContent = stats.total_books;
                document.getElementById('activeMembers').textContent = stats.active_members;
                document.getElementById('booksOut').textContent = stats.books_out;
                document.getElementById('overdueCount').textContent = stats.overdue_count;
                
                const transactionsResponse = await fetch('/api/transactions/recent');
                const transactions = await transactionsResponse.json();
                displayTransactions(transactions);
                
                const overdueResponse = await fetch('/api/transactions/overdue');
                const overdue = await overdueResponse.json();
                displayOverdue(overdue);
            } catch (error) {
                console.error('Error loading dashboard:', error);
            }
        }
        
        loadDashboard();
    </script>
</body>
</html>
```

## API Documentation

### Endpoints Summary

**Books:**
- `GET /api/books` - List all books (with pagination, search, filter)
- `POST /api/books` - Create new book
- `GET /api/books/:id` - Get book details
- `PUT /api/books/:id` - Update book
- `DELETE /api/books/:id` - Delete book

**Members:**
- `GET /api/members` - List all members
- `POST /api/members` - Register new member
- `GET /api/members/:id` - Get member details
- `PUT /api/members/:id` - Update member
- `DELETE /api/members/:id` - Delete member

**Transactions:**
- `POST /api/transactions/checkout` - Check out book
- `POST /api/transactions/:id/return` - Return book
- `POST /api/transactions/:id/renew` - Renew book
- `GET /api/transactions/overdue` - Get overdue books
- `GET /api/transactions/member/:id` - Get member's transaction history

**Reports:**
- `GET /api/reports/popular-books` - Most borrowed books
- `GET /api/reports/member-activity` - Member borrowing statistics
- `GET /api/reports/inventory` - Inventory status

## Deployment

### Heroku Deployment
```bash
# Install dependencies
pip install gunicorn psycopg2-binary

# Create Procfile
echo "web: gunicorn run:app" > Procfile

# Deploy
heroku create library-system-app
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
heroku run flask db upgrade
```

## Evaluation Criteria

**Database Design (20%):**
- Normalized schema
- Proper relationships
- Appropriate constraints
- Indexes on key fields

**API Functionality (30%):**
- All CRUD operations work
- Proper HTTP methods and status codes
- Input validation
- Error handling

**Business Logic (20%):**
- Book availability tracking
- Transaction management
- Fine calculation
- Search functionality

**Frontend (15%):**
- Functional user interface
- All features accessible
- Responsive design
- User-friendly

**Code Quality (10%):**
- Clean, organized code
- Good naming conventions
- Documentation
- Testing

**Deployment (5%):**
- Successfully deployed
- Database working in production
- No deployment errors

## Required Deliverables

1. GitHub Repository with complete source code
2. Live deployed application URL
3. README with setup and API documentation
4. Database schema diagram
5. API testing collection (Postman)
6. Demo video (3-5 minutes)

## Submission Checklist

- [ ] All CRUD operations for books functional
- [ ] All CRUD operations for members functional
- [ ] Checkout/return system working
- [ ] Search functionality implemented
- [ ] At least 3 reports working
- [ ] Frontend connected to backend
- [ ] Database properly designed
- [ ] API documented
- [ ] Application deployed
- [ ] README complete

This project demonstrates full-stack development skills essential for real-world applications!