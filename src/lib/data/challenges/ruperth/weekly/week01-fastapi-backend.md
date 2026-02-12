---
title: "FastAPI Backend with JWT Authentication and PostgreSQL"
description: "Build a production-ready REST API with JWT auth, SQLAlchemy + Alembic migrations, and Docker deployment."
difficulty: "advanced"
unit: "Week 1 Project: Systems Analysis and Design"
day: null
week: 1
month: 1
technologies:
        - "FastAPI"
        - "Python"
        - "PostgreSQL"
        - "Docker"
        - "JWT Authentication"
learningOutcomes:
        - "Design and implement RESTful APIs with FastAPI"
        - "Implement JWT authentication and authorization"
        - "Use SQLAlchemy with Alembic for migrations"
        - "Generate and maintain OpenAPI/Swagger documentation"
        - "Containerize and deploy with Docker and docker-compose"
estimatedTime: "12–16 hours"
requirements:
        - "Intermediate Python knowledge"
        - "Basic understanding of REST APIs"
        - "Familiarity with relational databases (PostgreSQL)"
        - "Docker and docker-compose installed locally"
        - "Git and GitHub account"
deliverables:
        - "Production-ready FastAPI application with JWT authentication"
        - "Alembic migrations and PostgreSQL schema"
        - "Dockerfile and docker-compose for development/production"
        - "OpenAPI/Swagger documentation and test suite"
        - "GitHub repository with CI configuration"
resources:
  - name: "FastAPI Documentation"
    url: "https://fastapi.tiangolo.com"
  - name: "SQLAlchemy Documentation"
    url: "https://docs.sqlalchemy.org"
  - name: "Alembic Migration Guide"
    url: "https://alembic.sqlalchemy.org/en/latest/tutorial.html"
  - name: "JWT with FastAPI"
    url: "https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-12"
unlockDate: "2026-02-12"
---

# FastAPI Production Backend Project

## Overview

Build a secure, well-structured REST API using FastAPI with JWT authentication, persistent storage in PostgreSQL via SQLAlchemy, reliable schema migrations with Alembic, automated tests, and Docker-based development and production workflows.

## Objective

Implement a production-ready backend that supports user registration, login (JWT), protected endpoints, database migrations, OpenAPI docs, containerization, and CI testing.

## Prerequisites

- Python 3.10+ and pip
- Docker and docker-compose
- Basic SQL and REST API knowledge
- GitHub account for repository and CI

## Instructions

### Part 1: Project setup and core services

1. Create project layout and virtual environment.
         - Create folders: app/{core,api,models,schemas,crud,db,utils}, alembic, tests, docker.
2. Install dependencies and environment variables.
         - Use requirements files for base and dev.
         - Add `.env.example` with DATABASE_URL, SECRET_KEY, ALGORITHM, ACCESS_TOKEN_EXPIRE_MINUTES.
3. Configure settings and database session.
         - Centralize config in `app/core/config.py` (pydantic settings).
         - Create SQLAlchemy engine and session factory in `app/db/session.py`.

### Part 2: Models, schemas, migrations, and auth

1. Implement User model (SQLAlchemy) and Pydantic schemas for create/read/update.
2. Add password hashing and JWT helpers.
         - Use passlib for hashing and python-jose for JWT creation/validation.
3. CRUD layer and authentication logic.
         - Add `create_user`, `get_user_by_email`, `authenticate_user`.
4. Dependency and route protection.
         - Implement OAuth2PasswordBearer dependency and `get_current_user`.
5. Alembic migrations.
         - Initialize Alembic, configure target metadata, create and run migrations:
                 - `alembic revision --autogenerate -m "create users table"`
                 - `alembic upgrade head`

### Part 3: API endpoints, docs, tests, and Docker

1. Implement API routes:
         - Auth: `/api/v1/auth/register`, `/api/v1/auth/login`
         - Users: `/api/v1/users/me`, `/api/v1/users/` (admin)
2. Generate and verify OpenAPI docs (FastAPI does this automatically).
3. Write tests:
         - Unit tests for CRUD and utils, integration tests for endpoints using httpx + pytest-asyncio.
4. Containerize and orchestrate:
         - Provide production-ready Dockerfile and `docker-compose.yml` with a `db` service and `api` service that runs migrations before start.
5. CI:
         - Add GitHub Actions to run lint, format, type checks, and tests on PRs.

## Deliverables

1. Git repository containing the full source tree and README.
2. Running API with documented endpoints and PostgreSQL schema (via migrations).
3. Test suite with passing tests and CI configured.
4. Dockerfile and docker-compose for local dev and production.
5. .env.example and deployment notes.

## Evaluation Criteria

| Criteria | Weight | Description |
|---------|--------:|-------------|
| Architecture & code quality | 30% | Clear structure, separation of concerns, type hints, tests |
| Authentication & security | 25% | Correct password hashing, JWT handling, protected routes |
| Database design & migrations | 20% | Proper models, migrations, and reliable schema updates |
| API design & documentation | 15% | Consistent REST design, OpenAPI completeness |
| Deployment & DevOps readiness | 10% | Docker, docker-compose, CI pipeline |

## Tips & Common Mistakes

- Keep secrets out of the repository; use environment variables.
- Always hash passwords and validate token expiry and claims.
- Add input validation with Pydantic models to prevent malformed data.
- Ensure Alembic is configured to import the same metadata used by the app.
- Add health checks and readiness probes for production deployments.

## Bonus Challenges (Optional)

1. Add role-based access control and refresh tokens with secure rotation.
2. Integrate Redis for caching sessions or rate limiting and add end-to-end tests.

## Submission

Push your solution to a public GitHub repository. Include a README with setup and run instructions, example .env, and the link to the running deployment or a demo GIF. Create a pull request or share the repository link for evaluation.
