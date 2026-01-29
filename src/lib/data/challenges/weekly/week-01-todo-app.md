---
title: "Build a Complete Todo List Application"
description: "Create a full-featured todo app with local storage, filters, and categories"
difficulty: "beginner"
estimatedTime: "8-12 hours"
skills: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Local Storage"]
recommendedFor: ["Maryphin", "Daniel", "Pauline"]
points: 50
tags: ["javascript", "web-dev", "crud", "week-1"]
prerequisites: ["HTML basics", "CSS basics", "JavaScript fundamentals"]
learningObjectives: ["Master DOM manipulation", "Implement CRUD operations", "Work with Local Storage", "Handle user interactions"]
deliverables: ["Fully functional todo app", "Responsive design", "Data persistence", "Code documentation"]
---

# Build a Complete Todo List Application

Create a production-ready todo list application with advanced features like categories, priorities, and local storage persistence.

## Features Requirements

### Core Features
1. Add new todos with title and description
2. Mark todos as complete/incomplete
3. Edit existing todos
4. Delete todos
5. Filter todos (All, Active, Completed)
6. Clear all completed todos
7. Persist data in local storage

### Advanced Features
8. Add categories/tags to todos
9. Set priority levels (Low, Medium, High)
10. Set due dates
11. Search functionality
12. Sort by different criteria
13. Dark mode toggle
14. Todo statistics

## Complete Implementation

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Todo List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1>My Todo List</h1>
            <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">
                
            </button>
        </header>

        <!-- Statistics -->
        <div class="stats">
            <div class="stat-item">
                <span class="stat-value" id="totalTodos">0</span>
                <span class="stat-label">Total</span>
            </div>
            <div class="stat-item">
                <span class="stat-value" id="activeTodos">0</span>
                <span class="stat-label">Active</span>
            </div>
            <div class="stat-item">
                <span class="stat-value" id="completedTodos">0</span>
                <span class="stat-label">Completed</span>
            </div>
        </div>

        <!-- Add Todo Form -->
        <div class="add-todo-section">
            <form id="todoForm" class="todo-form">
                <input 
                    type="text" 
                    id="todoTitle" 
                    placeholder="What needs to be done?"
                    required
                    autocomplete="off"
                >
                <div class="form-row">
                    <input 
                        type="text" 
                        id="todoDescription" 
                        placeholder="Description (optional)"
                    >
                </div>
                <div class="form-row">
                    <select id="todoCategory" required>
                        <option value="">Category</option>
                        <option value="work"> Work</option>
                        <option value="personal"> Personal</option>
                        <option value="shopping"> Shopping</option>
                        <option value="health">Health</option>
                        <option value="other"> Other</option>
                    </select>
                    <select id="todoPriority" required>
                        <option value="low"> Low</option>
                        <option value="medium">Medium</option>
                        <option value="high"> High</option>
                    </select>
                    <input type="date" id="todoDueDate">
                </div>
                <button type="submit" class="btn btn-primary">
                    <span>+</span> Add Todo
                </button>
            </form>
        </div>

        <!-- Filters and Search -->
        <div class="controls">
            <div class="search-box">
                <input 
                    type="text" 
                    id="searchInput" 
                    placeholder="Search todos..."
                >
            </div>
            <div class="filter-buttons">
                <button class="filter-btn active" data-filter="all">All</button>
                <button class="filter-btn" data-filter="active">Active</button>
                <button class="filter-btn" data-filter="completed">Completed</button>
            </div>
            <div class="sort-controls">
                <select id="sortBy">
                    <option value="date-desc">Newest First</option>
                    <option value="date-asc">Oldest First</option>
                    <option value="priority">Priority</option>
                    <option value="due-date">Due Date</option>
                    <option value="alphabetical">A-Z</option>
                </select>
            </div>
        </div>

        <!-- Todo List -->
        <div id="todoList" class="todo-list"></div>

        <!-- Empty State -->
        <div id="emptyState" class="empty-state">
            <div class="empty-icon"></div>
            <h3>No todos yet!</h3>
            <p>Add your first todo to get started</p>
        </div>

        <!-- Footer Actions -->
        <div class="footer-actions">
            <button id="clearCompleted" class="btn btn-danger">
                Clear Completed
            </button>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
```

### CSS Styling

```css
/* styles.css */

:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --success-color: #10b981;
    --danger-color: #ef4444;
    --warning-color: #f59e0b;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --border-color: #e5e7eb;
    --shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --bg-primary: #1f2937;
    --bg-secondary: #111827;
    --border-color: #374151;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
    color: var(--text-primary);
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: var(--bg-primary);
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    overflow: hidden;
}

.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    text-align: center;
    position: relative;
}

.header h1 {
    font-size: 2rem;
    margin: 0;
}

.theme-toggle {
    position: absolute;
    top: 30px;
    right: 30px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s;
}

.theme-toggle:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
}

.stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 30px;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
}

.stat-item {
    text-align: center;
}

.stat-value {
    display: block;
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-color);
}

.stat-label {
    color: var(--text-secondary);
    font-size: 0.875rem;
}

.add-todo-section {
    padding: 30px;
    background: var(--bg-primary);
    border-bottom: 1px solid var(--border-color);
}

.todo-form input[type="text"],
.todo-form select,
.todo-form input[type="date"] {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: all 0.3s;
    margin-bottom: 12px;
}

.todo-form input:focus,
.todo-form select:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 12px;
}

.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    width: 100%;
    margin-top: 12px;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-danger {
    background: var(--danger-color);
    color: white;
}

.btn-danger:hover {
    background: #dc2626;
}

.controls {
    padding: 20px 30px;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
}

.search-box {
    flex: 1;
    min-width: 200px;
}

.search-box input {
    width: 100%;
    padding: 10px 16px;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    background: var(--bg-primary);
    color: var(--text-primary);
}

.filter-buttons {
    display: flex;
    gap: 8px;
    background: var(--bg-primary);
    padding: 4px;
    border-radius: 8px;
}

.filter-btn {
    padding: 8px 16px;
    background: transparent;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: var(--text-secondary);
    font-weight: 500;
    transition: all 0.3s;
}

.filter-btn:hover {
    background: var(--bg-secondary);
}

.filter-btn.active {
    background: var(--primary-color);
    color: white;
}

.sort-controls select {
    padding: 8px 16px;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    background: var(--bg-primary);
    color: var(--text-primary);
    cursor: pointer;
}

.todo-list {
    padding: 20px 30px;
    max-height: 500px;
    overflow-y: auto;
}

.todo-item {
    background: var(--bg-primary);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 12px;
    transition: all 0.3s;
    animation: slideIn 0.3s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.todo-item:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
}

.todo-item.completed {
    opacity: 0.6;
}

.todo-item.completed .todo-title {
    text-decoration: line-through;
}

.todo-header {
    display: flex;
    align-items: start;
    gap: 12px;
    margin-bottom: 8px;
}

.todo-checkbox {
    width: 24px;
    height: 24px;
    cursor: pointer;
    flex-shrink: 0;
    margin-top: 2px;
}

.todo-content {
    flex: 1;
}

.todo-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.todo-description {
    color: var(--text-secondary);
    font-size: 0.875rem;
    margin-bottom: 8px;
}

.todo-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px;
}

.badge {
    display: inline-flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 600;
}

.badge-category {
    background: #dbeafe;
    color: #1e40af;
}

.badge-priority-low {
    background: #d1fae5;
    color: #065f46;
}

.badge-priority-medium {
    background: #fef3c7;
    color: #92400e;
}

.badge-priority-high {
    background: #fee2e2;
    color: #991b1b;
}

.badge-due {
    background: #f3e8ff;
    color: #6b21a8;
}

.todo-actions {
    display: flex;
    gap: 8px;
}

.action-btn {
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.875rem;
    transition: all 0.3s;
}

.action-btn-edit {
    background: #dbeafe;
    color: #1e40af;
}

.action-btn-edit:hover {
    background: #bfdbfe;
}

.action-btn-delete {
    background: #fee2e2;
    color: #991b1b;
}

.action-btn-delete:hover {
    background: #fecaca;
}

.empty-state {
    text-align: center;
    padding: 60px 30px;
    color: var(--text-secondary);
    display: none;
}

.empty-state.show {
    display: block;
}

.empty-icon {
    font-size: 4rem;
    margin-bottom: 16px;
}

.empty-state h3 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: var(--text-primary);
}

.footer-actions {
    padding: 20px 30px;
    background: var(--bg-secondary);
    border-top: 1px solid var(--border-color);
}

@media (max-width: 768px) {
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .controls {
        flex-direction: column;
        align-items: stretch;
    }
    
    .stats {
        grid-template-columns: 1fr;
        gap: 12px;
    }
}
```

### JavaScript Implementation

```javascript
// app.js

class TodoApp {
    constructor() {
        this.todos = this.loadFromStorage();
        this.currentFilter = 'all';
        this.currentSort = 'date-desc';
        this.editingId = null;
        this.init();
    }

    init() {
        this.cacheDOMElements();
        this.attachEventListeners();
        this.renderTodos();
        this.updateStats();
    }

    cacheDOMElements() {
        this.elements = {
            form: document.getElementById('todoForm'),
            titleInput: document.getElementById('todoTitle'),
            descInput: document.getElementById('todoDescription'),
            categorySelect: document.getElementById('todoCategory'),
            prioritySelect: document.getElementById('todoPriority'),
            dueDateInput: document.getElementById('todoDueDate'),
            todoList: document.getElementById('todoList'),
            searchInput: document.getElementById('searchInput'),
            filterButtons: document.querySelectorAll('.filter-btn'),
            sortSelect: document.getElementById('sortBy'),
            clearCompletedBtn: document.getElementById('clearCompleted'),
            themeToggle: document.getElementById('themeToggle'),
            emptyState: document.getElementById('emptyState'),
            totalTodos: document.getElementById('totalTodos'),
            activeTodos: document.getElementById('activeTodos'),
            completedTodos: document.getElementById('completedTodos')
        };
    }

    attachEventListeners() {
        this.elements.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.elements.searchInput.addEventListener('input', () => this.renderTodos());
        this.elements.sortSelect.addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.renderTodos();
        });
        this.elements.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });
        this.elements.clearCompletedBtn.addEventListener('click', () => this.clearCompleted());
        this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const todoData = {
            id: this.editingId || Date.now().toString(),
            title: this.elements.titleInput.value.trim(),
            description: this.elements.descInput.value.trim(),
            category: this.elements.categorySelect.value,
            priority: this.elements.prioritySelect.value,
            dueDate: this.elements.dueDateInput.value,
            completed: false,
            createdAt: this.editingId ? this.todos.find(t => t.id === this.editingId).createdAt : new Date().toISOString()
        };

        if (this.editingId) {
            const index = this.todos.findIndex(t => t.id === this.editingId);
            this.todos[index] = { ...this.todos[index], ...todoData };
            this.editingId = null;
        } else {
            this.todos.push(todoData);
        }

        this.saveToStorage();
        this.renderTodos();
        this.updateStats();
        this.elements.form.reset();
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    toggleTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            this.saveToStorage();
            this.renderTodos();
            this.updateStats();
        }
    }

    deleteTodo(id) {
        if (confirm('Are you sure you want to delete this todo?')) {
            this.todos = this.todos.filter(t => t.id !== id);
            this.saveToStorage();
            this.renderTodos();
            this.updateStats();
        }
    }

    editTodo(id) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            this.elements.titleInput.value = todo.title;
            this.elements.descInput.value = todo.description;
            this.elements.categorySelect.value = todo.category;
            this.elements.prioritySelect.value = todo.priority;
            this.elements.dueDateInput.value = todo.dueDate;
            this.editingId = id;
            this.elements.titleInput.focus();
        }
    }

    handleFilter(e) {
        this.elements.filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        this.currentFilter = e.target.dataset.filter;
        this.renderTodos();
    }

    getFilteredTodos() {
        let filtered = [...this.todos];
        
        const searchTerm = this.elements.searchInput.value.toLowerCase();
        if (searchTerm) {
            filtered = filtered.filter(todo => 
                todo.title.toLowerCase().includes(searchTerm) ||
                todo.description.toLowerCase().includes(searchTerm)
            );
        }

        if (this.currentFilter === 'active') {
            filtered = filtered.filter(todo => !todo.completed);
        } else if (this.currentFilter === 'completed') {
            filtered = filtered.filter(todo => todo.completed);
        }

        return this.sortTodos(filtered);
    }

    sortTodos(todos) {
        const sorted = [...todos];
        
        switch (this.currentSort) {
            case 'date-asc':
                return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            case 'date-desc':
                return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            case 'priority':
                const priorityOrder = { high: 0, medium: 1, low: 2 };
                return sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
            case 'due-date':
                return sorted.sort((a, b) => {
                    if (!a.dueDate) return 1;
                    if (!b.dueDate) return -1;
                    return new Date(a.dueDate) - new Date(b.dueDate);
                });
            case 'alphabetical':
                return sorted.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return sorted;
        }
    }

    renderTodos() {
        const filtered = this.getFilteredTodos();
        
        if (filtered.length === 0) {
            this.elements.todoList.innerHTML = '';
            this.elements.emptyState.classList.add('show');
        } else {
            this.elements.emptyState.classList.remove('show');
            this.elements.todoList.innerHTML = filtered.map(todo => this.createTodoHTML(todo)).join('');
            this.attachTodoEventListeners();
        }
    }

    createTodoHTML(todo) {
        const categoryIcons = {
            work: '',
            personal: '',
            shopping: '',
            health: '',
            other: ''
        };

        const dueDateText = todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : '';
        
        return `
            <div class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
                <div class="todo-header">
                    <input 
                        type="checkbox" 
                        class="todo-checkbox" 
                        ${todo.completed ? 'checked' : ''}
                        data-action="toggle"
                    >
                    <div class="todo-content">
                        <div class="todo-title">${this.escapeHTML(todo.title)}</div>
                        ${todo.description ? `<div class="todo-description">${this.escapeHTML(todo.description)}</div>` : ''}
                        <div class="todo-meta">
                            <span class="badge badge-category">
                                ${categoryIcons[todo.category]} ${todo.category}
                            </span>
                            <span class="badge badge-priority-${todo.priority}">
                                ${todo.priority}
                            </span>
                            ${todo.dueDate ? `<span class="badge badge-due"> ${dueDateText}</span>` : ''}
                        </div>
                        <div class="todo-actions">
                            <button class="action-btn action-btn-edit" data-action="edit">
                                 Edit
                            </button>
                            <button class="action-btn action-btn-delete" data-action="delete">
                                 Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    attachTodoEventListeners() {
        this.elements.todoList.querySelectorAll('.todo-item').forEach(item => {
            const id = item.dataset.id;
            
            item.querySelector('[data-action="toggle"]').addEventListener('click', () => this.toggleTodo(id));
            item.querySelector('[data-action="edit"]').addEventListener('click', () => this.editTodo(id));
            item.querySelector('[data-action="delete"]').addEventListener('click', () => this.deleteTodo(id));
        });
    }

    clearCompleted() {
        if (confirm('Clear all completed todos?')) {
            this.todos = this.todos.filter(todo => !todo.completed);
            this.saveToStorage();
            this.renderTodos();
            this.updateStats();
        }
    }

    updateStats() {
        const total = this.todos.length;
        const active = this.todos.filter(t => !t.completed).length;
        const completed = total - active;

        this.elements.totalTodos.textContent = total;
        this.elements.activeTodos.textContent = active;
        this.elements.completedTodos.textContent = completed;
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        this.elements.themeToggle.textContent = newTheme === 'dark' ? '' : '';
        localStorage.setItem('theme', newTheme);
    }

    escapeHTML(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    saveToStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromStorage() {
        const stored = localStorage.getItem('todos');
        const theme = localStorage.getItem('theme');
        
        if (theme) {
            document.documentElement.setAttribute('data-theme', theme);
            document.getElementById('themeToggle').textContent = theme === 'dark' ? '' : '';
        }
        
        return stored ? JSON.parse(stored) : [];
    }
}

const app = new TodoApp();
```

## Features Implemented

**CRUD Operations:** Complete Create, Read, Update, Delete functionality

**Data Persistence:** Local storage saves all todos between sessions

**Filtering:** View all, active, or completed todos

**Sorting:** Multiple sort options including date, priority, alphabetical

**Search:** Real-time search through todos

**Categories:** Organize todos by category with icons

**Priorities:** Three priority levels with color coding

**Due Dates:** Set and display due dates

**Dark Mode:** Toggle between light and dark themes

**Statistics:** Live counters for total, active, and completed todos

**Responsive Design:** Works on mobile, tablet, and desktop

**Animations:** Smooth transitions and hover effects

## Testing Checklist

- [ ] Can add todos with all fields
- [ ] Can edit existing todos
- [ ] Can delete todos
- [ ] Can toggle completion status
- [ ] Search works correctly
- [ ] All filters work (All, Active, Completed)
- [ ] All sort options work correctly
- [ ] Clear completed removes only completed todos
- [ ] Dark mode toggles correctly
- [ ] Statistics update in real-time
- [ ] Data persists after page reload
- [ ] Works on mobile devices
- [ ] No console errors

## Bonus Features to Add

**Easy:**
- Add todo count per category
- Export todos as JSON

**Medium:**
- Add recurring todos
- Implement drag-and-drop reordering
- Add subtasks to todos

**Hard:**
- Add cloud sync with backend
- Implement collaborative todos
- Add reminders and notifications

## Learning Resources

- [MDN Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JavaScript DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [CSS Grid & Flexbox](https://css-tricks.com/snippets/css/complete-guide-grid/)