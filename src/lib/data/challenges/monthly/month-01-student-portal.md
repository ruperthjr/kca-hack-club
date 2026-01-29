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

## Backend API Endpoints

### Authentication Routes
POST /api/auth/register - Register new user
POST /api/auth/login - Login user
POST /api/auth/logout - Logout user
POST /api/auth/refresh - Refresh access token
POST /api/auth/forgot-password - Send password reset email
POST /api/auth/reset-password - Reset password
GET /api/auth/me - Get current user

### Course Routes
GET /api/courses - Get all courses
GET /api/courses/:id - Get course by ID
POST /api/courses - Create new course (admin/instructor)
PUT /api/courses/:id - Update course (admin/instructor)
DELETE /api/courses/:id - Delete course (admin)
GET /api/courses/:id/students - Get enrolled students
POST /api/courses/:id/enroll - Enroll in course

### Assignment Routes
GET /api/assignments - Get all assignments
GET /api/assignments/:id - Get assignment by ID
POST /api/assignments - Create assignment (instructor)
PUT /api/assignments/:id - Update assignment (instructor)
DELETE /api/assignments/:id - Delete assignment (instructor)
POST /api/assignments/:id/submit - Submit assignment
GET /api/assignments/:id/submissions - Get all submissions (instructor)

### Grade Routes
GET /api/grades/student/:id - Get student grades
GET /api/grades/course/:id - Get course grades
POST /api/grades - Create/update grade (instructor)
GET /api/grades/summary/:studentId - Get grade summary

### Announcement Routes
GET /api/announcements - Get all announcements
GET /api/announcements/:id - Get announcement by ID
POST /api/announcements - Create announcement (instructor)
PUT /api/announcements/:id - Update announcement (instructor)
DELETE /api/announcements/:id - Delete announcement (instructor)

## Frontend Features

### 1. Authentication Pages

**Login Page:**
- Email and password fields
- Remember me checkbox
- Forgot password link
- Form validation
- Error handling
- Loading states

**Register Page:**
- Full name, email, password, student ID
- Password confirmation
- Terms and conditions checkbox
- Form validation
- Success redirect

**Password Reset:**
- Email submission form
- Reset token validation
- New password form

### 2. Student Dashboard

**Overview Cards:**
- Total courses enrolled
- Pending assignments
- Average GPA
- Attendance percentage

**Quick Actions:**
- View upcoming assignments
- Check recent announcements
- Access course materials
- View schedule

**Recent Activity:**
- Latest grades received
- New announcements
- Upcoming deadlines

### 3. Course Management

**Course List:**
- Grid/list view toggle
- Search and filter
- Course cards with:
  - Course code and name
  - Instructor name
  - Credits
  - Enrollment status

**Course Detail Page:**
- Course information
- Syllabus
- Announcements list
- Assignment list
- Enrolled students
- Course materials
- Attendance records

### 4. Assignment Submission

**Assignment List:**
- Filter by course
- Sort by due date
- Status indicators (submitted, pending, graded)
- Search functionality

**Assignment Detail:**
- Full description
- Due date countdown
- Attached files
- Submission form
- File upload
- Previous submissions history

**Submission Interface:**
- File upload (drag-and-drop)
- Text editor for written submissions
- Multiple file support
- Preview before submit
- Confirmation dialog

### 5. Grade Tracking

**Grades Overview:**
- Overall GPA display
- Grade chart/graph
- Course-wise breakdown
- Semester comparison

**Detailed Grades:**
- Table view with:
  - Course name
  - Assignment name
  - Points earned/possible
  - Percentage
  - Letter grade
  - Feedback

**Grade Analytics:**
- Performance trends
- Comparison with class average
- Strengths and weaknesses analysis

### 6. Profile Management

**View Profile:**
- Profile picture
- Personal information
- Contact details
- Academic information

**Edit Profile:**
- Update personal info
- Change profile picture
- Update password
- Manage notifications

## Technical Implementation

### Frontend Components Structure
src/
├── components/
│   ├── auth/
│   │   ├── LoginForm.svelte
│   │   ├── RegisterForm.svelte
│   │   └── ResetPasswordForm.svelte
│   ├── dashboard/
│   │   ├── StatCard.svelte
│   │   ├── QuickActions.svelte
│   │   └── RecentActivity.svelte
│   ├── courses/
│   │   ├── CourseCard.svelte
│   │   ├── CourseList.svelte
│   │   └── CourseDetail.svelte
│   ├── assignments/
│   │   ├── AssignmentCard.svelte
│   │   ├── AssignmentList.svelte
│   │   ├── SubmissionForm.svelte
│   │   └── FileUpload.svelte
│   ├── grades/
│   │   ├── GradeTable.svelte
│   │   ├── GradeChart.svelte
│   │   └── GradeSummary.svelte
│   └── common/
│       ├── Navbar.svelte
│       ├── Sidebar.svelte
│       ├── Modal.svelte
│       └── LoadingSpinner.svelte
├── routes/
│   ├── +layout.svelte
│   ├── +page.svelte
│   ├── auth/
│   ├── dashboard/
│   ├── courses/
│   ├── assignments/
│   ├── grades/
│   └── profile/
├── lib/
│   ├── api/
│   ├── stores/
│   ├── utils/
│   └── types/
└── app.css

### Backend Structure
server/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── multer.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validation.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── courses.js
│   │   ├── assignments.js
│   │   ├── grades.js
│   │   ├── announcements.js
│   │   └── users.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── courseController.js
│   │   ├── assignmentController.js
│   │   ├── gradeController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Course.js
│   │   ├── Assignment.js
│   │   └── Grade.js
│   ├── utils/
│   │   ├── jwt.js
│   │   ├── email.js
│   │   └── upload.js
│   └── server.js
├── package.json
└── .env.example

## Security Considerations

### Authentication
- Use bcrypt for password hashing (salt rounds: 10+)
- Implement JWT with access and refresh tokens
- Set secure HTTP-only cookies
- Implement CSRF protection
- Rate limit authentication endpoints

### Authorization
- Role-based access control (RBAC)
- Verify user permissions on every request
- Implement middleware for protected routes
- Validate student-course enrollment

### Data Protection
- Sanitize all user inputs
- Use parameterized queries (prevent SQL injection)
- Implement file type and size validation
- Encrypt sensitive data at rest
- Use HTTPS in production

### File Uploads
- Validate file types (whitelist)
- Set maximum file size (10MB)
- Scan files for malware
- Use secure file naming
- Store files outside web root

## Testing Strategy

### Unit Tests
- Test individual functions
- Mock external dependencies
- Test edge cases
- Aim for 80%+ coverage

### Integration Tests
- Test API endpoints
- Test database operations
- Test authentication flows
- Test file uploads

### E2E Tests
- Test complete user flows
- Test form submissions
- Test navigation
- Test error scenarios

## Deployment Guide

### Frontend Deployment (Vercel)
1. Connect GitHub repository
2. Configure build settings
3. Set environment variables
4. Deploy and test

### Backend Deployment (Railway)
1. Create new project
2. Connect GitHub repository
3. Add PostgreSQL database
4. Set environment variables
5. Deploy and monitor

### Database Deployment
1. Create production database
2. Run migrations
3. Seed initial data
4. Set up backups
5. Configure connection pooling

### File Storage (Cloudinary)
1. Create account
2. Get API credentials
3. Configure SDK
4. Set up upload presets
5. Implement CDN delivery

## Documentation Requirements

### Technical Documentation
- Architecture overview
- API documentation (Swagger/OpenAPI)
- Database schema diagram
- Setup instructions
- Environment variables guide

### User Documentation
- User manual
- FAQ section
- Video tutorials
- Troubleshooting guide

### Code Documentation
- JSDoc comments
- README files
- Inline comments
- Code examples

## Evaluation Criteria

### Functionality (40%)
- All core features working
- No critical bugs
- Good error handling
- Smooth user experience

### Code Quality (25%)
- Clean, readable code
- Proper structure
- DRY principles
- Best practices followed

### Design (15%)
- Professional appearance
- Responsive design
- Good UX
- Accessibility

### Documentation (10%)
- Complete technical docs
- User documentation
- Code comments
- Setup guide

### Security (10%)
- Authentication implemented
- Authorization working
- Input validation
- Secure file handling

## Bonus Features

**Easy:**
- Email notifications
- Dark mode
- Export grades to PDF
- Calendar integration

**Medium:**
- Real-time chat
- Collaborative notes
- Video lectures integration
- Mobile app

**Hard:**
- AI-powered study recommendations
- Plagiarism detection
- Virtual classroom
- Advanced analytics dashboard

## Resources

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Express.js Guide](https://expressjs.com/)
- [PostgreSQL Tutorial](https://www.postgresql.org/docs/)
- [JWT Authentication](https://jwt.io/introduction)
- [Multer File Upload](https://github.com/expressjs/multer)
- [Cloudinary SDK](https://cloudinary.com/documentation)

## Timeline Suggestion

**Week 1-2:** Database design, backend setup, authentication
**Week 3-4:** Core API endpoints, frontend setup, authentication UI
**Week 5-6:** Course and assignment features
**Week 7-8:** Grades, announcements, testing, deployment

## Submission Requirements

1. GitHub repository with complete code
2. Live demo URL (frontend and backend)
3. README with setup instructions
4. API documentation
5. User manual
6. Video demonstration (5-10 minutes)
7. Project report documenting challenges and solutions