const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

let todos = [];

function renderTodos() {
  list.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${todo}</span>
      <button class="delete" data-index="${index}">Delete</button>
    `;
    list.appendChild(li);
  });
}

function addTodo() {
  const newTodo = input.value.trim();
  if (newTodo !== '') {
    todos.push(newTodo);
    renderTodos();
    input.value = '';
  }
}

function deleteTodoByIndex(index) {
  todos.splice(index, 1);
  renderTodos();
}

function handleDeleteClick(event) {
  if (event.target.classList.contains('delete')) {
    const index = event.target.dataset.index;
    deleteTodoByIndex(index);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault();
  addTodo();
});

list.addEventListener('click', handleDeleteClick);