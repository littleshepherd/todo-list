const todos = [];
window.onload = () => {
    const render = () => {
        const todoList = document.getElementById('todo-list');
        const todoTemplate = todos.map(t => '<li>' + t + '</li>')
        todoList.innerHTML = todoTemplate.join('');
        console.log(todoTemplate);
        const elementos = document.querySelectorAll('#todo-list li')
        elementos.forEach((elemento, i) => {
            elemento.addEventListener('click', () => {
                elemento.parentNode.removeChild(elemento)
                todos.splice(i, 1);
                render();
            })
        })
    }
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        render();
    }
}