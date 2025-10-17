// Database Simulation
let tasksDb = [];

// Add Functionality
function addTask() {
    // Get Input Values
    const taskInput = document.getElementById('todo-input');
    const taskDate = document.getElementById('todo-date');

    // Validate Input
    if (validateInput(taskInput.value, taskDate.value)) {
        // Create Task Object
        const newTask = {
            task: taskInput.value,
            date: taskDate.value,
        }
        
        // Add to database
        tasksDb.push(newTask);
        // Render
        renderTasks();
        }
}

// Render Functionality
function renderTasks() {
    // Clear Existing List
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    // Render Each Task
    tasksDb.forEach((taskObj, index) => {
        taskList.innerHTML += `<li>${taskObj.task} - ${taskObj.date}</li>`;
    });
}

// Delete All Functionality
function deletedAlltask() {
    // Clear Database
    tasksDb = [];

    
    // Render
    renderTasks();
}

// Filter Functionality (Placeholder)
function filterTask() {}

// Input Validation
function validateInput(task, date) {
    // Simple Validation
    if (task.trim() === '' || date.trim() === '') {
        alert('Please enter both task and due date.');
        return false;
    }
    return true;
}