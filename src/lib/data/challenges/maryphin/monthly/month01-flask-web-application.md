---
title: "Production-Ready Basic Web Application (Flask)"
description: "Build Flask web app with user authentication, functional database, and deployment"
difficulty: "advanced"
month: 1
technologies:
  - "Python 3.8+"
  - "Flask Framework"
  - "SQLite/PostgreSQL"
  - "Flask-Login"
  - "Flask-SQLAlchemy"
  - "HTML/CSS/Bootstrap 5"
  - "Jinja2 Templates"
  - "Heroku/PythonAnywhere"
learningOutcomes:
  - "Build full-stack web applications with Flask"
  - "Implement secure user authentication"
  - "Design relational databases with SQLAlchemy"
  - "Create RESTful routes and CRUD operations"
  - "Deploy production web applications"
  - "Handle user sessions and cookies"
estimatedTime: "15-20 hours"
requirements:
  - "Python 3.8+ installed"
  - "pip and virtualenv"
  - "Basic HTML/CSS knowledge"
  - "Text editor (VS Code)"
  - "GitHub account"
  - "Heroku or PythonAnywhere account (free tier)"
deliverables:
  - "Complete Flask application with authentication"
  - "User registration and login system"
  - "SQLite database with CRUD operations"
  - "Deployed live application with URL"
  - "GitHub repository with comprehensive README"
  - "At least 5 functional routes"
resources:
  - name: "Flask Official Documentation"
    url: "https://flask.palletsprojects.com/"
  - name: "Flask Mega-Tutorial by Miguel Grinberg"
    url: "https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world"
  - name: "Flask-Login Documentation"
    url: "https://flask-login.readthedocs.io/"
  - name: "Flask-SQLAlchemy Documentation"
    url: "https://flask-sqlalchemy.palletsprojects.com/"
  - name: "Bootstrap 5 Documentation"
    url: "https://getbootstrap.com/docs/5.0/getting-started/introduction/"
  - name: "Deploying Flask on Heroku"
    url: "https://devcenter.heroku.com/articles/getting-started-with-python"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Production-Ready Flask Web Application

## Project Overview

Build a complete full-stack web application using Flask that includes user authentication, database operations, and dynamic content. Your application will allow users to register, login, and perform CRUD operations on their personal data.

Choose one of these application ideas or propose your own:
- Personal Blog Platform
- Task/Todo Management System
- Recipe Collection App
- Expense Tracker
- Note-Taking Application

## Project Structure

```
flask-app/
├── app/
│   ├── __init__.py
│   ├── models.py
│   ├── routes.py
│   ├── forms.py
│   ├── templates/
│   │   ├── base.html
│   │   ├── index.html
│   │   ├── register.html
│   │   ├── login.html
│   │   ├── dashboard.html
│   │   ├── create.html
│   │   └── edit.html
│   └── static/
│       ├── css/
│       │   └── style.css
│       ├── js/
│       │   └── main.js
│       └── images/
├── migrations/
├── tests/
├── venv/
├── .env
├── .gitignore
├── config.py
├── requirements.txt
├── run.py
├── Procfile
└── README.md
```

## Phase 1: Initial Setup and Configuration

### Step 1: Create Virtual Environment

```bash
# Create project directory
mkdir flask-app
cd flask-app

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install Flask and extensions
pip install flask flask-sqlalchemy flask-login flask-wtf flask-migrate python-dotenv email-validator
pip freeze > requirements.txt
```

### Step 2: Create Configuration File

**config.py:**
```python
import os
from datetime import timedelta

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    PERMANENT_SESSION_LIFETIME = timedelta(minutes=30)
    WTF_CSRF_ENABLED = True
```

### Step 3: Initialize Flask Application

**app/__init__.py:**
```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate
from config import Config

db = SQLAlchemy()
login_manager = LoginManager()
migrate = Migrate()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    db.init_app(app)
    login_manager.init_app(app)
    migrate.init_app(app, db)
    
    login_manager.login_view = 'login'
    login_manager.login_message = 'Please log in to access this page.'
    
    from app import routes, models
    
    with app.app_context():
        db.create_all()
    
    return app
```

**run.py:**
```python
from app import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
```

## Phase 2: Database Models

**app/models.py:**
```python
from app import db, login_manager
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False, index=True)
    email = db.Column(db.String(120), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Relationship to items (tasks, posts, notes, etc.)
    items = db.relationship('Item', backref='author', lazy='dynamic', cascade='all, delete-orphan')
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
    
    def __repr__(self):
        return f'<User {self.username}>'

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(50))
    priority = db.Column(db.String(20), default='medium')
    completed = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    
    def __repr__(self):
        return f'<Item {self.title}>'
```

## Phase 3: Forms with Flask-WTF

**app/forms.py:**
```python
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, SelectField, BooleanField, SubmitField
from wtforms.validators import DataRequired, Email, EqualTo, Length, ValidationError
from app.models import User

class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[
        DataRequired(),
        Length(min=3, max=80, message='Username must be between 3 and 80 characters')
    ])
    email = StringField('Email', validators=[
        DataRequired(),
        Email(message='Please enter a valid email address')
    ])
    password = PasswordField('Password', validators=[
        DataRequired(),
        Length(min=6, message='Password must be at least 6 characters')
    ])
    confirm_password = PasswordField('Confirm Password', validators=[
        DataRequired(),
        EqualTo('password', message='Passwords must match')
    ])
    submit = SubmitField('Sign Up')
    
    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user:
            raise ValidationError('Username already exists. Please choose another.')
    
    def validate_email(self, email):
        user = User.query.filter_by(email=email.data).first()
        if user:
            raise ValidationError('Email already registered. Please use another.')

class LoginForm(FlaskForm):
    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')

class ItemForm(FlaskForm):
    title = StringField('Title', validators=[
        DataRequired(),
        Length(min=1, max=200)
    ])
    content = TextAreaField('Content', validators=[DataRequired()])
    category = StringField('Category', validators=[Length(max=50)])
    priority = SelectField('Priority', choices=[
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High')
    ], default='medium')
    completed = BooleanField('Completed')
    submit = SubmitField('Save')
```

## Phase 4: Routes and Views

**app/routes.py:**
```python
from flask import render_template, redirect, url_for, flash, request, current_app as app
from flask_login import login_user, logout_user, current_user, login_required
from app import db
from app.models import User, Item
from app.forms import RegistrationForm, LoginForm, ItemForm

@app.route('/')
@app.route('/index')
def index():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    return render_template('index.html', title='Home')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    
    form = RegistrationForm()
    if form.validate_on_submit():
        user = User(username=form.username.data, email=form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        
        flash('Registration successful! Please log in.', 'success')
        return redirect(url_for('login'))
    
    return render_template('register.html', title='Register', form=form)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    
    form = LoginForm()
    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()
        
        if user and user.check_password(form.password.data):
            login_user(user, remember=form.remember.data)
            next_page = request.args.get('next')
            flash(f'Welcome back, {user.username}!', 'success')
            return redirect(next_page) if next_page else redirect(url_for('dashboard'))
        else:
            flash('Invalid email or password. Please try again.', 'danger')
    
    return render_template('login.html', title='Login', form=form)

@app.route('/logout')
@login_required
def logout():
    logout_user()
    flash('You have been logged out.', 'info')
    return redirect(url_for('index'))

@app.route('/dashboard')
@login_required
def dashboard():
    page = request.args.get('page', 1, type=int)
    items = current_user.items.order_by(Item.created_at.desc()).paginate(
        page=page, per_page=10, error_out=False
    )
    
    stats = {
        'total': current_user.items.count(),
        'completed': current_user.items.filter_by(completed=True).count(),
        'pending': current_user.items.filter_by(completed=False).count()
    }
    
    return render_template('dashboard.html', title='Dashboard', items=items, stats=stats)

@app.route('/item/create', methods=['GET', 'POST'])
@login_required
def create_item():
    form = ItemForm()
    if form.validate_on_submit():
        item = Item(
            title=form.title.data,
            content=form.content.data,
            category=form.category.data,
            priority=form.priority.data,
            completed=form.completed.data,
            author=current_user
        )
        db.session.add(item)
        db.session.commit()
        
        flash('Item created successfully!', 'success')
        return redirect(url_for('dashboard'))
    
    return render_template('create.html', title='Create Item', form=form)

@app.route('/item/<int:id>/edit', methods=['GET', 'POST'])
@login_required
def edit_item(id):
    item = Item.query.get_or_404(id)
    
    if item.author != current_user:
        flash('You do not have permission to edit this item.', 'danger')
        return redirect(url_for('dashboard'))
    
    form = ItemForm()
    if form.validate_on_submit():
        item.title = form.title.data
        item.content = form.content.data
        item.category = form.category.data
        item.priority = form.priority.data
        item.completed = form.completed.data
        db.session.commit()
        
        flash('Item updated successfully!', 'success')
        return redirect(url_for('dashboard'))
    elif request.method == 'GET':
        form.title.data = item.title
        form.content.data = item.content
        form.category.data = item.category
        form.priority.data = item.priority
        form.completed.data = item.completed
    
    return render_template('edit.html', title='Edit Item', form=form, item=item)

@app.route('/item/<int:id>/delete', methods=['POST'])
@login_required
def delete_item(id):
    item = Item.query.get_or_404(id)
    
    if item.author != current_user:
        flash('You do not have permission to delete this item.', 'danger')
        return redirect(url_for('dashboard'))
    
    db.session.delete(item)
    db.session.commit()
    flash('Item deleted successfully!', 'success')
    
    return redirect(url_for('dashboard'))

@app.route('/item/<int:id>/toggle', methods=['POST'])
@login_required
def toggle_item(id):
    item = Item.query.get_or_404(id)
    
    if item.author != current_user:
        return {'success': False, 'message': 'Unauthorized'}, 403
    
    item.completed = not item.completed
    db.session.commit()
    
    return {'success': True, 'completed': item.completed}

@app.errorhandler(404)
def not_found_error(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    db.session.rollback()
    return render_template('500.html'), 500
```

## Phase 5: Templates

**app/templates/base.html:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}Flask App{% endblock %}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ url_for('static', filename='css/style.css') }}">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="{{ url_for('index') }}">FlaskApp</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    {% if current_user.is_authenticated %}
                        <li class="nav-item"><a class="nav-link" href="{{ url_for('dashboard') }}">Dashboard</a></li>
                        <li class="nav-item"><a class="nav-link" href="{{ url_for('create_item') }}">Create</a></li>
                        <li class="nav-item"><a class="nav-link" href="{{ url_for('logout') }}">Logout</a></li>
                    {% else %}
                        <li class="nav-item"><a class="nav-link" href="{{ url_for('login') }}">Login</a></li>
                        <li class="nav-item"><a class="nav-link" href="{{ url_for('register') }}">Register</a></li>
                    {% endif %}
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        {% with messages = get_flashed_messages(with_categories=true) %}
            {% if messages %}
                {% for category, message in messages %}
                    <div class="alert alert-{{ category }} alert-dismissible fade show" role="alert">
                        {{ message }}
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                {% endfor %}
            {% endif %}
        {% endwith %}

        {% block content %}{% endblock %}
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ url_for('static', filename='js/main.js') }}"></script>
</body>
</html>
```

**app/templates/register.html:**
```html
{% extends "base.html" %}

{% block title %}Register{% endblock %}

{% block content %}
<div class="row justify-content-center">
    <div class="col-md-6">
        <div class="card">
            <div class="card-header">
                <h3>Create Account</h3>
            </div>
            <div class="card-body">
                <form method="POST" action="">
                    {{ form.hidden_tag() }}
                    
                    <div class="mb-3">
                        {{ form.username.label(class="form-label") }}
                        {{ form.username(class="form-control" + (" is-invalid" if form.username.errors else "")) }}
                        {% if form.username.errors %}
                            <div class="invalid-feedback">
                                {% for error in form.username.errors %}{{ error }}{% endfor %}
                            </div>
                        {% endif %}
                    </div>
                    
                    <div class="mb-3">
                        {{ form.email.label(class="form-label") }}
                        {{ form.email(class="form-control" + (" is-invalid" if form.email.errors else "")) }}
                        {% if form.email.errors %}
                            <div class="invalid-feedback">
                                {% for error in form.email.errors %}{{ error }}{% endfor %}
                            </div>
                        {% endif %}
                    </div>
                    
                    <div class="mb-3">
                        {{ form.password.label(class="form-label") }}
                        {{ form.password(class="form-control" + (" is-invalid" if form.password.errors else "")) }}
                        {% if form.password.errors %}
                            <div class="invalid-feedback">
                                {% for error in form.password.errors %}{{ error }}{% endfor %}
                            </div>
                        {% endif %}
                    </div>
                    
                    <div class="mb-3">
                        {{ form.confirm_password.label(class="form-label") }}
                        {{ form.confirm_password(class="form-control" + (" is-invalid" if form.confirm_password.errors else "")) }}
                        {% if form.confirm_password.errors %}
                            <div class="invalid-feedback">
                                {% for error in form.confirm_password.errors %}{{ error }}{% endfor %}
                            </div>
                        {% endif %}
                    </div>
                    
                    <div class="d-grid">
                        {{ form.submit(class="btn btn-primary") }}
                    </div>
                </form>
                
                <hr>
                <p class="text-center">Already have an account? <a href="{{ url_for('login') }}">Login here</a></p>
            </div>
        </div>
    </div>
</div>
{% endblock %}
```

**app/templates/dashboard.html:**
```html
{% extends "base.html" %}

{% block title %}Dashboard{% endblock %}

{% block content %}
<div class="row mb-4">
    <div class="col-md-12">
        <h2>Welcome, {{ current_user.username }}!</h2>
    </div>
</div>

<div class="row mb-4">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <h5 class="card-title">Total Items</h5>
                <h2>{{ stats.total }}</h2>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card text-white bg-success">
            <div class="card-body">
                <h5 class="card-title">Completed</h5>
                <h2>{{ stats.completed }}</h2>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="card text-white bg-warning">
            <div class="card-body">
                <h5 class="card-title">Pending</h5>
                <h2>{{ stats.pending }}</h2>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h3>Your Items</h3>
            <a href="{{ url_for('create_item') }}" class="btn btn-primary">Create New Item</a>
        </div>
        
        {% if items.items %}
            {% for item in items.items %}
                <div class="card mb-3">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <div>
                                <h5 class="card-title">
                                    {% if item.completed %}
                                        <del>{{ item.title }}</del>
                                        <span class="badge bg-success">Completed</span>
                                    {% else %}
                                        {{ item.title }}
                                    {% endif %}
                                </h5>
                                <p class="card-text">{{ item.content[:100] }}{% if item.content|length > 100 %}...{% endif %}</p>
                                <small class="text-muted">
                                    Category: {{ item.category or 'None' }} | 
                                    Priority: <span class="badge bg-{% if item.priority == 'high' %}danger{% elif item.priority == 'medium' %}warning{% else %}secondary{% endif %}">{{ item.priority }}</span> |
                                    Created: {{ item.created_at.strftime('%Y-%m-%d %H:%M') }}
                                </small>
                            </div>
                            <div>
                                <a href="{{ url_for('edit_item', id=item.id) }}" class="btn btn-sm btn-outline-primary">Edit</a>
                                <form method="POST" action="{{ url_for('delete_item', id=item.id) }}" style="display:inline;">
                                    <button type="submit" class="btn btn-sm btn-outline-danger" onclick="return confirm('Are you sure?')">Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            {% endfor %}
            
            <nav>
                <ul class="pagination">
                    {% if items.has_prev %}
                        <li class="page-item"><a class="page-link" href="{{ url_for('dashboard', page=items.prev_num) }}">Previous</a></li>
                    {% endif %}
                    {% for page_num in items.iter_pages() %}
                        {% if page_num %}
                            <li class="page-item {% if page_num == items.page %}active{% endif %}">
                                <a class="page-link" href="{{ url_for('dashboard', page=page_num) }}">{{ page_num }}</a>
                            </li>
                        {% endif %}
                    {% endfor %}
                    {% if items.has_next %}
                        <li class="page-item"><a class="page-link" href="{{ url_for('dashboard', page=items.next_num) }}">Next</a></li>
                    {% endif %}
                </ul>
            </nav>
        {% else %}
            <div class="alert alert-info">
                No items yet. <a href="{{ url_for('create_item') }}">Create your first item!</a>
            </div>
        {% endif %}
    </div>
</div>
{% endblock %}
```

## Phase 6: Deployment to Heroku

### Step 1: Prepare for Deployment

**Procfile:**
```
web: gunicorn run:app
```

**requirements.txt additions:**
```
gunicorn==20.1.0
psycopg2-binary==2.9.3
```

**runtime.txt:**
```
python-3.10.0
```

### Step 2: Deploy to Heroku

```bash
# Install Heroku CLI and login
heroku login

# Create Heroku app
heroku create your-app-name

# Add PostgreSQL database
heroku addons:create heroku-postgresql:hobby-dev

# Set environment variables
heroku config:set SECRET_KEY='your-secret-key-here'

# Deploy
git add .
git commit -m "Initial deployment"
git push heroku main

# Run database migrations
heroku run flask db upgrade

# Open app
heroku open
```

## Evaluation Criteria

**Functionality (35%):**
- User registration works correctly
- Login/logout functions properly
- CRUD operations all functional
- Database persistence working
- Form validation prevents bad data

**Code Quality (25%):**
- Clean, organized code structure
- Proper use of Flask blueprints
- Good error handling
- Security best practices (password hashing, CSRF protection)
- No hardcoded credentials

**Database Design (15%):**
- Proper relationships between models
- Appropriate data types
- Indexes on frequently queried fields
- Database migrations work

**User Interface (15%):**
- Responsive Bootstrap design
- Intuitive navigation
- Flash messages for user feedback
- Form errors displayed clearly
- Professional appearance

**Deployment (10%):**
- Successfully deployed to Heroku
- Environment variables properly configured
- No deployment errors
- Database working in production

## Required Deliverables

Submit:

1. **GitHub Repository URL** containing:
   - All source code
   - requirements.txt
   - README.md with setup instructions
   - .gitignore file

2. **Live Application URL** (Heroku/PythonAnywhere)

3. **README.md** must include:
   - Project description
   - Features list
   - Technologies used
   - Local setup instructions
   - Deployment guide
   - Screenshots
   - Demo credentials for testing

4. **Demo Account:**
   - Username: demo
   - Password: Demo123!
   - (For instructor testing)

## Common Mistakes to Avoid

- Not using environment variables for secrets
- Committing database file to Git
- Missing CSRF protection on forms
- Not validating user input
- Weak password requirements
- No error handling for database operations
- Not testing all routes before deployment
- Missing requirements in requirements.txt
- Hardcoding database URLs
- Not implementing proper user authentication checks

## Bonus Features

- Profile page with editable user information
- Search functionality for items
- Categories/tags system
- File upload capability
- Email verification for registration
- Password reset functionality
- Export data to CSV/JSON
- Dark mode toggle
- API endpoints for mobile app
- Activity log/audit trail

## Testing Checklist

- [ ] User can register with valid data
- [ ] Duplicate usernames/emails are rejected
- [ ] User can login with correct credentials
- [ ] Wrong password shows error
- [ ] User can logout successfully
- [ ] Protected routes redirect to login
- [ ] User can create new items
- [ ] User can edit their own items
- [ ] User can delete their own items
- [ ] User cannot edit/delete others' items
- [ ] Pagination works correctly
- [ ] Forms show validation errors
- [ ] Flash messages appear and dismiss
- [ ] All links work correctly
- [ ] Application works on mobile
- [ ] Database changes persist after restart
- [ ] Deployment successful on Heroku
- [ ] Environment variables work in production

## Tips for Success

1. **Start Simple:** Get basic routes working before adding features
2. **Test Frequently:** Test each feature immediately after building
3. **Use Flask Shell:** Test database operations in Flask shell
4. **Read Error Messages:** Flask error pages are very helpful
5. **Version Control:** Commit after each working feature
6. **Security First:** Never commit passwords or secret keys
7. **Documentation:** Comment complex logic
8. **Mobile Testing:** Test responsive design early

This project will give you production-level full-stack development experience!