---
title: "CLI-Based File Encryption Tool (Caesar Cipher)"
description: "Build a C++ command-line encryption/decryption tool with file I/O and error handling"
difficulty: "intermediate"
unit: "Week 1 Project: Object Oriented Programming with C++"
week: 1
technologies:
    - "C++"
    - "File I/O"
    - "Command-line Interface"
    - "Encryption Algorithms"
    - "Error Handling"
learningOutcomes:
    - "Implement Caesar cipher encryption algorithm in C++"
    - "Handle file input/output operations with error checking"
    - "Create command-line interface with argument parsing"
    - "Apply object-oriented principles to encryption tool"
    - "Implement comprehensive error handling and validation"
estimatedTime: "8-10 hours"
requirements:
    - "Basic C++ programming knowledge"
    - "Understanding of functions and classes"
    - "Familiarity with command-line usage"
    - "C++ compiler (g++ recommended)"
    - "GitHub account for version control"
deliverables:
    - "C++ program with Caesar cipher implementation"
    - "Command-line interface with encryption/decryption options"
    - "File I/O capabilities for text files"
    - "Comprehensive error handling and validation"
    - "GitHub repository with documentation and examples"
resources:
    - name: "C++ Reference for Standard Library"
      url: "https://en.cppreference.com/w/"
      description: "Comprehensive reference for the C++ language and standard library, including fstream for file I/O."
    - name: "Parsing Command-Line Arguments in C++"
      url: "https://www.geeksforgeeks.org/command-line-arguments-in-c-cpp/"
      description: "A guide on how to handle command-line arguments using argc and argv."
    - name: "The Caesar Cipher Algorithm"
      url: "https://www.geeksforgeeks.org/caesar-cipher/"
      description: "Detailed explanation of the Caesar cipher encryption and decryption algorithm."
    - name: "A Simple Makefile Tutorial"
      url: "https://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/"
      description: "An introductory tutorial on writing Makefiles for compiling C++ projects."
    - name: "Object-Oriented Programming in C++"
      url: "https://www.learncpp.com/cpp-tutorial/introduction-to-object-oriented-programming/"
      description: "An introduction to the core concepts of object-oriented programming (OOP) in C++."
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Caesar Cipher Encryption Tool Project

## Overview

Develop a robust command-line encryption tool in C++ that implements the Caesar cipher algorithm for file encryption and decryption. This project focuses on file I/O operations, error handling, and creating a user-friendly command-line interface.

## Objective

Create a C++ program that can encrypt and decrypt text files using the Caesar cipher algorithm. The tool should support various operations through command-line arguments, handle errors gracefully, and provide clear feedback to users.

## Instructions

### Phase 1: Project Structure and Design

**Project Structure:**

```text
caesar-cipher/
├── src/
│   ├── main.cpp
│   ├── CaesarCipher.cpp
│   ├── CaesarCipher.h
│   ├── FileHandler.cpp
│   ├── FileHandler.h
│   ├── CLIHandler.cpp
│   ├── CLIHandler.h
│   ├── Utilities.cpp
│   └── Utilities.h
├── tests/
│   ├── test_caesar.cpp
│   └── test_files.cpp
├── examples/
│   ├── input.txt
│   ├── encrypted.txt
│   └── decrypted.txt
├── Makefile
├── README.md
└── .gitignore
```

**Class Design:**

1.  **`CaesarCipher` Class:** Core encryption/decryption logic
2.  **`FileHandler` Class:** File input/output operations
3.  **`CLIHandler` Class:** Command-line argument parsing
4.  **`Utilities` Class:** Helper functions and constants

**Makefile:**

```makefile
CXX = g++
CXXFLAGS = -Wall -Wextra -std=c++17 -O2
TARGET = caesar_cipher
SOURCES = src/main.cpp src/CaesarCipher.cpp src/FileHandler.cpp src/CLIHandler.cpp src/Utilities.cpp
HEADERS = src/CaesarCipher.h src/FileHandler.h src/CLIHandler.h src/Utilities.h

$(TARGET): $(SOURCES) $(HEADERS)
    $(CXX) $(CXXFLAGS) -o $(TARGET) $(SOURCES)

debug: CXXFLAGS += -g -DDEBUG
debug: $(TARGET)

test: $(TARGET)
    ./$(TARGET) --test

clean:
    rm -f $(TARGET) *.o test_output.txt

.PHONY: clean test debug
```

### Phase 2: Caesar Cipher Implementation

**`CaesarCipher` Class Header:**

```cpp
// CaesarCipher.h
#ifndef CAESARCIPHER_H
#define CAESARCIPHER_H

#include <string>
#include <stdexcept>

class CaesarCipher {
private:
        int shift;
        
        // Helper methods
        char encryptChar(char c) const;
        char decryptChar(char c) const;
        bool isAlpha(char c) const;
        bool isUpper(char c) const;
        bool isLower(char c) const;
        
public:
        // Constructor with validation
        CaesarCipher(int shift = 3);
        
        // Getters and setters
        int getShift() const;
        void setShift(int newShift);
        
        // Core encryption/decryption methods
        std::string encrypt(const std::string& plaintext) const;
        std::string decrypt(const std::string& ciphertext) const;
        
        // Batch operations
        std::string encryptFileContent(const std::string& content) const;
        std::string decryptFileContent(const std::string& content) const;
        
        // Validation
        static bool isValidShift(int shift);
};

#endif // CAESARCIPHER_H
```

**`CaesarCipher` Implementation:**

```cpp
// CaesarCipher.cpp
#include "CaesarCipher.h"
#include <cctype>
#include <algorithm>

CaesarCipher::CaesarCipher(int shift) {
        if (!isValidShift(shift)) {
                throw std::invalid_argument("Shift must be between 0 and 25");
        }
        this->shift = shift;
}

bool CaesarCipher::isAlpha(char c) const {
        return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z');
}

bool CaesarCipher::isUpper(char c) const {
        return c >= 'A' && c <= 'Z';
}

bool CaesarCipher::isLower(char c) const {
        return c >= 'a' && c <= 'z';
}

char CaesarCipher::encryptChar(char c) const {
        if (!isAlpha(c)) {
                return c; // Non-alphabetic characters remain unchanged
        }
        
        char base = isUpper(c) ? 'A' : 'a';
        return static_cast<char>((c - base + shift) % 26 + base);
}

char CaesarCipher::decryptChar(char c) const {
        if (!isAlpha(c)) {
                return c; // Non-alphabetic characters remain unchanged
        }
        
        char base = isUpper(c) ? 'A' : 'a';
        // Add 26 before modulo to handle negative values
        return static_cast<char>((c - base - shift + 26) % 26 + base);
}

std::string CaesarCipher::encrypt(const std::string& plaintext) const {
        std::string ciphertext;
        ciphertext.reserve(plaintext.length());
        
        for (char c : plaintext) {
                ciphertext += encryptChar(c);
        }
        
        return ciphertext;
}

std::string CaesarCipher::decrypt(const std::string& ciphertext) const {
        std::string plaintext;
        plaintext.reserve(ciphertext.length());
        
        for (char c : ciphertext) {
                plaintext += decryptChar(c);
        }
        
        return plaintext;
}

std::string CaesarCipher::encryptFileContent(const std::string& content) const {
        return encrypt(content);
}

std::string CaesarCipher::decryptFileContent(const std::string& content) const {
        return decrypt(content);
}

int CaesarCipher::getShift() const {
        return shift;
}

void CaesarCipher::setShift(int newShift) {
        if (!isValidShift(newShift)) {
                throw std::invalid_argument("Shift must be between 0 and 25");
        }
        shift = newShift;
}

bool CaesarCipher::isValidShift(int shift) {
        return shift >= 0 && shift <= 25;
}
```

### Phase 3: File Handler Implementation

**`FileHandler` Class:**

```cpp
// FileHandler.h
#ifndef FILEHANDLER_H
#define FILEHANDLER_H

#include <string>
#include <fstream>
#include <vector>

class FileHandler {
private:
        std::string filename;
        
        // Helper methods
        bool fileExists(const std::string& filename) const;
        bool isReadable(const std::string& filename) const;
        bool isWritable(const std::string& filename) const;
        std::string getFileExtension(const std::string& filename) const;
        
public:
        FileHandler() = default;
        explicit FileHandler(const std::string& filename);
        
        // File operations
        std::string readFile() const;
        void writeFile(const std::string& content) const;
        void appendToFile(const std::string& content) const;
        
        // Batch operations
        std::vector<std::string> readLines() const;
        void writeLines(const std::vector<std::string>& lines) const;
        
        // File information
        size_t getFileSize() const;
        std::string getFilename() const;
        void setFilename(const std::string& newFilename);
        
        // Static utility methods
        static bool isValidFilename(const std::string& filename);
        static std::string generateOutputFilename(const std::string& inputFilename, 
                                                                                         const std::string& suffix);
        
        // Error handling
        class FileException : public std::runtime_error {
        public:
                explicit FileException(const std::string& message) 
                        : std::runtime_error(message) {}
        };
};

#endif // FILEHANDLER_H
```

**`FileHandler` Implementation:**

```cpp
// FileHandler.cpp
#include "FileHandler.h"
#include <sys/stat.h>
#include <cstring>
#include <algorithm>

#ifdef _WIN32
#include <io.h>
#define access _access
#define R_OK 4
#define W_OK 2
#else
#include <unistd.h>
#endif

FileHandler::FileHandler(const std::string& filename) {
        if (!isValidFilename(filename)) {
                throw FileException("Invalid filename: " + filename);
        }
        this->filename = filename;
}

bool FileHandler::fileExists(const std::string& filename) const {
        struct stat buffer;
        return (stat(filename.c_str(), &buffer) == 0);
}

bool FileHandler::isReadable(const std::string& filename) const {
        return (access(filename.c_str(), R_OK) == 0);
}

bool FileHandler::isWritable(const std::string& filename) const {
        // Check if file exists and is writable, or if directory is writable
        if (fileExists(filename)) {
                return (access(filename.c_str(), W_OK) == 0);
        } else {
                // Check if directory is writable for new file
                size_t pos = filename.find_last_of("/\\");
                if (pos == std::string::npos) {
                        return true; // Current directory
                }
                std::string dir = filename.substr(0, pos);
                return (access(dir.c_str(), W_OK) == 0);
        }
}

std::string FileHandler::readFile() const {
        if (!fileExists(filename)) {
                throw FileException("File does not exist: " + filename);
        }
        
        if (!isReadable(filename)) {
                throw FileException("File is not readable: " + filename);
        }
        
        std::ifstream file(filename, std::ios::binary);
        if (!file.is_open()) {
                throw FileException("Cannot open file for reading: " + filename);
        }
        
        // Get file size
        file.seekg(0, std::ios::end);
        size_t size = file.tellg();
        file.seekg(0, std::ios::beg);
        
        // Read file content
        std::string content(size, '\0');
        file.read(&content[0], size);
        
        if (!file) {
                throw FileException("Error reading file: " + filename);
        }
        
        file.close();
        return content;
}

void FileHandler::writeFile(const std::string& content) const {
        if (!isWritable(filename)) {
                throw FileException("Cannot write to file: " + filename);
        }
        
        std::ofstream file(filename, std::ios::binary);
        if (!file.is_open()) {
                throw FileException("Cannot open file for writing: " + filename);
        }
        
        file.write(content.c_str(), content.size());
        
        if (!file) {
                throw FileException("Error writing to file: " + filename);
        }
        
        file.close();
}

// ... Additional implementation methods
```

### Phase 4: Command-Line Interface

**`CLIHandler` Class:**

```cpp
// CLIHandler.h
#ifndef CLIHANDLER_H
#define CLIHANDLER_H

#include <string>
#include <vector>
#include <map>

enum class OperationMode {
        ENCRYPT,
        DECRYPT,
        BRUTE_FORCE,
        HELP,
        VERSION,
        TEST,
        UNKNOWN
};

struct CLIArguments {
        OperationMode mode;
        std::string inputFile;
        std::string outputFile;
        int shift;
        bool verbose;
        bool overwrite;
        bool preserveCase;
};

class CLIHandler {
private:
        std::vector<std::string> arguments;
        std::map<std::string, std::string> options;
        
        // Helper methods
        void parseArguments(int argc, char* argv[]);
        void validateArguments() const;
        void printUsage() const;
        void printVersion() const;
        void printHelp() const;
        
public:
        CLIHandler(int argc, char* argv[]);
        
        // Get parsed arguments
        CLIArguments getParsedArguments() const;
        
        // Validation
        bool isValid() const;
        std::string getErrorMessage() const;
        
        // Static constants
        static const std::string VERSION;
        static const std::string AUTHOR;
        static const std::string DEFAULT_OUTPUT_SUFFIX;
};

#endif // CLIHANDLER_H
```

**Main Program:**

```cpp
// main.cpp
#include "CaesarCipher.h"
#include "FileHandler.h"
#include "CLIHandler.h"
#include "Utilities.h"
#include <iostream>
#include <iomanip>

int main(int argc, char* argv[]) {
        try {
                // Parse command line arguments
                CLIHandler cli(argc, argv);
                
                if (!cli.isValid()) {
                        std::cerr << "Error: " << cli.getErrorMessage() << std::endl;
                        return 1;
                }
                
                CLIArguments args = cli.getParsedArguments();
                
                if (args.mode == OperationMode::HELP) {
                        // Help already printed by CLIHandler
                        return 0;
                }
                
                if (args.mode == OperationMode::VERSION) {
                        std::cout << "Caesar Cipher Tool v" << CLIHandler::VERSION << std::endl;
                        return 0;
                }
                
                if (args.mode == OperationMode::TEST) {
                        runTests();
                        return 0;
                }
                
                // Create Caesar cipher with specified shift
                CaesarCipher cipher(args.shift);
                
                // Read input file
                FileHandler inputHandler(args.inputFile);
                std::string content = inputHandler.readFile();
                
                std::string processedContent;
                
                // Perform encryption or decryption
                if (args.mode == OperationMode::ENCRYPT) {
                        if (args.verbose) {
                                std::cout << "Encrypting file: " << args.inputFile << std::endl;
                                std::cout << "Shift value: " << args.shift << std::endl;
                        }
                        processedContent = cipher.encryptFileContent(content);
                } else if (args.mode == OperationMode::DECRYPT) {
                        if (args.verbose) {
                                std::cout << "Decrypting file: " << args.inputFile << std::endl;
                                std::cout << "Shift value: " << args.shift << std::endl;
                        }
                        processedContent = cipher.decryptFileContent(content);
                } else if (args.mode == OperationMode::BRUTE_FORCE) {
                        bruteForceDecrypt(content, args.outputFile);
                        return 0;
                }
                
                // Write output file
                FileHandler outputHandler(args.outputFile);
                outputHandler.writeFile(processedContent);
                
                if (args.verbose) {
                        std::cout << "Successfully processed file" << std::endl;
                        std::cout << "Input:  " << args.inputFile << std::endl;
                        std::cout << "Output: " << args.outputFile << std::endl;
                        std::cout << "Size:   " << processedContent.size() << " bytes" << std::endl;
                }
                
                return 0;
                
        } catch (const std::exception& e) {
                std::cerr << "Error: " << e.what() << std::endl;
                return 1;
        } catch (...) {
                std::cerr << "Unknown error occurred" << std::endl;
                return 1;
        }
}
```

### Phase 5: Advanced Features and Testing

**Brute Force Decryption:**

```cpp
void bruteForceDecrypt(const std::string& ciphertext, const std::string& outputFile) {
        std::cout << "Attempting brute force decryption..." << std::endl;
        std::cout << "Trying all 26 possible shifts:" << std::endl;
        std::cout << std::string(60, '-') << std::endl;
        
        std::ofstream output(outputFile);
        if (!output.is_open()) {
                throw std::runtime_error("Cannot open output file for brute force results");
        }
        
        output << "Brute Force Decryption Results" << std::endl;
        output << "Ciphertext: " << ciphertext.substr(0, 50) 
                     << (ciphertext.length() > 50 ? "..." : "") << std::endl;
        output << std::string(60, '-') << std::endl;
        
        for (int shift = 0; shift < 26; shift++) {
                CaesarCipher cipher(shift);
                std::string decrypted = cipher.decrypt(ciphertext);
                
                // Simple heuristic to identify likely plaintext
                int score = calculatePlaintextScore(decrypted);
                
                std::cout << "Shift " << std::setw(2) << shift << ": "
                                    << decrypted.substr(0, 40)
                                    << (decrypted.length() > 40 ? "..." : "")
                                    << " [Score: " << score << "]" << std::endl;
                
                output << "Shift " << std::setw(2) << shift << ":" << std::endl;
                output << decrypted << std::endl;
                output << std::string(40, '-') << std::endl;
        }
        
        output.close();
        std::cout << std::string(60, '-') << std::endl;
        std::cout << "Results written to: " << outputFile << std::endl;
}
```

**Usage Examples:**

```bash
# Basic encryption
./caesar_cipher -e -i input.txt -o encrypted.txt -s 5

# Basic decryption
./caesar_cipher -d -i encrypted.txt -o decrypted.txt -s 5

# Brute force attack
./caesar_cipher -b -i encrypted.txt -o results.txt

# Verbose mode
./caesar_cipher -e -i secret.txt -o secret_enc.txt -s 7 -v

# Help and version
./caesar_cipher --help
./caesar_cipher --version
```

## Evaluation Criteria

*   **Algorithm Implementation (30%):** Correct Caesar cipher implementation, handling edge cases.
*   **File I/O Operations (25%):** Robust file handling, error checking, proper resource management.
*   **Command-Line Interface (20%):** User-friendly interface, comprehensive options, good UX.
*   **Error Handling (15%):** Graceful error recovery, informative error messages, validation.
*   **Code Quality (10%):** Clean code, proper organization, documentation, testing.

## Required Deliverables

*   **GitHub Repository:**
        *   Complete C++ source code with all classes.
        *   `Makefile` for building the project.
        *   `README` with usage instructions and examples.
        *   Sample input/output files.
*   **Executable Program:**
        *   Compiled program that runs without errors.
        *   All command-line options functional.
        *   Proper error messages and validation.
*   **Documentation:**
        *   Algorithm explanation.
        *   Usage examples.
        *   Build instructions.
        *   Testing methodology.

## Common Mistakes to Avoid

*   Not handling file I/O errors.
*   Memory leaks (use RAII principles).
*   Not validating user input.
*   Hardcoding paths or filenames.
*   Not handling edge cases (empty files, large files).
*   Inconsistent error messages.
*   No help or usage instructions.
*   Not testing with different character sets.
*   Ignoring cross-platform compatibility.
*   Not cleaning up resources on error.

## Bonus Challenges

*   Add support for ROT13 as a special case.
*   Implement frequency analysis for ciphertext-only attacks.
*   Add support for multiple encryption algorithms.
*   Create a GUI version using Qt or a similar framework.
*   Add network encryption/decryption capabilities.
*   Implement password-based key derivation.
*   Add support for binary files.
*   Create an installable package (e.g., .deb, .rpm).
*   Add performance benchmarking.
*   Implement Unicode support.

## Tips for Success

*   **Start Simple:** Implement basic encryption first, then add features.
*   **Test Thoroughly:** Test with different file types and sizes.
*   **Use RAII:** Ensure resources are properly managed.
*   **Error First:** Implement error handling from the beginning.
*   **Document:** Comment your code and create good user documentation.

## Real-World Application

This project develops skills for:

*   Security tool development
*   File processing applications
*   Command-line utility programming
*   Cryptography basics
*   System programming

## Submission Checklist

- [ ] Complete C++ program with all classes.
- [ ] Working Caesar cipher encryption/decryption.
- [ ] File I/O with error handling.
- [ ] Command-line interface with multiple options.
- [ ] `Makefile` for building the project.
- [ ] `README` with usage instructions.
- [ ] Sample test files.
- [ ] Error handling for all operations.
- [ ] Code follows C++ best practices.
- [ ] No memory leaks or resource issues.
