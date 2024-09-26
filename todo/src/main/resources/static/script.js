const todoList = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    fetch('/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
    })
        .then(response => response.json())
        .then(data => {
            const todoItem = document.createElement('li');
            todoItem.textContent = `${data.title} - ${data.description}`;
            todoList.appendChild(todoItem);
            document.getElementById('title').value = '';
            document.getElementById('description').value = '';
        });
});

fetch('/api/todos')
    .then(response => response.json())
    .then(data => {
        data.forEach(todo => {
            const todoItem = document.createElement('li');
            todoItem.textContent = `${todo.title} - ${todo.description}`;
            todoList.appendChild(todoItem);
        });
    });