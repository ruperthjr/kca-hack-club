---
title: "CLI-Based ATM Simulation in Java"
description: "Console-based ATM system with accounts, transactions, and balance tracking"
difficulty: "intermediate"
unit: "Week 1 Project: Object Oriented Programming with Java"
week: 1
technologies:
    - "Java"
    - "Object-Oriented Design"
    - "File I/O"
    - "Console Interface"
    - "Banking Systems"
learningOutcomes:
    - "Design and implement object-oriented banking system"
    - "Create interactive console menu system"
    - "Handle financial transactions with validation"
    - "Implement file persistence for account data"
    - "Apply error handling and input validation"
estimatedTime: "10-12 hours"
requirements:
    - "Basic Java programming knowledge"
    - "Understanding of classes and objects"
    - "Familiarity with file operations in Java"
    - "Java Development Kit (JDK) installed"
    - "GitHub account for version control"
deliverables:
    - "Complete Java ATM simulation program"
    - "Multiple account types with inheritance"
    - "Transaction history tracking"
    - "File-based data persistence"
    - "GitHub repository with documentation"
resources:
    - name: "Baeldung: Introduction to Java"
      url: "https://www.baeldung.com/java-tutorial"
      description: "A comprehensive tutorial covering fundamental Java concepts, perfect for reinforcing the basics required for this project."
    - name: "Oracle Java Docs: Object-Oriented Programming Concepts"
      url: "https://docs.oracle.com/javase/tutorial/java/concepts/index.html"
      description: "Official documentation from Oracle explaining the core principles of object-oriented programming in Java, such as inheritance and polymorphism."
    - name: "GeeksforGeeks: File Handling in Java"
      url: "https://www.geeksforgeeks.org/file-handling-java/"
      description: "A practical guide to file input/output operations in Java, including serialization, which is crucial for the data persistence feature."
    - name: "Jenkov.com: Java Collections Tutorial"
      url: "http://tutorials.jenkov.com/java-collections/index.html"
      description: "An in-depth tutorial on the Java Collections Framework, covering Lists, Maps, and other data structures used in the ATM system."
    - name: "Refactoring Guru: Design Patterns in Java"
      url: "https://refactoring.guru/design-patterns/java"
      description: "An excellent resource for understanding and applying common software design patterns to build robust and maintainable applications like the ATM simulation."

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# ATM Simulation System Project

## Overview

Develop a comprehensive console-based ATM simulation system that mimics real banking operations with multiple account types, transaction processing, and data persistence. This project focuses on object-oriented design principles and practical Java programming.

## Objective

Create a fully functional ATM system with user authentication, account management, financial transactions, and transaction history. The system should demonstrate proper object-oriented design, error handling, and file-based data persistence.

## Instructions

### Phase 1: System Design and Architecture

**Project Structure:**

```
atm-simulation/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── atm/
│   │   │       ├── Main.java
│   │   │       ├── ATM.java
│   │   │       ├── Bank.java
│   │   │       ├── models/
│   │   │       │   ├── Account.java
│   │   │       │   ├── SavingsAccount.java
│   │   │       │   ├── CheckingAccount.java
│   │   │       │   ├── Customer.java
│   │   │       │   ├── Transaction.java
│   │   │       │   └── TransactionType.java
│   │   │       ├── services/
│   │   │       │   ├── AccountService.java
│   │   │       │   ├── TransactionService.java
│   │   │       │   ├── AuthService.java
│   │   │       │   └── FileService.java
│   │   │       ├── utils/
│   │   │       │   ├── InputValidator.java
│   │   │       │   ├── ConsoleUtils.java
│   │   │       │   └── DateUtils.java
│   │   │       └── exceptions/
│   │   │           ├── ATMException.java
│   │   │           ├── InsufficientFundsException.java
│   │   │           └── InvalidAccountException.java
│   │   └── resources/
│   │       ├── accounts.dat
│   │       ├── customers.dat
│   │       └── transactions.dat
│   └── test/
│       └── java/
│           └── atm/
│               └── ATMTest.java
├── data/
│   ├── accounts/
│   ├── customers/
│   └── transactions/
├── README.md
├── pom.xml (if using Maven)
└── .gitignore
```

**Class Diagram Design:**

```
ATM (Main Class)
├── Bank
│   ├── List<Customer>
│   └── List<Account>
├── AuthService
├── AccountService
├── TransactionService
└── FileService

Customer
├── String customerId
├── String name
├── String pin
└── List<Account>

Account (Abstract)
├── String accountNumber
├── String customerId
├── double balance
├── List<Transaction>
└── abstract double calculateInterest()
│
├── SavingsAccount extends Account
│   └── double interestRate
│
└── CheckingAccount extends Account
        └── double overdraftLimit

Transaction
├── String transactionId
├── String accountNumber
├── TransactionType type
├── double amount
├── double balanceAfter
└── LocalDateTime timestamp
```

### Phase 2: Core Model Classes Implementation

**`Account` Base Class:**

```java
// Account.java
package atm.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public abstract class Account implements Serializable {
        private static final long serialVersionUID = 1L;
        
        protected String accountNumber;
        protected String customerId;
        protected double balance;
        protected LocalDateTime createdAt;
        protected List<Transaction> transactions;
        protected boolean isActive;
        
        public Account(String customerId, double initialBalance) {
                this.accountNumber = generateAccountNumber();
                this.customerId = customerId;
                this.balance = initialBalance;
                this.createdAt = LocalDateTime.now();
                this.transactions = new ArrayList<>();
                this.isActive = true;
                
                // Record initial deposit transaction
                if (initialBalance > 0) {
                        Transaction initialDeposit = new Transaction(
                                this.accountNumber,
                                TransactionType.DEPOSIT,
                                initialBalance,
                                this.balance,
                                "Initial deposit"
                        );
                        transactions.add(initialDeposit);
                }
        }
        
        private String generateAccountNumber() {
                // Generate 10-digit account number
                return String.format("ACC%07d", 
                        (int)(Math.random() * 10000000));
        }
        
        // Abstract method for interest calculation
        public abstract double calculateInterest();
        
        // Getters and setters
        public String getAccountNumber() { return accountNumber; }
        public String getCustomerId() { return customerId; }
        public double getBalance() { return balance; }
        public LocalDateTime getCreatedAt() { return createdAt; }
        public List<Transaction> getTransactions() { return transactions; }
        public boolean isActive() { return isActive; }
        
        public void setActive(boolean active) { this.isActive = active; }
        
        // Transaction methods
        public void deposit(double amount, String description) {
                validatePositiveAmount(amount);
                balance += amount;
                
                Transaction transaction = new Transaction(
                        accountNumber,
                        TransactionType.DEPOSIT,
                        amount,
                        balance,
                        description
                );
                transactions.add(transaction);
        }
        
        public void withdraw(double amount, String description) 
                        throws InsufficientFundsException {
                validatePositiveAmount(amount);
                validateWithdrawal(amount);
                
                balance -= amount;
                
                Transaction transaction = new Transaction(
                        accountNumber,
                        TransactionType.WITHDRAWAL,
                        amount,
                        balance,
                        description
                );
                transactions.add(transaction);
        }
        
        public void transfer(Account toAccount, double amount, String description)
                        throws InsufficientFundsException {
                validatePositiveAmount(amount);
                validateWithdrawal(amount);
                
                // Withdraw from this account
                this.balance -= amount;
                Transaction withdrawal = new Transaction(
                        this.accountNumber,
                        TransactionType.TRANSFER_OUT,
                        amount,
                        this.balance,
                        description + " -> To: " + toAccount.getAccountNumber()
                );
                this.transactions.add(withdrawal);
                
                // Deposit to target account
                toAccount.balance += amount;
                Transaction deposit = new Transaction(
                        toAccount.getAccountNumber(),
                        TransactionType.TRANSFER_IN,
                        amount,
                        toAccount.balance,
                        description + " -> From: " + this.accountNumber
                );
                toAccount.transactions.add(deposit);
        }
        
        // Validation methods
        protected void validatePositiveAmount(double amount) {
                if (amount <= 0) {
                        throw new IllegalArgumentException("Amount must be positive");
                }
        }
        
        protected abstract void validateWithdrawal(double amount) 
                        throws InsufficientFundsException;
        
        // Account summary
        public String getAccountSummary() {
                return String.format(
                        "Account: %s | Balance: $%.2f | Type: %s | Active: %s",
                        accountNumber, balance, getAccountType(), isActive ? "Yes" : "No"
                );
        }
        
        public abstract String getAccountType();
}
```

**`SavingsAccount`:**

```java
// SavingsAccount.java
package atm.models;

import atm.exceptions.InsufficientFundsException;

public class SavingsAccount extends Account {
        private double interestRate;
        private double minimumBalance;
        
        public SavingsAccount(String customerId, double initialBalance, 
                                                 double interestRate) {
                super(customerId, initialBalance);
                this.interestRate = interestRate;
                this.minimumBalance = 100.00; // Minimum balance requirement
        }
        
        @Override
        public double calculateInterest() {
                return balance * (interestRate / 100) / 12; // Monthly interest
        }
        
        @Override
        protected void validateWithdrawal(double amount) 
                        throws InsufficientFundsException {
                if (amount > balance) {
                        throw new InsufficientFundsException(
                                "Insufficient funds. Available: $" + balance
                        );
                }
                
                if ((balance - amount) < minimumBalance) {
                        throw new InsufficientFundsException(
                                "Withdrawal would violate minimum balance requirement of $" + minimumBalance
                        );
                }
        }
        
        @Override
        public String getAccountType() {
                return "Savings";
        }
        
        // Getters and setters
        public double getInterestRate() { return interestRate; }
        public void setInterestRate(double rate) { this.interestRate = rate; }
        public double getMinimumBalance() { return minimumBalance; }
}
```

**`Transaction` Class:**

```java
// Transaction.java
package atm.models;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

public class Transaction implements Serializable {
        private static final long serialVersionUID = 1L;
        
        private String transactionId;
        private String accountNumber;
        private TransactionType type;
        private double amount;
        private double balanceAfter;
        private LocalDateTime timestamp;
        private String description;
        
        public Transaction(String accountNumber, TransactionType type, 
                                            double amount, double balanceAfter, String description) {
                this.transactionId = UUID.randomUUID().toString().substring(0, 8);
                this.accountNumber = accountNumber;
                this.type = type;
                this.amount = amount;
                this.balanceAfter = balanceAfter;
                this.timestamp = LocalDateTime.now();
                this.description = description;
        }
        
        // Getters
        public String getTransactionId() { return transactionId; }
        public String getAccountNumber() { return accountNumber; }
        public TransactionType getType() { return type; }
        public double getAmount() { return amount; }
        public double getBalanceAfter() { return balanceAfter; }
        public LocalDateTime getTimestamp() { return timestamp; }
        public String getDescription() { return description; }
        
        public String getFormattedTimestamp() {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
                return timestamp.format(formatter);
        }
        
        public String getFormattedTransaction() {
                return String.format(
                        "%s | %s | %s: $%.2f | Balance: $%.2f | %s",
                        getFormattedTimestamp(),
                        transactionId,
                        type,
                        amount,
                        balanceAfter,
                        description
                );
        }
}
```

### Phase 3: Services and Business Logic

**`Bank` Service:**

```java
// Bank.java
package atm;

import atm.models.*;
import atm.services.*;
import atm.exceptions.*;
import java.util.*;
import java.util.stream.Collectors;

public class Bank {
        private Map<String, Customer> customers;
        private Map<String, Account> accounts;
        private AuthService authService;
        private AccountService accountService;
        private TransactionService transactionService;
        private FileService fileService;
        
        public Bank() {
                this.customers = new HashMap<>();
                this.accounts = new HashMap<>();
                this.authService = new AuthService();
                this.accountService = new AccountService();
                this.transactionService = new TransactionService();
                this.fileService = new FileService();
                
                loadData();
        }
        
        private void loadData() {
                try {
                        // Load customers and accounts from file
                        Map<String, Customer> loadedCustomers = fileService.loadCustomers();
                        Map<String, Account> loadedAccounts = fileService.loadAccounts();
                        
                        if (loadedCustomers != null) {
                                customers = loadedCustomers;
                        }
                        
                        if (loadedAccounts != null) {
                                accounts = loadedAccounts;
                        }
                        
                        // If no data loaded, create sample data
                        if (customers.isEmpty()) {
                                initializeSampleData();
                        }
                        
                } catch (Exception e) {
                        System.err.println("Error loading data: " + e.getMessage());
                        initializeSampleData();
                }
        }
        
        private void saveData() {
                try {
                        fileService.saveCustomers(customers);
                        fileService.saveAccounts(accounts);
                } catch (Exception e) {
                        System.err.println("Error saving data: " + e.getMessage());
                }
        }
        
        private void initializeSampleData() {
                // Create sample customers
                Customer customer1 = new Customer("CUST001", "John Smith", "1234");
                Customer customer2 = new Customer("CUST002", "Jane Doe", "5678");
                
                customers.put(customer1.getCustomerId(), customer1);
                customers.put(customer2.getCustomerId(), customer2);
                
                // Create sample accounts
                SavingsAccount savings1 = new SavingsAccount(
                        customer1.getCustomerId(), 5000.00, 2.5
                );
                CheckingAccount checking1 = new CheckingAccount(
                        customer1.getCustomerId(), 2500.00, 1000.00
                );
                
                SavingsAccount savings2 = new SavingsAccount(
                        customer2.getCustomerId(), 8000.00, 3.0
                );
                
                accounts.put(savings1.getAccountNumber(), savings1);
                accounts.put(checking1.getAccountNumber(), checking1);
                accounts.put(savings2.getAccountNumber(), savings2);
                
                // Link accounts to customers
                customer1.addAccount(savings1);
                customer1.addAccount(checking1);
                customer2.addAccount(savings2);
                
                saveData();
        }
        
        // Authentication
        public Customer authenticate(String customerId, String pin) 
                        throws AuthenticationException {
                return authService.authenticate(customers, customerId, pin);
        }
        
        // Account operations
        public Account getAccount(String accountNumber) 
                        throws InvalidAccountException {
                Account account = accounts.get(accountNumber);
                if (account == null || !account.isActive()) {
                        throw new InvalidAccountException("Account not found or inactive");
                }
                return account;
        }
        
        public List<Account> getCustomerAccounts(String customerId) {
                return accounts.values().stream()
                        .filter(account -> account.getCustomerId().equals(customerId))
                        .filter(Account::isActive)
                        .collect(Collectors.toList());
        }
        
        public Account createAccount(String customerId, String accountType, 
                                                                double initialDeposit) 
                        throws InvalidAccountException {
                Customer customer = customers.get(customerId);
                if (customer == null) {
                        throw new InvalidAccountException("Customer not found");
                }
                
                Account newAccount = accountService.createAccount(
                        customerId, accountType, initialDeposit
                );
                
                accounts.put(newAccount.getAccountNumber(), newAccount);
                customer.addAccount(newAccount);
                
                saveData();
                return newAccount;
        }
        
        // Transaction operations
        public Transaction deposit(String accountNumber, double amount, String description)
                        throws InvalidAccountException {
                Account account = getAccount(accountNumber);
                account.deposit(amount, description);
                
                Transaction transaction = account.getTransactions().get(
                        account.getTransactions().size() - 1
                );
                
                saveData();
                return transaction;
        }
        
        public Transaction withdraw(String accountNumber, double amount, String description)
                        throws InvalidAccountException, InsufficientFundsException {
                Account account = getAccount(accountNumber);
                account.withdraw(amount, description);
                
                Transaction transaction = account.getTransactions().get(
                        account.getTransactions().size() - 1
                );
                
                saveData();
                return transaction;
        }
        
        public List<Transaction> transfer(String fromAccountNumber, 
                                                                         String toAccountNumber, 
                                                                         double amount, String description)
                        throws InvalidAccountException, InsufficientFundsException {
                Account fromAccount = getAccount(fromAccountNumber);
                Account toAccount = getAccount(toAccountNumber);
                
                fromAccount.transfer(toAccount, amount, description);
                
                List<Transaction> transactions = new ArrayList<>();
                transactions.add(fromAccount.getTransactions().get(
                        fromAccount.getTransactions().size() - 1
                ));
                transactions.add(toAccount.getTransactions().get(
                        toAccount.getTransactions().size() - 1
                ));
                
                saveData();
                return transactions;
        }
        
        // Transaction history
        public List<Transaction> getAccountTransactions(String accountNumber, 
                                                                                                     int limit) 
                        throws InvalidAccountException {
                Account account = getAccount(accountNumber);
                List<Transaction> transactions = account.getTransactions();
                
                if (limit > 0 && limit < transactions.size()) {
                        return transactions.subList(
                                Math.max(0, transactions.size() - limit), 
                                transactions.size()
                        );
                }
                
                return transactions;
        }
        
        // Close account
        public void closeAccount(String accountNumber) throws InvalidAccountException {
                Account account = getAccount(accountNumber);
                
                if (account.getBalance() > 0) {
                        throw new InvalidAccountException(
                                "Account must have zero balance to close"
                        );
                }
                
                account.setActive(false);
                saveData();
        }
}
```

### Phase 4: Console Interface and Menu System

**`ATM` Main Class:**

```java
// ATM.java
package atm;

import atm.models.*;
import atm.exceptions.*;
import atm.utils.ConsoleUtils;
import atm.utils.InputValidator;
import java.util.*;
import java.util.Scanner;

public class ATM {
        private Bank bank;
        private Customer currentCustomer;
        private Scanner scanner;
        private boolean running;
        
        public ATM() {
                this.bank = new Bank();
                this.scanner = new Scanner(System.in);
                this.running = true;
        }
        
        public void start() {
                ConsoleUtils.clearScreen();
                System.out.println("=== Welcome to Java ATM System ===");
                
                while (running) {
                        if (currentCustomer == null) {
                                showLoginMenu();
                        } else {
                                showMainMenu();
                        }
                }
                
                scanner.close();
                System.out.println("Thank you for using Java ATM System!");
        }
        
        private void showLoginMenu() {
                System.out.println("\n=== Login ===");
                System.out.println("1. Login to ATM");
                System.out.println("2. Exit");
                System.out.print("Choose option: ");
                
                String choice = scanner.nextLine().trim();
                
                switch (choice) {
                        case "1":
                                login();
                                break;
                        case "2":
                                running = false;
                                break;
                        default:
                                System.out.println("Invalid option. Please try again.");
                }
        }
        
        private void login() {
                System.out.print("Enter Customer ID: ");
                String customerId = scanner.nextLine().trim();
                
                System.out.print("Enter PIN: ");
                String pin = scanner.nextLine().trim();
                
                try {
                        currentCustomer = bank.authenticate(customerId, pin);
                        System.out.println("Login successful! Welcome, " + 
                                                         currentCustomer.getName());
                } catch (AuthenticationException e) {
                        System.out.println("Login failed: " + e.getMessage());
                }
        }
        
        private void logout() {
                currentCustomer = null;
                System.out.println("Logged out successfully.");
        }
        
        private void showMainMenu() {
                ConsoleUtils.clearScreen();
                System.out.println("=== Main Menu ===");
                System.out.println("Customer: " + currentCustomer.getName());
                System.out.println("Customer ID: " + currentCustomer.getCustomerId());
                System.out.println("\nPlease select an option:");
                System.out.println("1. View Accounts");
                System.out.println("2. Deposit");
                System.out.println("3. Withdraw");
                System.out.println("4. Transfer");
                System.out.println("5. Transaction History");
                System.out.println("6. Open New Account");
                System.out.println("7. Close Account");
                System.out.println("8. View Customer Information");
                System.out.println("9. Logout");
                System.out.println("0. Exit System");
                System.out.print("Choose option: ");
                
                String choice = scanner.nextLine().trim();
                
                switch (choice) {
                        case "1": viewAccounts(); break;
                        case "2": deposit(); break;
                        case "3": withdraw(); break;
                        case "4": transfer(); break;
                        case "5": viewTransactionHistory(); break;
                        case "6": openNewAccount(); break;
                        case "7": closeAccount(); break;
                        case "8": viewCustomerInfo(); break;
                        case "9": logout(); break;
                        case "0": running = false; break;
                        default:
                                System.out.println("Invalid option. Press Enter to continue...");
                                scanner.nextLine();
                }
        }
        
        private void viewAccounts() {
                ConsoleUtils.clearScreen();
                System.out.println("=== Your Accounts ===");
                
                List<Account> accounts = bank.getCustomerAccounts(
                        currentCustomer.getCustomerId()
                );
                
                if (accounts.isEmpty()) {
                        System.out.println("No accounts found.");
                } else {
                        for (int i = 0; i < accounts.size(); i++) {
                                Account account = accounts.get(i);
                                System.out.printf("%d. %s\n", i + 1, account.getAccountSummary());
                        }
                }
                
                System.out.println("\nPress Enter to continue...");
                scanner.nextLine();
        }
        
        private void deposit() {
                ConsoleUtils.clearScreen();
                System.out.println("=== Deposit ===");
                
                Account account = selectAccount("Select account to deposit into:");
                if (account == null) return;
                
                System.out.print("Enter amount to deposit: $");
                String amountStr = scanner.nextLine().trim();
                
                try {
                        double amount = Double.parseDouble(amountStr);
                        if (!InputValidator.validateAmount(amount)) {
                                System.out.println("Invalid amount. Must be positive.");
                                return;
                        }
                        
                        System.out.print("Enter description (optional): ");
                        String description = scanner.nextLine().trim();
                        
                        Transaction transaction = bank.deposit(
                                account.getAccountNumber(), 
                                amount, 
                                description.isEmpty() ? "ATM Deposit" : description
                        );
                        
                        System.out.println("\nDeposit successful!");
                        System.out.println("Transaction ID: " + transaction.getTransactionId());
                        System.out.println("New Balance: $" + transaction.getBalanceAfter());
                        
                } catch (NumberFormatException e) {
                        System.out.println("Invalid amount format.");
                } catch (InvalidAccountException e) {
                        System.out.println("Error: " + e.getMessage());
                }
                
                System.out.println("\nPress Enter to continue...");
                scanner.nextLine();
        }
        
        private void withdraw() {
                ConsoleUtils.clearScreen();
                System.out.println("=== Withdraw ===");
                
                Account account = selectAccount("Select account to withdraw from:");
                if (account == null) return;
                
                System.out.print("Enter amount to withdraw: $");
                String amountStr = scanner.nextLine().trim();
                
                try {
                        double amount = Double.parseDouble(amountStr);
                        if (!InputValidator.validateAmount(amount)) {
                                System.out.println("Invalid amount. Must be positive.");
                                return;
                        }
                        
                        System.out.print("Enter description (optional): ");
                        String description = scanner.nextLine().trim();
                        
                        Transaction transaction = bank.withdraw(
                                account.getAccountNumber(), 
                                amount, 
                                description.isEmpty() ? "ATM Withdrawal" : description
                        );
                        
                        System.out.println("\nWithdrawal successful!");
                        System.out.println("Transaction ID: " + transaction.getTransactionId());
                        System.out.println("New Balance: $" + transaction.getBalanceAfter());
                        
                } catch (NumberFormatException e) {
                        System.out.println("Invalid amount format.");
                } catch (InvalidAccountException | InsufficientFundsException e) {
                        System.out.println("Error: " + e.getMessage());
                }
                
                System.out.println("\nPress Enter to continue...");
                scanner.nextLine();
        }
        
        private Account selectAccount(String prompt) {
                List<Account> accounts = bank.getCustomerAccounts(
                        currentCustomer.getCustomerId()
                );
                
                if (accounts.isEmpty()) {
                        System.out.println("No accounts available.");
                        return null;
                }
                
                System.out.println(prompt);
                for (int i = 0; i < accounts.size(); i++) {
                        Account account = accounts.get(i);
                        System.out.printf("%d. %s\n", i + 1, account.getAccountSummary());
                }
                
                System.out.print("Select account (0 to cancel): ");
                String choiceStr = scanner.nextLine().trim();
                
                try {
                        int choice = Integer.parseInt(choiceStr);
                        if (choice == 0) return null;
                        if (choice > 0 && choice <= accounts.size()) {
                                return accounts.get(choice - 1);
                        }
                } catch (NumberFormatException e) {
                        // Fall through to error message
                }
                
                System.out.println("Invalid selection.");
                return null;
        }
}
```

### Phase 5: File Persistence and Advanced Features

**`FileService` Implementation:**

```java
// FileService.java
package atm.services;

import atm.models.*;
import java.io.*;
import java.util.*;

public class FileService {
        private static final String DATA_DIR = "data/";
        private static final String CUSTOMERS_FILE = DATA_DIR + "customers.dat";
        private static final String ACCOUNTS_FILE = DATA_DIR + "accounts.dat";
        
        public FileService() {
                // Ensure data directory exists
                File dataDir = new File(DATA_DIR);
                if (!dataDir.exists()) {
                        dataDir.mkdirs();
                }
        }
        
        public Map<String, Customer> loadCustomers() throws IOException, ClassNotFoundException {
                File file = new File(CUSTOMERS_FILE);
                if (!file.exists()) {
                        return new HashMap<>();
                }
                
                try (ObjectInputStream ois = new ObjectInputStream(
                                new FileInputStream(file))) {
                        @SuppressWarnings("unchecked")
                        Map<String, Customer> customers = (Map<String, Customer>) ois.readObject();
                        return customers;
                }
        }
        
        public void saveCustomers(Map<String, Customer> customers) 
                        throws IOException {
                try (ObjectOutputStream oos = new ObjectOutputStream(
                                new FileOutputStream(CUSTOMERS_FILE))) {
                        oos.writeObject(customers);
                }
        }
        
        public Map<String, Account> loadAccounts() throws IOException, ClassNotFoundException {
                File file = new File(ACCOUNTS_FILE);
                if (!file.exists()) {
                        return new HashMap<>();
                }
                
                try (ObjectInputStream ois = new ObjectInputStream(
                                new FileInputStream(file))) {
                        @SuppressWarnings("unchecked")
                        Map<String, Account> accounts = (Map<String, Account>) ois.readObject();
                        return accounts;
                }
        }
        
        public void saveAccounts(Map<String, Account> accounts) 
                        throws IOException {
                try (ObjectOutputStream oos = new ObjectOutputStream(
                                new FileOutputStream(ACCOUNTS_FILE))) {
                        oos.writeObject(accounts);
                }
        }
        
        public void exportTransactionHistory(String accountNumber, 
                                                                             List<Transaction> transactions, 
                                                                             String filename) throws IOException {
                try (PrintWriter writer = new PrintWriter(new FileWriter(filename))) {
                        writer.println("Transaction History for Account: " + accountNumber);
                        writer.println("Generated on: " + new Date());
                        writer.println("=".repeat(60));
                        
                        for (Transaction transaction : transactions) {
                                writer.println(transaction.getFormattedTransaction());
                        }
                        
                        writer.println("=".repeat(60));
                        writer.println("Total transactions: " + transactions.size());
                }
        }
}
```

## Evaluation Criteria

- **Object-Oriented Design (30%):** Proper class hierarchy, encapsulation, inheritance, polymorphism.
- **Functionality (25%):** Complete ATM operations, transaction processing, account management.
- **Error Handling (20%):** Comprehensive validation, exception handling, user-friendly error messages.
- **Data Persistence (15%):** File I/O operations, data serialization, persistence logic.
- **User Interface (10%):** Clear menu system, intuitive navigation, good UX.

## Required Deliverables

- **GitHub Repository:**
    - Complete Java source code with all classes.
    - Build configuration (`pom.xml` or similar).
    - `README.md` with setup and usage instructions.
    - Sample data files.
- **Executable Program:**
    - Compiled JAR file or runnable class.
    - All ATM operations functional.
    - Data persistence working.
- **Documentation:**
    - Class diagram or architecture overview.
    - User manual with screenshots.
    - Testing instructions.
    - Future enhancement ideas.

## Common Mistakes to Avoid

- Not using proper encapsulation (public fields).
- Hardcoding values instead of using constants.
- Not handling file I/O exceptions properly.
- Memory leaks (not closing resources).
- No input validation.
- Inconsistent error messages.
- Not following Java naming conventions.
- No separation of concerns (mixing UI and business logic).
- Not testing edge cases.
- No data backup mechanism.

## Bonus Challenges

- Add interest calculation and accrual.
- Implement check deposit functionality.
- Add loan application system.
- Create admin interface for bank employees.
- Add email/SMS notifications.
- Implement password change with security questions.
- Add currency conversion for international transactions.
- Create graphical user interface (GUI).
- Add biometric authentication simulation.
- Implement database instead of file storage.

## Tips for Success

- **Design First:** Create class diagrams before coding.
- **Test Incrementally:** Test each feature as you build it.
- **Use Version Control:** Commit regularly with descriptive messages.
- **Follow Java Conventions:** Use proper naming and package structure.
- **Document:** Comment your code and create user documentation.

## Real-World Application

This project develops skills for:

- Banking software development
- Financial systems programming
- Enterprise application development
- Database-driven applications
- System analysis and design

## Submission Checklist

- [ ] Complete Java program with all classes.
- [ ] Multiple account types with inheritance.
- [ ] Full transaction processing.
- [ ] File-based data persistence.
- [ ] Comprehensive error handling.
- [ ] User-friendly console interface.
- [ ] Build configuration file.
- [ ] `README.md` with instructions.
- [ ] Sample data for testing.
- [ ] No compilation errors.
- [ ] Code follows Java best practices.
