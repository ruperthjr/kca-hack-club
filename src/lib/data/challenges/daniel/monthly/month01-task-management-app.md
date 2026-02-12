---
title: "Production-Ready Task Management Web Application"
description: "Full-featured CRUD task manager with localStorage persistence, filtering, and vanilla JavaScript"
difficulty: "intermediate"
month: 1
technologies:
  - "HTML5"
  - "CSS3"
  - "Vanilla JavaScript (ES6+)"
  - "LocalStorage API"
  - "DOM Manipulation"
  - "Event Handling"
learningOutcomes:
  - "Build complete CRUD (Create, Read, Update, Delete) application"
  - "Implement browser storage with localStorage"
  - "Master DOM manipulation and event handling"
  - "Create dynamic, interactive user interfaces"
  - "Handle application state management"
estimatedTime: "12-16 hours"
requirements:
  - "Modern web browser with localStorage support"
  - "Text editor (VS Code recommended)"
  - "Basic JavaScript knowledge"
  - "Understanding of arrays and objects"
deliverables:
  - "Functional task management web application"
  - "CRUD operations (Create, Read, Update, Delete)"
  - "LocalStorage data persistence"
  - "Filter and search functionality"
  - "Responsive design"
  - "GitHub repository with documentation"
resources:
    - name: "MDN: Web Storage API"
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API"
    - name: "JavaScript.info: DOM Manipulation"
      url: "https://javascript.info/dom-nodes"
    - name: "MDN: Array Methods"
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
    - name: "A Complete Guide to Flexbox"
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
    - name: "MDN: Handling Events"
      url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events"

completed: false
completedDate: ""
watermarkStyle: "diagonal"
dateAdded: "2026-02-09"
unlockDate: "2026-02-09"
---

# Production-Ready Task Management Web Application

## Project Overview

Build a full-featured task management application using vanilla JavaScript that allows users to create, read, update, and delete tasks with data persistence using the browser's localStorage API. This project will teach you fundamental concepts of web application development, state management, and CRUD operations.

## Core Features

### 1. Task CRUD Operations

**Create:**
- Add new tasks with title and description
- Set priority levels (Low, Medium, High)
- Assign due dates
- Add optional tags/categories

**Read:**
- Display all tasks in organized lists
- View task details
- Show task count and statistics

**Update:**
- Edit task title, description, priority
- Mark tasks as complete/incomplete
- Change due dates
- Toggle task status

**Delete:**
- Remove individual tasks
- Bulk delete completed tasks
- Delete all tasks (with confirmation)

### 2. Data Persistence
- Save tasks to localStorage
- Load tasks on page load
- Automatic save on every change
- Data survives page refresh

### 3. Filtering & Search

**Filter Options:**
- All tasks
- Active (incomplete) tasks
- Completed tasks
- By priority (High, Medium, Low)
- By due date (Today, This Week, Overdue)

**Search:**
- Real-time search as you type
- Search by task title
- Search by description
- Search by tags

### 4. Additional Features
- Sort tasks (by date, priority, alphabetically)
- Task counter (total, active, completed)
- Clear completed tasks button
- Responsive design (mobile-friendly)
- Smooth animations and transitions
- Form validation

## Technical Specifications

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Task Manager Pro</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="container">
    <!-- Header -->
    <header class="app-header">
      <h1>📝 Task Manager</h1>
      <div class="task-stats">
        <span id="totalTasks">Total: 0</span>
        <span id="activeTasks">Active: 0</span>
        <span id="completedTasks">Completed: 0</span>
      </div>
    </header>

    <!-- Controls -->
    <div class="controls">
      <div class="filters">
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="active">Active</button>
        <button class="filter-btn" data-filter="completed">Completed</button>
      </div>
      
      <div class="search-bar">
        <input type="text" id="searchInput" placeholder="Search tasks...">
      </div>
      
      <div class="sort-options">
        <select id="sortSelect">
          <option value="date-desc">Newest First</option>
          <option value="date-asc">Oldest First</option>
          <option value="priority">Priority</option>
          <option value="alpha">Alphabetical</option>
        </select>
      </div>
    </div>

    <!-- Task Form -->
    <div class="task-form-container">
      <form id="taskForm">
        <input 
          type="text" 
          id="taskTitle" 
          placeholder="Task title..." 
          required
        >
        <textarea 
          id="taskDescription" 
          placeholder="Task description (optional)"
          rows="3"
        ></textarea>
        
        <div class="form-row">
          <select id="taskPriority" required>
            <option value="">Select Priority</option>
            <option value="low">🟢 Low</option>
            <option value="medium">🟡 Medium</option>
            <option value="high">🔴 High</option>
          </select>
          
          <input type="date" id="taskDueDate">
          
          <input 
            type="text" 
            id="taskTags" 
            placeholder="Tags (comma-separated)"
          >
        </div>
        
        <div class="form-actions">
          <button type="submit" class="btn btn-primary" id="addTaskBtn">
            ➕ Add Task
          </button>
          <button type="button" class="btn btn-secondary" id="cancelBtn" style="display:none;">
            Cancel
          </button>
        </div>
      </form>
    </div>

    <!-- Task List -->
    <div class="task-list" id="taskList">
      <!-- Tasks will be dynamically inserted here -->
    </div>

    <!-- Empty State -->
    <div class="empty-state" id="emptyState">
      <p>No tasks found. Add your first task to get started!</p>
    </div>

    <!-- Bulk Actions -->
    <div class="bulk-actions">
      <button class="btn btn-danger" id="clearCompletedBtn">
        🗑️ Clear Completed
      </button>
      <button class="btn btn-danger" id="deleteAllBtn">
        ⚠️ Delete All Tasks
      </button>
    </div>
  </div>

  <script src="js/app.js"></script>
</body>
</html>
```

### CSS Styling (Key Components)

```css
/* styles.css */
:root {
  --primary-color: #4f46e5;
  --secondary-color: #0ea5e9;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --danger-color: #ef4444;
  --dark: #1f2937;
  --light: #f3f4f6;
  --white: #ffffff;
  --border: #e5e7eb;
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: var(--white);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Task Card */
.task-item {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.task-item:hover {
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.task-item.completed {
  opacity: 0.6;
  background: var(--light);
}

.task-item.completed .task-title {
  text-decoration: line-through;
  color: #6b7280;
}

/* Priority Badges */
.priority-badge {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.priority-high {
  background: #fee2e2;
  color: #991b1b;
}

.priority-medium {
  background: #fef3c7;
  color: #92400e;
}

.priority-low {
  background: #d1fae5;
  color: #065f46;
}

/* Responsive Design */
@media (max-width: 768px) {
  .controls {
    flex-direction: column;
  }
  
  .form-row {
    flex-direction: column;
  }
  
  .task-actions {
    flex-direction: column;
    width: 100%;
  }
}
```

### JavaScript Application Logic

```javascript
// app.js

class TaskManager {
  constructor() {
    this.tasks = [];
    this.currentFilter = 'all';
    this.currentSort = 'date-desc';
    this.editingTaskId = null;
    this.init();
  }

  init() {
    this.loadTasks();
    this.attachEventListeners();
    this.renderTasks();
    this.updateStats();
  }

  // LocalStorage Operations
  loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks);
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  // CRUD Operations
  addTask(taskData) {
    const task = {
      id: Date.now().toString(),
      title: taskData.title,
      description: taskData.description || '',
      priority: taskData.priority,
      dueDate: taskData.dueDate || null,
      tags: taskData.tags || [],
      completed: false,
      createdAt: new Date().toISOString()
    };

    this.tasks.unshift(task);
    this.saveTasks();
    this.renderTasks();
    this.updateStats();
    this.showNotification('Task added successfully!', 'success');
  }

  updateTask(id, updates) {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updates };
      this.saveTasks();
      this.renderTasks();
      this.updateStats();
      this.showNotification('Task updated!', 'success');
    }
  }

  deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.saveTasks();
      this.renderTasks();
      this.updateStats();
      this.showNotification('Task deleted!', 'info');
    }
  }

  toggleTaskComplete(id) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
      this.renderTasks();
      this.updateStats();
    }
  }

  // Filtering and Sorting
  getFilteredTasks() {
    let filtered = [...this.tasks];

    // Apply filter
    switch (this.currentFilter) {
      case 'active':
        filtered = filtered.filter(task => !task.completed);
        break;
      case 'completed':
        filtered = filtered.filter(task => task.completed);
        break;
      case 'all':
      default:
        break;
    }

    // Apply search
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchTerm) ||
        task.description.toLowerCase().includes(searchTerm) ||
        task.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    // Apply sort
    switch (this.currentSort) {
      case 'date-asc':
        filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case 'date-desc':
        filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        filtered.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
        break;
      case 'alpha':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }

  // Rendering
  renderTasks() {
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');
    const filteredTasks = this.getFilteredTasks();

    if (filteredTasks.length === 0) {
      taskList.style.display = 'none';
      emptyState.style.display = 'block';
      return;
    }

    taskList.style.display = 'block';
    emptyState.style.display = 'none';

    taskList.innerHTML = filteredTasks.map(task => this.createTaskHTML(task)).join('');
  }

  createTaskHTML(task) {
    const priorityClass = `priority-${task.priority}`;
    const completedClass = task.completed ? 'completed' : '';
    const dueDateDisplay = task.dueDate 
      ? `📅 ${new Date(task.dueDate).toLocaleDateString()}` 
      : '';

    return `
      <div class="task-item ${completedClass}" data-id="${task.id}">
        <input 
          type="checkbox" 
          class="task-checkbox" 
          ${task.completed ? 'checked' : ''}
          onchange="taskManager.toggleTaskComplete('${task.id}')"
        >
        
        <div class="task-content">
          <h3 class="task-title">${this.escapeHTML(task.title)}</h3>
          ${task.description ? `<p class="task-description">${this.escapeHTML(task.description)}</p>` : ''}
          
          <div class="task-meta">
            <span class="priority-badge ${priorityClass}">
              ${task.priority.toUpperCase()}
            </span>
            ${dueDateDisplay ? `<span class="due-date">${dueDateDisplay}</span>` : ''}
            ${task.tags.length > 0 ? `
              <div class="task-tags">
                ${task.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
              </div>
            ` : ''}
          </div>
        </div>
        
        <div class="task-actions">
          <button class="btn-icon" onclick="taskManager.editTask('${task.id}')" title="Edit">
            ✏️
          </button>
          <button class="btn-icon" onclick="taskManager.deleteTask('${task.id}')" title="Delete">
            🗑️
          </button>
        </div>
      </div>
    `;
  }

  // Event Listeners
  attachEventListeners() {
    // Form submission
    document.getElementById('taskForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.handleFilterChange(e.target.dataset.filter);
      });
    });

    // Search input
    document.getElementById('searchInput').addEventListener('input', () => {
      this.renderTasks();
    });

    // Sort select
    document.getElementById('sortSelect').addEventListener('change', (e) => {
      this.currentSort = e.target.value;
      this.renderTasks();
    });

    // Clear completed
    document.getElementById('clearCompletedBtn').addEventListener('click', () => {
      this.clearCompleted();
    });

    // Delete all
    document.getElementById('deleteAllBtn').addEventListener('click', () => {
      this.deleteAll();
    });
  }

  handleFormSubmit() {
    const title = document.getElementById('taskTitle').value.trim();
    const description = document.getElementById('taskDescription').value.trim();
    const priority = document.getElementById('taskPriority').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const tagsInput = document.getElementById('taskTags').value.trim();
    const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : [];

    if (!title || !priority) {
      this.showNotification('Please fill in required fields!', 'error');
      return;
    }

    if (this.editingTaskId) {
      this.updateTask(this.editingTaskId, { title, description, priority, dueDate, tags });
      this.editingTaskId = null;
      document.getElementById('addTaskBtn').textContent = '➕ Add Task';
      document.getElementById('cancelBtn').style.display = 'none';
    } else {
      this.addTask({ title, description, priority, dueDate, tags });
    }

    document.getElementById('taskForm').reset();
  }

  // Helper Methods
  updateStats() {
    const total = this.tasks.length;
    const completed = this.tasks.filter(t => t.completed).length;
    const active = total - completed;

    document.getElementById('totalTasks').textContent = `Total: ${total}`;
    document.getElementById('activeTasks').textContent = `Active: ${active}`;
    document.getElementById('completedTasks').textContent = `Completed: ${completed}`;
  }

  escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  showNotification(message, type = 'info') {
    // Simple notification implementation
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  clearCompleted() {
    if (confirm('Clear all completed tasks?')) {
      this.tasks = this.tasks.filter(task => !task.completed);
      this.saveTasks();
      this.renderTasks();
      this.updateStats();
      this.showNotification('Completed tasks cleared!', 'success');
    }
  }

  deleteAll() {
    if (confirm('⚠️ This will delete ALL tasks. Are you absolutely sure?')) {
      this.tasks = [];
      this.saveTasks();
      this.renderTasks();
      this.updateStats();
      this.showNotification('All tasks deleted!', 'warning');
    }
  }
}

// Initialize app
const taskManager = new TaskManager();
```

## Project Structure

```
task-manager/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── images/
│   └── screenshot.png
├── README.md
└── .gitignore
```

## Evaluation Criteria

**Functionality (35%):**
- All CRUD operations work correctly
- LocalStorage persistence functions
- Filtering and search work
- Form validation present
- No console errors

**Code Quality (25%):**
- Clean, readable JavaScript
- Proper code organization
- Meaningful variable names
- Comments where needed
- ES6+ features used

**User Interface (20%):**
- Clean, intuitive design
- Responsive layout
- Smooth animations
- Good UX (feedback, confirmations)
- Accessibility considerations

**Features (15%):**
- All required features implemented
- Bonus features added
- Edge cases handled
- Error handling present

**Documentation (5%):**
- Clear README
- Code comments
- Setup instructions

## Required Deliverables

1. **GitHub Repository** with:
   - Complete source code
   - README.md documentation
   - Screenshot of application
   - .gitignore file

2. **README.md** must include:
   - Project description
   - Features list
   - Technologies used
   - Setup instructions
   - Usage guide
   - Screenshots

## Bonus Features

- **Categories/Projects:** Organize tasks into projects
- **Drag & Drop:** Reorder tasks with drag and drop
- **Export/Import:** Download/upload tasks as JSON
- **Themes:** Light/dark mode toggle
- **Keyboard Shortcuts:** Add keyboard navigation
- **Statistics:** Charts showing task completion
- **Recurring Tasks:** Set tasks to repeat
- **Subtasks:** Add nested subtasks

## Common Mistakes to Avoid

- Not validating form inputs
- Forgetting to save to localStorage
- Not handling edge cases (empty lists, etc.)
- Poor error handling
- Not escaping user input (XSS vulnerability)
- Not testing on different screen sizes
- Inconsistent code style
- No user feedback (loading states, confirmations)

## Testing Checklist

- [ ] Add task with all fields
- [ ] Add task with minimal fields
- [ ] Edit existing task
- [ ] Delete task
- [ ] Toggle task completion
- [ ] Filter by all/active/completed
- [ ] Search tasks
- [ ] Sort tasks
- [ ] Clear completed tasks
- [ ] Delete all tasks
- [ ] Refresh page (data persists)
- [ ] Test on mobile device
- [ ] Test form validation
- [ ] Test edge cases (empty, special characters)

## Tips for Success

1. **Start Simple:** Get basic add/delete working first
2. **Test Often:** Test after each feature implementation
3. **Console.log:** Use to debug localStorage and state
4. **Git Commits:** Commit after each working feature
5. **Mobile First:** Design for mobile, then desktop
6. **User Feedback:** Always show success/error messages

This project will solidify your JavaScript fundamentals and give you a portfolio-worthy application!