---
title: "FastAPI Backend with JWT Authentication and PostgreSQL"
description: "Build a production-ready REST API with authentication, migrations, and Docker deployment"
difficulty: "advanced"
unit: "Week 1 Project: Systems Analysis and Design"
week: 1
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
        - "Generate OpenAPI/Swagger docs"
        - "Containerize using Docker and Docker Compose"
estimatedTime: "12–16 hours"
requirements:
        - "Intermediate Python knowledge"
        - "Basic understanding of REST APIs"
        - "Familiarity with relational databases"
        - "Docker installed locally"
        - "GitHub account for version control"
deliverables:
        - "Production-ready FastAPI application with authentication"
        - "PostgreSQL database and Alembic migrations"
        - "Docker and docker-compose for development/production"
        - "Complete API documentation (OpenAPI/Swagger)"
        - "GitHub repository with CI/CD configuration"
resources:
    - name: "FastAPI Documentation"
      url: "https://fastapi.tiangolo.com"
    - name: "SQLAlchemy Documentation"
      url: "https://docs.sqlalchemy.org"
    - name: "Alembic Migration Guide"
      url: "https://alembic.sqlalchemy.org/en/latest/tutorial.html"
    - name: "Docker Documentation"
      url: "https://docs.docker.com"
    - name: "JWT with FastAPI"
      url: "https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# FastAPI Production Backend Project

## Summary
Create a secure, testable, and deployable REST API with FastAPI. Implement JWT authentication, persist data in PostgreSQL with SQLAlchemy and Alembic, document the API (OpenAPI), and provide Docker-based workflows for development and production.

## Goals
- Secure authentication using JWT and hashed passwords
- Well-structured code and clear separation of concerns
- Reliable migrations and production-ready Docker configuration
- Comprehensive tests, docs, and CI

## Quick Project Structure
```
backend/
├── app/
│   ├── main.py
│   ├── core/     # config, security, settings
│   ├── api/      # routers and dependencies
│   ├── models/   # SQLAlchemy models
│   ├── schemas/  # Pydantic models
│   ├── crud/     # DB operations
│   ├── db/       # session, engine
│   └── utils/
├── alembic/
├── tests/
├── docker/
├── requirements/
├── .env.example
├── docker-compose.yml
└── README.md
```

## Dependencies (example)
requirements/base.txt
```
fastapi==0.104.0
uvicorn[standard]==0.24.0
sqlalchemy==2.0.23
alembic==1.12.1
psycopg2-binary==2.9.9
pydantic==2.5.0
pydantic-settings==2.1.0
python-jose[cryptography]==3.3.0
passlib[bcrypt]==1.7.4
python-multipart==0.0.6
email-validator==2.1.0
```
requirements/dev.txt
```
-r base.txt
pytest==7.4.3
pytest-asyncio==0.21.1
httpx==0.25.1
pre-commit==3.5.0
black==23.11.0
isort==5.12.0
flake8==6.1.0
mypy==1.7.0
```

## Database Models & Migrations
Example SQLAlchemy model:
```python
# app/models/user.py
from sqlalchemy import Column, Integer, String, Boolean, DateTime
from sqlalchemy.sql import func
from .base import Base

class User(Base):
                __tablename__ = "users"
                id = Column(Integer, primary_key=True, index=True)
                email = Column(String, unique=True, index=True, nullable=False)
                username = Column(String, unique=True, index=True, nullable=False)
                full_name = Column(String, nullable=True)
                hashed_password = Column(String, nullable=False)
                is_active = Column(Boolean, default=True)
                is_superuser = Column(Boolean, default=False)
                created_at = Column(DateTime(timezone=True), server_default=func.now())
                updated_at = Column(DateTime(timezone=True), onupdate=func.now())
```

Create migrations with Alembic:
```bash
alembic init alembic
alembic revision --autogenerate -m "Create users table"
alembic upgrade head
```

## Authentication & Security
Password hashing and token creation:
```python
# app/core/security.py
from datetime import datetime, timedelta
from jose import jwt
from passlib.context import CryptContext
from app.core.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
                return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
                return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: timedelta | None = None):
                to_encode = data.copy()
                expire = datetime.utcnow() + (expires_delta or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES))
                to_encode.update({"exp": expire})
                return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
```

Dependency to resolve current user:
```python
# app/api/deps.py
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt
from app.core.config import settings
from app.crud.user import get_user_by_email

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")

async def get_current_user(token: str = Depends(oauth2_scheme)):
                credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate credentials")
                try:
                                payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
                                email: str | None = payload.get("sub")
                                if not email:
                                                raise credentials_exception
                except Exception:
                                raise credentials_exception
                user = get_user_by_email(email=email)
                if not user:
                                raise credentials_exception
                return user
```

(Note: adapt DB session injection as your project structure requires.)

## Example API Endpoints
Auth endpoints (register/login):
```python
# app/api/v1/endpoints/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from datetime import timedelta
from app.core import security
from app.crud import user as crud_user
from app.schemas.token import Token
from app.schemas.user import UserCreate, UserInDB
from app.core.config import settings

router = APIRouter()

@router.post("/register", response_model=UserInDB)
def register(user_in: UserCreate):
                existing = crud_user.get_user_by_email(user_in.email)
                if existing:
                                raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="User with this email already exists")
                return crud_user.create_user(user_in)

@router.post("/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends()):
                user = crud_user.authenticate_user(form_data.username, form_data.password)
                if not user:
                                raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Incorrect email or password")
                access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
                access_token = security.create_access_token(data={"sub": user.email}, expires_delta=access_token_expires)
                return {"access_token": access_token, "token_type": "bearer"}
```

User endpoints:
```python
# app/api/v1/endpoints/users.py
from fastapi import APIRouter, Depends
from typing import List
from app.schemas.user import UserInDB, UserUpdate
from app.crud import user as crud_user
from app.api.deps import get_current_user, get_current_active_superuser

router = APIRouter()

@router.get("/me", response_model=UserInDB)
def read_user_me(current_user = Depends(get_current_user)):
                return current_user

@router.put("/me", response_model=UserInDB)
def update_user_me(user_in: UserUpdate, current_user = Depends(get_current_user)):
                return crud_user.update_user(user_id=current_user.id, user_in=user_in)

@router.get("/", response_model=List[UserInDB])
def read_users(skip: int = 0, limit: int = 100, current_user = Depends(get_current_active_superuser)):
                return crud_user.get_users(skip=skip, limit=limit)
```

## Docker & Deployment
Dockerfile (example):
```dockerfile
FROM python:3.11-slim
WORKDIR /app
RUN apt-get update && apt-get install -y gcc postgresql-client && rm -rf /var/lib/apt/lists/*
COPY requirements/prod.txt .
RUN pip install --no-cache-dir -r prod.txt
COPY . .
RUN useradd -m -u 1000 fastapi && chown -R fastapi:fastapi /app
USER fastapi
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

docker-compose.yml (example):
```yaml
version: '3.8'
services:
        db:
                image: postgres:15
                environment:
                        POSTGRES_USER: fastapi
                        POSTGRES_PASSWORD: fastapi
                        POSTGRES_DB: fastapi_db
                volumes:
                        - postgres_data:/var/lib/postgresql/data
                ports:
                        - "5432:5432"
                healthcheck:
                        test: ["CMD-SHELL", "pg_isready -U fastapi"]
                        interval: 10s
                        timeout: 5s
                        retries: 5

        api:
                build: .
                environment:
                        DATABASE_URL: postgresql://fastapi:fastapi@db/fastapi_db
                        SECRET_KEY: ${SECRET_KEY}
                        ALGORITHM: HS256
                        ACCESS_TOKEN_EXPIRE_MINUTES: 30
                ports:
                        - "8000:8000"
                depends_on:
                        db:
                                condition: service_healthy
                command: >
                        sh -c "alembic upgrade head &&
                                                 uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload"

volumes:
        postgres_data:
```

## Testing & CI
- Write unit and integration tests (pytest, httpx, pytest-asyncio).
- Add linting, formatting, and type checks (pre-commit hooks).
- Configure GitHub Actions to run tests, linters, and build workflow on PRs.

## Evaluation Criteria
- Architecture & code quality (30%)
- Authentication & security (25%)
- Database design and migrations (20%)
- API design & documentation (15%)
- Deployment readiness & DevOps (10%)

## Recommended Deliverables
- GitHub repo with source code and README
- Docker/docker-compose for development and production
- Alembic migrations and DB schema docs
- Comprehensive tests and CI configuration
- OpenAPI/Swagger documentation
- Environment example file and secret handling guidelines

## Common Mistakes to Avoid
- Storing secrets in the repo
- Missing input validation or insufficient error handling
- Not hashing passwords or verifying tokens securely
- Ignoring DB pooling and connection management
- No logging, monitoring, or health checks

## Optional Bonuses
- Redis caching, WebSocket support, message queue integration
- API versioning, rate limiting, distributed tracing
- Monitoring with Prometheus/Grafana, end-to-end test coverage

## Tips
- Start with configuration and environment management
- Use type hints and tests early
- Keep OpenAPI docs accurate and up to date
- Automate CI/CD and include health checks for deploys

