// This function is going to add a new task to the list
const addTask = () => {
    // Reference input elements
    let taskTitle = document.getElementById('taskTitle');
    let taskUser = document.getElementById('taskUser');
    let describeTask = document.getElementById('describeTask');
    // Reference the list of tasks
    let taskList = document.getElementById('taskList');

    // Validation
    if (taskTitle.value !== '') {
        // Create new li element
        let task = document.createElement('li');
        // Set HTML content to li element
        task.innerHTML = `
        <div>
        <p>${taskTitle.value} - by: ${taskUser.value} </p>
        <p>${describeTask.value}</p>
        </div>`;
        // Add this element to the list
        taskList.appendChild(task);
        // Clear the input values
        taskTitle.value = "";
        taskUser.value = "";
        describeTask.value = "";
    } else {
        alert('Please enter a task');
    }
};

// Reference my button
let btn = document.getElementById('btn');
// Add event listener
btn.addEventListener('click', addTask);
