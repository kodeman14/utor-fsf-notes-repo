var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = []; // empty array

// TODO: What is the purpose of this function?
// -> shows the list of todos (along with buttons)
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // -> give an empty string to todolist (ul)
  // -> give a number value to the list (how many)
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // TODO: Describe the functionality of the following `for` loop.
  // creating a list of todos, as many times as you enter todos
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i]; // from storage

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// when we load/init the page, call this function
function init() {
  console.log("i am here");
  // TODO: What is the purpose of the following line of code?
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  if (storedTodos !== null) {
    todos = storedTodos; // storage
  }
  // TODO: Describe the purpose of the following line of code.
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem("todos", JSON.stringify(todos));
}

// TODO: Describe the purpose of the following line of code.
// when we submit the form, it will display the todo
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    console.log("empty text");
    return; // go back to the start -> do nothing
  }
  // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText); // adds to the array
  todoInput.value = ""; // makes the input empty

  // TODO: What will happen when the following functions are called?
  storeTodos(); // sending to local storage
  renderTodos(); // rendering it to the page
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function (event) {
  console.log("list clicked");
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1); // -> removes that box you clicked
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
