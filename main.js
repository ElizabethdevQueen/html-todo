// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")


// EVENT LISTENERS
// todoButton.addEventListener('click', addTodo);
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo)

// FUNCTIONS
function addTodo(event){
    // preventing form from submitting
    event.preventDefault();

    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create list item (li)
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //ADD TODOS TO LOCAL STORAGE
    saveLocalTodos(todoInput.value);

    // check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild("completedButton");

    // check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild("trashButton");

    // append to list
    todoList.appendChild(todoDiv);
}

