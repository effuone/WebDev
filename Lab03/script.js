const newTaskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const filterButtons = document.querySelectorAll('.filter-btn');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let currentFilter = 'all';

renderTasks();

addButton.addEventListener('click', addTask);
newTaskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    currentFilter = button.getAttribute('data-filter');
    renderTasks();
  });
});

function addTask() {
  const taskText = newTaskInput.value.trim();

  if (taskText !== '') {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();

    newTaskInput.value = '';
    newTaskInput.focus();
  }
}

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed,
      };
    }
    return task;
  });

  saveTasks();
  renderTasks();
}

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  todoList.innerHTML = '';

  let filteredTasks = tasks;
  if (currentFilter === 'active') {
    filteredTasks = tasks.filter((task) => !task.completed);
  } else if (currentFilter === 'completed') {
    filteredTasks = tasks.filter((task) => task.completed);
  }

  if (filteredTasks.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.className = 'empty-list';
    emptyMessage.textContent = 'No tasks to show';
    todoList.appendChild(emptyMessage);
    return;
  }

  filteredTasks.forEach((task) => {
    const taskItem = document.createElement('li');
    taskItem.className = task.completed ? 'todo-item checked' : 'todo-item';

    taskItem.innerHTML = `
              <div class="todo-item-left">
                  <input type="checkbox" class="todo-checkbox" ${
                    task.completed ? 'checked' : ''
                  }>
                  <span class="todo-text">${task.text}</span>
              </div>
              <button class="delete-btn">×</button>
          `;

    const checkbox = taskItem.querySelector('.todo-checkbox');
    checkbox.addEventListener('change', () => toggleTask(task.id));

    const deleteBtn = taskItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(task.id));

    todoList.appendChild(taskItem);
  });
}
