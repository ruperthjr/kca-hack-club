---
title: "Build a Scientific Calculator"
description: "Create a fully functional calculator with standard and scientific operations"
difficulty: "intermediate"
estimatedTime: "10-15 hours"
skills: ["JavaScript", "Math Operations", "UI/UX Design", "Event Handling"]
recommendedFor: ["Pauline", "Maryphin", "Ruperth"]
points: 75
tags: ["javascript", "calculator", "math", "week-2"]
prerequisites: ["JavaScript fundamentals", "DOM manipulation", "CSS Grid"]
learningObjectives: ["Handle complex mathematical operations", "Build calculator logic", "Create intuitive user interfaces", "Manage application state"]
deliverables: ["Working calculator app", "Both standard and scientific modes", "Keyboard support", "Calculation history", "Responsive design"]
---

# Build a Scientific Calculator

Create a professional-grade calculator application with both standard and scientific modes, complete with history tracking and keyboard support.

## Project Overview

Build a calculator that can handle basic arithmetic operations, advanced scientific functions, and maintain a history of calculations.

## Core Features

### 1. Standard Operations
- Addition (+)
- Subtraction (-)
- Multiplication (×)
- Division (÷)
- Percentage (%)
- Square root (√)
- Power (x²)
- Memory functions (M+, M-, MR, MC)

### 2. Scientific Operations
- Trigonometric functions (sin, cos, tan)
- Inverse trig functions (sin⁻¹, cos⁻¹, tan⁻¹)
- Logarithms (log, ln)
- Exponential (e^x)
- Power (x^y)
- Factorial (n!)
- Pi (π) and Euler's number (e)

### 3. Calculator Modes
- Standard mode (basic operations)
- Scientific mode (advanced functions)
- Toggle between modes seamlessly

### 4. Additional Features
- Calculation history
- Keyboard input support
- Copy result to clipboard
- Clear entry (CE) and All Clear (AC)
- Backspace/delete last digit
- Decimal point handling
- Error handling for invalid operations

## Complete HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Scientific Calculator</title>
    <link rel="stylesheet" href="calculator.css">
</head>
<body>
    <div class="calculator-container">
        <div class="calculator">
            <div class="mode-toggle">
                <button id="standardMode" class="mode-btn active">Standard</button>
                <button id="scientificMode" class="mode-btn">Scientific</button>
            </div>

            <div class="display-section">
                <div class="expression" id="expression"></div>
                <div class="result" id="result">0</div>
            </div>

            <div class="memory-indicators">
                <span id="memoryIndicator" class="memory-badge" style="display: none;">M</span>
                <span id="angleMode" class="angle-badge">DEG</span>
            </div>

            <div id="scientificButtons" class="scientific-panel" style="display: none;">
                <button class="btn btn-function" data-value="sin">sin</button>
                <button class="btn btn-function" data-value="cos">cos</button>
                <button class="btn btn-function" data-value="tan">tan</button>
                <button class="btn btn-function" data-value="ln">ln</button>
                <button class="btn btn-function" data-value="log">log</button>
                
                <button class="btn btn-function" data-value="asin">sin⁻¹</button>
                <button class="btn btn-function" data-value="acos">cos⁻¹</button>
                <button class="btn btn-function" data-value="atan">tan⁻¹</button>
                <button class="btn btn-function" data-value="exp">e^x</button>
                <button class="btn btn-function" data-value="power">x^y</button>
                
                <button class="btn btn-function" data-value="pi">π</button>
                <button class="btn btn-function" data-value="e">e</button>
                <button class="btn btn-function" data-value="factorial">n!</button>
                <button class="btn btn-function" id="angleToggle">RAD</button>
                <button class="btn btn-function" data-value="abs">|x|</button>
            </div>

            <div class="button-grid">
                <button class="btn btn-memory" data-action="mc">MC</button>
                <button class="btn btn-memory" data-action="mr">MR</button>
                <button class="btn btn-memory" data-action="m+">M+</button>
                <button class="btn btn-memory" data-action="m-">M-</button>

                <button class="btn btn-operator" data-action="clear">AC</button>
                <button class="btn btn-operator" data-action="ce">CE</button>
                <button class="btn btn-operator" data-action="backspace">⌫</button>
                <button class="btn btn-operator" data-value="/">÷</button>

                <button class="btn btn-number" data-value="7">7</button>
                <button class="btn btn-number" data-value="8">8</button>
                <button class="btn btn-number" data-value="9">9</button>
                <button class="btn btn-operator" data-value="*">×</button>

                <button class="btn btn-number" data-value="4">4</button>
                <button class="btn btn-number" data-value="5">5</button>
                <button class="btn btn-number" data-value="6">6</button>
                <button class="btn btn-operator" data-value="-">-</button>

                <button class="btn btn-number" data-value="1">1</button>
                <button class="btn btn-number" data-value="2">2</button>
                <button class="btn btn-number" data-value="3">3</button>
                <button class="btn btn-operator" data-value="+">+</button>

                <button class="btn btn-number" data-value="0">0</button>
                <button class="btn btn-number" data-value=".">.</button>
                <button class="btn btn-function" data-value="sqrt">√</button>
                <button class="btn btn-equals" data-action="equals">=</button>
            </div>
        </div>

        <div class="history-panel" id="historyPanel">
            <div class="history-header">
                <h3>History</h3>
                <button id="clearHistory" class="btn-clear-history">Clear</button>
            </div>
            <div id="historyList" class="history-list">
                <p class="empty-history">No calculations yet</p>
            </div>
        </div>
    </div>

    <script src="calculator.js"></script>
</body>
</html>
```

## Complete CSS Styling
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.calculator-container {
    display: flex;
    gap: 20px;
    max-width: 1200px;
    width: 100%;
}

.calculator {
    background: white;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    flex: 1;
}

.mode-toggle {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.mode-btn {
    flex: 1;
    padding: 12px;
    border: 2px solid #e0e0e0;
    background: white;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
}

.mode-btn.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-color: #667eea;
}

.display-section {
    background: #f5f5f5;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 15px;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
}

.expression {
    font-size: 16px;
    color: #666;
    min-height: 24px;
    margin-bottom: 8px;
    word-wrap: break-word;
}

.result {
    font-size: 36px;
    font-weight: bold;
    color: #333;
    word-wrap: break-word;
}

.memory-indicators {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    min-height: 24px;
}

.memory-badge,
.angle-badge {
    padding: 4px 12px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
}

.memory-badge {
    background: #4caf50;
    color: white;
}

.angle-badge {
    background: #2196f3;
    color: white;
}

.scientific-panel {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    margin-bottom: 15px;
}

.button-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
}

.btn {
    padding: 20px;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    background: #f0f0f0;
    color: #333;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn:active {
    transform: translateY(0);
}

.btn-number {
    background: white;
    border: 2px solid #e0e0e0;
}

.btn-number:hover {
    background: #f9f9f9;
}

.btn-operator {
    background: #ff9800;
    color: white;
}

.btn-operator:hover {
    background: #f57c00;
}

.btn-equals {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.btn-equals:hover {
    background: linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%);
}

.btn-function {
    background: #2196f3;
    color: white;
    font-size: 14px;
}

.btn-function:hover {
    background: #1976d2;
}

.btn-memory {
    background: #4caf50;
    color: white;
    font-size: 14px;
}

.btn-memory:hover {
    background: #388e3c;
}

.history-panel {
    background: white;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    width: 300px;
    max-height: 600px;
    display: flex;
    flex-direction: column;
}

.history-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 2px solid #e0e0e0;
}

.history-header h3 {
    font-size: 18px;
    color: #333;
}

.btn-clear-history {
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    background: #f44336;
    color: white;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-clear-history:hover {
    background: #d32f2f;
}

.history-list {
    flex: 1;
    overflow-y: auto;
}

.history-item {
    padding: 12px;
    margin-bottom: 8px;
    background: #f5f5f5;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.history-item:hover {
    background: #e0e0e0;
    transform: translateX(5px);
}

.history-expression {
    font-size: 14px;
    color: #666;
    margin-bottom: 4px;
}

.history-result {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}

.empty-history {
    text-align: center;
    color: #999;
    padding: 40px 20px;
}

@media (max-width: 768px) {
    .calculator-container {
        flex-direction: column;
    }

    .history-panel {
        width: 100%;
        max-height: 300px;
    }

    .scientific-panel {
        grid-template-columns: repeat(3, 1fr);
    }

    .btn {
        padding: 15px;
        font-size: 16px;
    }

    .result {
        font-size: 28px;
    }
}
```

## Complete JavaScript Implementation
```javascript
class Calculator {
    constructor() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetScreen = false;
        this.memory = 0;
        this.angleMode = 'DEG';
        this.isScientificMode = false;
        this.history = this.loadHistory();
        this.init();
    }

    init() {
        this.cacheDOMElements();
        this.attachEventListeners();
        this.updateDisplay();
        this.renderHistory();
    }

    cacheDOMElements() {
        this.elements = {
            result: document.getElementById('result'),
            expression: document.getElementById('expression'),
            standardMode: document.getElementById('standardMode'),
            scientificMode: document.getElementById('scientificMode'),
            scientificButtons: document.getElementById('scientificButtons'),
            angleToggle: document.getElementById('angleToggle'),
            angleMode: document.getElementById('angleMode'),
            memoryIndicator: document.getElementById('memoryIndicator'),
            historyList: document.getElementById('historyList'),
            clearHistory: document.getElementById('clearHistory')
        };
    }

    attachEventListeners() {
        document.querySelectorAll('.btn-number').forEach(btn => {
            btn.addEventListener('click', () => this.appendNumber(btn.dataset.value));
        });

        document.querySelectorAll('.btn-operator').forEach(btn => {
            if (btn.dataset.value) {
                btn.addEventListener('click', () => this.setOperation(btn.dataset.value));
            }
        });

        document.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', () => this.handleAction(btn.dataset.action));
        });

        document.querySelectorAll('.btn-function').forEach(btn => {
            if (btn.dataset.value) {
                btn.addEventListener('click', () => this.handleFunction(btn.dataset.value));
            }
        });

        this.elements.standardMode.addEventListener('click', () => this.switchMode(false));
        this.elements.scientificMode.addEventListener('click', () => this.switchMode(true));
        this.elements.angleToggle.addEventListener('click', () => this.toggleAngleMode());
        this.elements.clearHistory.addEventListener('click', () => this.clearHistory());

        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    appendNumber(num) {
        if (this.shouldResetScreen) {
            this.currentValue = '';
            this.shouldResetScreen = false;
        }

        if (num === '.' && this.currentValue.includes('.')) return;
        if (this.currentValue === '0' && num !== '.') {
            this.currentValue = num;
        } else {
            this.currentValue += num;
        }

        this.updateDisplay();
    }

    setOperation(op) {
        if (this.operation !== null) {
            this.calculate();
        }

        this.operation = op;
        this.previousValue = this.currentValue;
        this.shouldResetScreen = true;
        this.updateExpression();
    }

    calculate() {
        let result;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);

        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    this.showError('Cannot divide by zero');
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }

        this.addToHistory(`${this.previousValue} ${this.operation} ${this.currentValue}`, result);
        this.currentValue = this.formatResult(result);
        this.operation = null;
        this.previousValue = '';
        this.shouldResetScreen = true;
        this.updateDisplay();
    }

    handleFunction(func) {
        const value = parseFloat(this.currentValue);
        let result;

        try {
            switch (func) {
                case 'sqrt':
                    if (value < 0) throw new Error('Invalid input');
                    result = Math.sqrt(value);
                    break;
                case 'sin':
                    result = this.angleMode === 'DEG' ? 
                        Math.sin(value * Math.PI / 180) : Math.sin(value);
                    break;
                case 'cos':
                    result = this.angleMode === 'DEG' ? 
                        Math.cos(value * Math.PI / 180) : Math.cos(value);
                    break;
                case 'tan':
                    result = this.angleMode === 'DEG' ? 
                        Math.tan(value * Math.PI / 180) : Math.tan(value);
                    break;
                case 'asin':
                    if (value < -1 || value > 1) throw new Error('Invalid input');
                    result = this.angleMode === 'DEG' ? 
                        Math.asin(value) * 180 / Math.PI : Math.asin(value);
                    break;
                case 'acos':
                    if (value < -1 || value > 1) throw new Error('Invalid input');
                    result = this.angleMode === 'DEG' ? 
                        Math.acos(value) * 180 / Math.PI : Math.acos(value);
                    break;
                case 'atan':
                    result = this.angleMode === 'DEG' ? 
                        Math.atan(value) * 180 / Math.PI : Math.atan(value);
                    break;
                case 'ln':
                    if (value <= 0) throw new Error('Invalid input');
                    result = Math.log(value);
                    break;
                case 'log':
                    if (value <= 0) throw new Error('Invalid input');
                    result = Math.log10(value);
                    break;
                case 'exp':
                    result = Math.exp(value);
                    break;
                case 'factorial':
                    if (value < 0 || !Number.isInteger(value)) throw new Error('Invalid input');
                    result = this.factorial(value);
                    break;
                case 'abs':
                    result = Math.abs(value);
                    break;
                case 'pi':
                    result = Math.PI;
                    break;
                case 'e':
                    result = Math.E;
                    break;
                case 'power':
                    this.operation = '**';
                    this.previousValue = this.currentValue;
                    this.shouldResetScreen = true;
                    this.updateExpression();
                    return;
                default:
                    return;
            }

            this.addToHistory(`${func}(${this.currentValue})`, result);
            this.currentValue = this.formatResult(result);
            this.shouldResetScreen = true;
            this.updateDisplay();
        } catch (error) {
            this.showError(error.message);
        }
    }

    factorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    handleAction(action) {
        switch (action) {
            case 'clear':
                this.clear();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'backspace':
                this.backspace();
                break;
            case 'equals':
                this.calculate();
                break;
            case 'mc':
                this.memoryClear();
                break;
            case 'mr':
                this.memoryRecall();
                break;
            case 'm+':
                this.memoryAdd();
                break;
            case 'm-':
                this.memorySubtract();
                break;
        }
    }

    clear() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetScreen = false;
        this.updateDisplay();
    }

    clearEntry() {
        this.currentValue = '0';
        this.updateDisplay();
    }

    backspace() {
        if (this.currentValue.length > 1) {
            this.currentValue = this.currentValue.slice(0, -1);
        } else {
            this.currentValue = '0';
        }
        this.updateDisplay();
    }

    memoryClear() {
        this.memory = 0;
        this.elements.memoryIndicator.style.display = 'none';
    }

    memoryRecall() {
        this.currentValue = this.memory.toString();
        this.updateDisplay();
    }

    memoryAdd() {
        this.memory += parseFloat(this.currentValue);
        this.elements.memoryIndicator.style.display = 'block';
    }

    memorySubtract() {
        this.memory -= parseFloat(this.currentValue);
        this.elements.memoryIndicator.style.display = 'block';
    }

    switchMode(scientific) {
        this.isScientificMode = scientific;
        this.elements.scientificButtons.style.display = scientific ? 'grid' : 'none';
        this.elements.standardMode.classList.toggle('active', !scientific);
        this.elements.scientificMode.classList.toggle('active', scientific);
    }

    toggleAngleMode() {
        this.angleMode = this.angleMode === 'DEG' ? 'RAD' : 'DEG';
        this.elements.angleMode.textContent = this.angleMode;
        this.elements.angleToggle.textContent = this.angleMode === 'DEG' ? 'RAD' : 'DEG';
    }

    updateDisplay() {
        this.elements.result.textContent = this.currentValue;
    }

    updateExpression() {
        if (this.operation && this.previousValue) {
            this.elements.expression.textContent = `${this.previousValue} ${this.operation}`;
        } else {
            this.elements.expression.textContent = '';
        }
    }

    formatResult(num) {
        if (!isFinite(num)) return 'Error';
        const str = num.toString();
        if (str.length > 12) {
            return num.toExponential(6);
        }
        return parseFloat(num.toPrecision(12)).toString();
    }

    showError(message) {
        this.elements.result.textContent = message;
        setTimeout(() => {
            this.clear();
        }, 2000);
    }

    addToHistory(expression, result) {
        const historyItem = {
            expression,
            result: this.formatResult(result),
            timestamp: new Date().toISOString()
        };
        this.history.unshift(historyItem);
        if (this.history.length > 20) {
            this.history = this.history.slice(0, 20);
        }
        this.saveHistory();
        this.renderHistory();
    }

    renderHistory() {
        if (this.history.length === 0) {
            this.elements.historyList.innerHTML = '<p class="empty-history">No calculations yet</p>';
            return;
        }

        this.elements.historyList.innerHTML = this.history.map(item => `
            <div class="history-item" data-result="${item.result}">
                <div class="history-expression">${this.escapeHTML(item.expression)}</div>
                <div class="history-result">= ${this.escapeHTML(item.result)}</div>
            </div>
        `).join('');

        document.querySelectorAll('.history-item').forEach(item => {
            item.addEventListener('click', () => {
                this.currentValue = item.dataset.result;
                this.updateDisplay();
            });
        });
    }

    clearHistory() {
        this.history = [];
        this.saveHistory();
        this.renderHistory();
    }

    saveHistory() {
        localStorage.setItem('calculatorHistory', JSON.stringify(this.history));
    }

    loadHistory() {
        const stored = localStorage.getItem('calculatorHistory');
        return stored ? JSON.parse(stored) : [];
    }

    handleKeyboard(e) {
        if (e.key >= '0' && e.key <= '9') this.appendNumber(e.key);
        if (e.key === '.') this.appendNumber('.');
        if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            this.setOperation(e.key);
        }
        if (e.key === 'Enter' || e.key === '=') this.calculate();
        if (e.key === 'Escape') this.clear();
        if (e.key === 'Backspace') this.backspace();
    }

    escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
}

const calculator = new Calculator();
```

## Testing Checklist

- All basic operations work correctly
- Scientific functions calculate accurately
- Angle mode toggle works (DEG/RAD)
- Memory functions store and recall values
- History tracks calculations
- Keyboard input works
- Error handling for invalid operations
- Responsive design works on mobile
- Display handles large numbers
- Clear and CE buttons work correctly

## Submission Requirements

1. GitHub repository with all files
2. README with features and usage
3. Live demo link
4. Test all operations thoroughly
5. Document any known limitations

## Bonus Features

**Easy:**
- Add percentage calculations
- Implement copy-to-clipboard
- Add calculation sound effects

**Medium:**
- Add unit conversions
- Implement custom themes
- Add more scientific functions

**Hard:**
- Add graphing capabilities
- Implement equation solver
- Add matrix operations