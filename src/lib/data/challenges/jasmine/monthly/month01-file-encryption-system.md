---
title: "File Encryption System"
description: "Build a secure file encryption system with AES encryption, key management, and user permissions"
difficulty: "advanced"
unit: "Unit 2: Object Oriented Programming with C++"
month: 1
technologies:
  - "C++"
  - "Cryptography"
  - "File Systems"
  - "Security"
  - "OpenSSL"
learningOutcomes:
  - "Implement industry-standard encryption (AES-256)"
  - "Design secure key management systems"
  - "Build role-based access control"
  - "Apply security best practices"
  - "Handle binary file operations"
estimatedTime: "10-15 hours"
requirements:
  - "C++ compiler with C++17 support"
  - "OpenSSL library installed"
  - "Understanding of cryptographic concepts"
  - "Knowledge of file system operations"
  - "Familiarity with binary data handling"
deliverables:
  - "Complete encryption/decryption engine"
  - "Key management system"
  - "User authentication module"
  - "Command-line interface"
  - "Comprehensive documentation"
  - "Security analysis report"
  - "Unit tests for all components"
resources:
    - name: "OpenSSL Documentation"
      url: "https://www.openssl.org/docs/manpages.html"
    - name: "NIST SP 800-38A: Block Cipher Modes of Operation"
      url: "https://csrc.nist.gov/publications/detail/sp/800-38a/final"
    - name: "NIST SP 800-132: Password-Based Key Derivation"
      url: "https://csrc.nist.gov/publications/detail/sp/800-132/final"
    - name: "OWASP: Cryptographic Storage Cheat Sheet"
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html"
    - name: "Learn C++"
      url: "https://www.learncpp.com/"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# File Encryption System

## Project Overview

Design and implement a comprehensive file encryption system that provides secure file storage with AES-256 encryption, robust key management, user authentication, and role-based access control. This project simulates real-world security systems used in enterprise applications.

## Core Features

### 1. Encryption Engine

**Symmetric Encryption:**
- AES-256 in CBC mode
- Secure IV (Initialization Vector) generation
- PKCS7 padding
- Support for files of any size (chunked processing for large files)

**Key Derivation:**
- PBKDF2 for password-based key generation
- Configurable iteration count (minimum 100,000)
- Salt generation and storage
- Key stretching for enhanced security

### 2. Key Management

**Master Key System:**
- Secure master key generation
- Key encryption keys (KEK)
- Key rotation capabilities
- Key backup and recovery

**Key Storage:**
- Encrypted keystore file
- HSM simulation (software-based)
- Key versioning
- Secure key deletion (overwrite with random data)

### 3. User Management

**Authentication:**
- Secure password hashing (Argon2 or bcrypt)
- Multi-factor authentication preparation
- Session management
- Account lockout after failed attempts

**Authorization:**
- Role-based access control (RBAC)
- Permission levels: Admin, Power User, Read-Only
- File-level permissions
- Audit logging

### 4. File Operations

**Encryption:**
- Encrypt single files
- Batch encryption
- Directory encryption
- Progress tracking for large files

**Decryption:**
- Authenticated decryption
- Permission verification
- Integrity checking (HMAC)
- Automatic backup before decryption

### 5. Security Features

**Integrity:**
- HMAC-SHA256 for file integrity
- Metadata protection
- Tamper detection
- Checksum verification

**Audit:**
- Comprehensive logging
- Encryption/decryption history
- Access attempts (successful and failed)
- Key usage tracking

## Technical Architecture

### Class Structure

```cpp
// Encryption Core
class EncryptionEngine {
private:
    static const int KEY_SIZE = 32; // 256 bits
    static const int IV_SIZE = 16;  // 128 bits
    static const int SALT_SIZE = 16;
    
public:
    vector<unsigned char> encrypt(
        const vector<unsigned char>& plaintext,
        const vector<unsigned char>& key,
        vector<unsigned char>& iv
    );
    
    vector<unsigned char> decrypt(
        const vector<unsigned char>& ciphertext,
        const vector<unsigned char>& key,
        const vector<unsigned char>& iv
    );
    
    vector<unsigned char> deriveKey(
        const string& password,
        const vector<unsigned char>& salt,
        int iterations = 100000
    );
};

// Key Management
class KeyManager {
private:
    map<string, vector<unsigned char>> keyStore;
    vector<unsigned char> masterKey;
    string keystoreFile;
    
public:
    bool generateMasterKey();
    bool storeKey(const string& keyId, 
                  const vector<unsigned char>& key);
    bool retrieveKey(const string& keyId, 
                     vector<unsigned char>& key);
    bool rotateKeys();
    bool backupKeystore(const string& backupPath);
    bool deleteKey(const string& keyId);
};

// User Authentication
class UserManager {
private:
    struct User {
        string username;
        string passwordHash;
        string role;
        bool isLocked;
        int failedAttempts;
        time_t lastLogin;
    };
    
    map<string, User> users;
    
public:
    bool createUser(const string& username,
                   const string& password,
                   const string& role);
    bool authenticate(const string& username,
                     const string& password);
    bool hasPermission(const string& username,
                      const string& resource,
                      const string& action);
    void lockAccount(const string& username);
};

// File Handler
class SecureFileHandler {
private:
    EncryptionEngine engine;
    KeyManager keyManager;
    
public:
    bool encryptFile(const string& inputPath,
                    const string& outputPath,
                    const string& password);
    bool decryptFile(const string& inputPath,
                    const string& outputPath,
                    const string& password);
    bool verifyIntegrity(const string& filePath);
    vector<unsigned char> computeHMAC(
        const vector<unsigned char>& data,
        const vector<unsigned char>& key
    );
};

// Audit Logger
class AuditLog {
private:
    string logFile;
    
public:
    void logEncryption(const string& user,
                      const string& file,
                      bool success);
    void logDecryption(const string& user,
                      const string& file,
                      bool success);
    void logAuthAttempt(const string& user,
                       bool success);
    void logKeyOperation(const string& operation,
                        const string& keyId);
};
```

### File Format Specification

**Encrypted File Structure:**
```
[Header: 256 bytes]
  - Magic Number: "SECF" (4 bytes)
  - Version: 1 (2 bytes)
  - Algorithm: "AES-256-CBC" (16 bytes)
  - IV: (16 bytes)
  - Salt: (16 bytes)
  - HMAC: (32 bytes)
  - Metadata Length: (4 bytes)
  - Reserved: (166 bytes)

[Encrypted Metadata: variable]
  - Original filename
  - File size
  - Timestamp
  - Owner
  - Permissions

[Encrypted Data: variable]
  - File contents

[Footer: 32 bytes]
  - Checksum: (32 bytes)
```


## Command-Line Interface

```bash
# Encrypt a file
./secure-file encrypt input.txt -o encrypted.sec -p password123

# Decrypt a file
./secure-file decrypt encrypted.sec -o output.txt -p password123

# Batch encrypt directory
./secure-file encrypt-dir /path/to/dir -o /encrypted/dir -p password123

# User management
./secure-file user create alice admin
./secure-file user list
./secure-file user delete bob

# Key operations
./secure-file key generate master-key
./secure-file key rotate
./secure-file key backup /backup/path

# Audit
./secure-file audit show --user alice
./secure-file audit export audit.log
```

## Security Requirements

### Must Implement:
1. **No hardcoded keys or passwords**
2. **Secure random number generation** (use /dev/urandom or CryptGenRandom)
3. **Memory wiping** for sensitive data
4. **Constant-time comparison** for HMAC verification
5. **Proper error handling** without information leakage
6. **Input validation** for all user inputs
7. **Secure file deletion** (overwrite before delete)

### Password Policy:
- Minimum 12 characters
- Mix of uppercase, lowercase, numbers, symbols
- No common passwords (check against dictionary)
- Password strength meter

## Testing Requirements

### Unit Tests

```cpp
// Test encryption/decryption round-trip
TEST(EncryptionEngine, RoundTrip) {
    EncryptionEngine engine;
    vector<unsigned char> plaintext = {'H','e','l','l','o'};
    vector<unsigned char> key(32, 0x42);
    vector<unsigned char> iv;
    
    auto ciphertext = engine.encrypt(plaintext, key, iv);
    auto decrypted = engine.decrypt(ciphertext, key, iv);
    
    ASSERT_EQ(plaintext, decrypted);
}

// Test key derivation
TEST(EncryptionEngine, KeyDerivation) {
    EncryptionEngine engine;
    string password = "test_password";
    vector<unsigned char> salt(16, 0x00);
    
    auto key1 = engine.deriveKey(password, salt);
    auto key2 = engine.deriveKey(password, salt);
    
    ASSERT_EQ(key1, key2); // Same input = same output
    ASSERT_EQ(key1.size(), 32); // 256 bits
}

// Test HMAC integrity
TEST(SecureFileHandler, IntegrityCheck) {
    SecureFileHandler handler;
    // Encrypt file
    handler.encryptFile("test.txt", "test.enc", "password");
    
    // Verify integrity
    ASSERT_TRUE(handler.verifyIntegrity("test.enc"));
    
    // Tamper with file
    // ... modify file contents ...
    
    // Verification should fail
    ASSERT_FALSE(handler.verifyIntegrity("test.enc"));
}
```

### Integration Tests
- Encrypt large files (>1GB)
- Concurrent access scenarios
- Key rotation during active use
- System recovery after crash
- Permission enforcement

## Performance Benchmarks

Measure and document:
- Encryption speed (MB/s)
- Decryption speed (MB/s)
- Key derivation time
- Memory usage
- CPU utilization

Target performance:
- Encrypt/decrypt at least 50 MB/s on modern hardware
- Handle files up to 10 GB
- Key derivation under 1 second
- Memory footprint under 100 MB

## Security Analysis Report

Your submission must include a report covering:

1. **Threat Model**
   - Identified threats
   - Attack vectors
   - Mitigation strategies

2. **Cryptographic Choices**
   - Why AES-256?
   - Why CBC mode?
   - Why PBKDF2?
   - Alternatives considered

3. **Known Vulnerabilities**
   - Side-channel attacks
   - Timing attacks
   - Limitations

4. **Security Assumptions**
   - Trust boundaries
   - System dependencies
   - User responsibilities

## Advanced Features (Optional)

- **Public Key Cryptography:** Add RSA for key exchange
- **Digital Signatures:** Sign encrypted files
- **Key Escrow:** Enterprise key recovery
- **Hardware Security:** Interface with TPM/HSM
- **Steganography:** Hide encrypted data in images
- **Multi-user Encryption:** Different keys for different users
- **Compression:** Compress before encryption
- **GUI:** Build a graphical interface

## Evaluation Criteria

1. **Security** (35%)
   - Correct cryptographic implementation
   - No security vulnerabilities
   - Proper key management
   - Secure coding practices

2. **Functionality** (25%)
   - All features work correctly
   - Error handling is robust
   - Performance meets targets

3. **Code Quality** (20%)
   - Clean, maintainable code
   - Proper abstraction
   - Good documentation
   - RAII and modern C++ practices

4. **Testing** (10%)
   - Comprehensive unit tests
   - Integration test coverage
   - Security testing

5. **Documentation** (10%)
   - Clear usage guide
   - API documentation
   - Security analysis
   - Design decisions explained

## Submission Checklist

- [ ] Complete source code
- [ ] Build system (CMake or Makefile)
- [ ] Unit tests (Google Test or Catch2)
- [ ] Security analysis report (PDF)
- [ ] User manual (Markdown)
- [ ] API documentation (Doxygen)
- [ ] Demo video (optional but recommended)
- [ ] Benchmark results
- [ ] Known issues list

## Resources for Deep Dive

- **Books:**
  - "Cryptography Engineering" by Ferguson, Schneier, Kohno
  - "Serious Cryptography" by Aumasson
  
- **Standards:**
  - NIST SP 800-38A (Block Cipher Modes)
  - NIST SP 800-132 (Password-Based Key Derivation)
  
- **Tools:**
  - Valgrind for memory leak detection
  - AddressSanitizer for memory errors
  - Cryptol for cryptographic specification

## Tips for Success

1. **Start Small:** Get basic encryption working first
2. **Use Libraries:** Don't implement crypto primitives from scratch
3. **Test Continuously:** Write tests as you go
4. **Read Standards:** Follow NIST guidelines
5. **Peer Review:** Have someone review your security design
6. **Version Control:** Commit often with clear messages
7. **Memory Safety:** Use smart pointers and RAII
8. **Timing Attacks:** Use constant-time operations for crypto

## Common Pitfalls

- ECB mode (never use this!)
- Weak key derivation
- Reusing IVs
- Not authenticating ciphertext
- Leaking secrets in error messages
- Not clearing sensitive memory
- Trusting user input
- Ignoring side-channel attacks

This is a challenging project that will significantly enhance your understanding of security, cryptography, and system design. Take your time, ask questions, and prioritize security above all else.

Good luck!