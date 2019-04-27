// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const submitBtn = document.getElementById('submitBtn');

// Load event listeners
loadAllEventListeners();
// Load event listeners
function loadAllEventListeners() {
    // Add task
    form.addEventListener('submit', addTask);
}

function addTask(e) {
    if(taskInput.value === '') {
        alert('Please add a task')
    }
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input 
    taskInput.value = '';

    e.preventDefault();
}

console.log('Loaded')