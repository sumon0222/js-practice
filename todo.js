// script.js

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let filterStatus = 'all';

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskPriority = document.getElementById("taskPriority");

    const task = {
        id: Date.now(),
        text: taskInput.value,
        dueDate: taskDate.value,
        priority: taskPriority.value,
        completed: false
    };

    if (task.text.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    tasks.push(task);
    saveTasks();
    renderTasks();

    // Clear input fields after adding the task
    taskInput.value = "";
    taskDate.value = "";
}

// Function to save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to render tasks
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        if (filterStatus === 'active') return !task.completed;
        if (filterStatus === 'completed') return task.completed;
        return true; // 'all'
    });

    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        li.className = task.completed ? 'completed' : '';

        const span = document.createElement("span");
        span.textContent = `${task.text} - Due: ${task.dueDate} - Priority: ${task.priority}`;
        li.appendChild(span);

        const completeIcon = document.createElement("span");
        completeIcon.textContent = task.completed ? '✔️' : '⭕';
        completeIcon.className = 'completed-icon';
        completeIcon.onclick = function() {
            toggleComplete(task.id);
        };
        li.insertBefore(completeIcon, span);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            removeTask(task.id);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Function to toggle task completion
function toggleComplete(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            task.completed = !task.completed;
        }
        return task;
    });
    saveTasks();
    renderTasks();
}

// Function to remove a task
function removeTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    renderTasks();
}

// Function to filter tasks
function filterTasks(status) {
    filterStatus = status;
    renderTasks();
}

// Initial render of tasks
renderTasks();
