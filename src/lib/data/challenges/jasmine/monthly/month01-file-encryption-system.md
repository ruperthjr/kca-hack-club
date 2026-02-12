---
title: "File Encryption System"
description: "Design and implement a secure file encryption system with AES-256, robust key management, and user authentication in C++."
difficulty: "advanced"
unit: "Unit 2: Object Oriented Programming with C++"
week: null
month: 1
technologies:
  - "C++"
  - "OpenSSL"
  - "Cryptography"
  - "File Systems"
  - "Security"
learningOutcomes:
  - "Apply AES-256 encryption and decryption to files"
  - "Implement secure password-based key derivation (PBKDF2)"
  - "Design and manage encrypted keystores"
  - "Build user authentication and role-based access control"
  - "Enforce security best practices in C++"
estimatedTime: "10-15 hours"
requirements:
  - "C++17 compiler"
  - "OpenSSL library"
  - "Basic understanding of cryptography"
  - "Familiarity with file I/O in C++"
  - "Linux or Windows development environment"
deliverables:
  - "Working encryption/decryption engine"
  - "Key management and user authentication modules"
  - "Command-line interface"
  - "Comprehensive documentation"
  - "Security analysis report"
resources:
  - name: "OpenSSL Documentation"
    url: "https://www.openssl.org/docs/manpages.html"
  - name: "NIST SP 800-38A: Block Cipher Modes"
    url: "https://csrc.nist.gov/publications/detail/sp/800-38a/final"
  - name: "OWASP Cryptographic Storage Cheat Sheet"
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html"
  - name: "Learn C++"
    url: "https://www.learncpp.com/"
  - name: "Serious Cryptography by Jean-Philippe Aumasson"
    url: "https://nostarch.com/seriouscrypto"
completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# File Encryption System

## Overview

This challenge tasks you with building a secure file encryption system in C++. You'll implement AES-256 encryption, password-based key derivation, encrypted keystores, and user authentication—mirroring the core of real-world secure storage solutions.

## Objective

By completing this challenge, you will create a command-line tool that encrypts and decrypts files, manages cryptographic keys securely, and enforces user authentication and permissions.

## Prerequisites

- C++17 or newer
- OpenSSL installed
- Familiarity with cryptographic concepts (AES, HMAC, PBKDF2)
- Experience with file I/O and command-line tools

## Instructions

### Part 1: Encryption & Decryption Engine

- Implement AES-256-CBC encryption and decryption for files.
- Use PBKDF2 for deriving encryption keys from passwords.
- Ensure secure IV and salt generation.
- Add HMAC-SHA256 for file integrity verification.

### Part 2: Key & User Management

- Design an encrypted keystore for storing keys.
- Implement user creation, authentication (with secure password hashing), and role-based permissions.
- Add account lockout after repeated failed logins.

### Part 3: Command-Line Interface & Security

- Build a CLI for encrypting/decrypting files and managing users/keys.
- Enforce password policies (min 12 chars, complexity, no common passwords).
- Implement secure file deletion (overwrite before delete).
- Log all access and key operations for auditing.

## Deliverables

1. Source code for the encryption system
2. Command-line tool executable
3. Security analysis report (PDF/Markdown)
4. User manual and API documentation
5. Unit and integration tests

## Evaluation Criteria

| Criteria      | Weight | Description                                      |
|---------------|--------|--------------------------------------------------|
| Security      | 35%    | Correct crypto, key management, secure coding    |
| Functionality | 25%    | All features work, robust error handling         |
| Code Quality  | 20%    | Clean, maintainable, modern C++ practices        |
| Testing       | 10%    | Comprehensive unit/integration/security tests    |

## Tips & Common Mistakes

- Never hardcode keys or passwords.
- Always use secure random number generation.
- Avoid leaking sensitive info in error messages.
- Don’t reuse IVs or skip HMAC integrity checks.
- Wipe sensitive data from memory after use.

## Bonus Challenges (Optional)

1. Add RSA for key exchange or digital signatures.
2. Implement a GUI or batch directory encryption.

## Submission

Submit your code, documentation, tests, and security report as instructed by your course or platform.
