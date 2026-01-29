---
title: "Build a Complete Student Management Portal"
description: "Create a full-stack student portal with authentication, course management, and grade tracking"
difficulty: "advanced"
estimatedTime: "50-60 hours"
skills: ["Full-Stack Development", "Database Design", "Authentication", "API Development", "React/Svelte"]
recommendedFor: ["Ruperth", "Pauline", "Jasmine"]
points: 200
tags: ["full-stack", "database", "authentication", "month-1"]
prerequisites: ["JavaScript/TypeScript", "HTML/CSS", "Backend basics", "Database fundamentals"]
learningObjectives: ["Build REST APIs", "Implement authentication", "Design databases", "Create responsive UIs", "Handle file uploads"]
deliverables: ["Complete web application", "Database schema", "API documentation", "User documentation", "Deployment"]
---

# Build a Complete Student Management Portal

Create a comprehensive student portal system that allows students to view courses, submit assignments, check grades, and communicate with instructors.

## Project Overview

Build a full-stack web application with the following modules:

### Core Modules
1. Authentication System (Login/Register/Password Reset)
2. Student Dashboard
3. Course Management
4. Assignment Submission
5. Grade Tracking
6. Announcements
7. User Profile Management

### Technical Stack

**Frontend:**
- SvelteKit (or React/Next.js)
- TailwindCSS
- TypeScript

**Backend:**
- Node.js with Express
- PostgreSQL or MongoDB
- JWT Authentication
- File Upload (Multer)

**Deployment:**
- Vercel (Frontend)
- Railway/Render (Backend)
- Cloudinary (File Storage)

## Database Schema

```sql
-- PostgreSQL Schema

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    student_id VARCHAR(50) UNIQUE,
    role VARCHAR(20) DEFAULT 'student',
    profile_picture TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    course_code VARCHAR(20) UNIQUE NOT NULL,
    course_name VARCHAR(255) NOT NULL,
    description TEXT,
    instructor_id INTEGER REFERENCES users(id),
    credits INTEGER,
    semester VARCHAR(20),
    year INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES users(id),
    course_id INTEGER REFERENCES courses(id),
    enrolled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'active',
    UNIQUE(student_id, course_id)
);

CREATE TABLE assignments (
    id SERIAL PRIMARY KEY,
    course_id INTEGER REFERENCES courses(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date TIMESTAMP,
    total_points INTEGER,
    file_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE submissions (
    id SERIAL PRIMARY KEY,
    assignment_id INTEGER REFERENCES assignments(id),
    student_id INTEGER REFERENCES users(id),
    file_url TEXT,
    submission_text TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    grade DECIMAL(5,2),
    feedback TEXT,
    UNIQUE(assignment_id, student_id)
);

CREATE TABLE grades (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES users(id),
    course_id INTEGER REFERENCES courses(id),
    assignment_id INTEGER REFERENCES assignments(id),
    points_earned DECIMAL(5,2),
    points_possible INTEGER,
    letter_grade VARCHAR(2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE announcements (
    id SERIAL PRIMARY KEY,
    course_id INTEGER REFERENCES courses(id),
    title VARCHAR(255) NOT NULL,
    content TEXT,
    posted_by INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE attendance (
    id SERIAL PRIMARY KEY,
    student_id INTEGER REFERENCES users(id),
    course_id INTEGER REFERENCES courses(id),
    date DATE,
    status VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(student_id, course_id, date)
);
```

## Backend Implementation (Node.js + Express)

### Server Setup

```javascript
// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');
const assignmentRoutes = require('./routes/assignments');
const gradeRoutes = require('./routes/grades');
const announcementRoutes = require('./routes/announcements');
const userRoutes = require('./routes/users');

const app = express();

app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use('/api/', limiter);

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/grades', gradeRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/users', userRoutes);

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

### Database Connection

```javascript
// db/connection.js
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: