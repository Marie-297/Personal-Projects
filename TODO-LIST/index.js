const todoList = [];
displayTodo();
function displayTodo() {
  let display = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const name = todo.name;
    const dueDate = todo.dueDate;
    const html = `<div>${name}</div><div>${dueDate}</div>
    <button onclick="
      todoList.splice(${i}, 1);
      displayTodo();
    " class="del-btn">Delete</button>`;
    display = display + html;
  }
document.querySelector(".list").innerHTML = display
}

function addTodo() {
  const inputElement = document.querySelector(".todo_input");
  const element = inputElement.value;
  const dateInputElement = document.querySelector(".due-date");
  const dueDate = dateInputElement.value;

  todoList.push({name: element, dueDate: dueDate});
  console.log(todoList);
  inputElement.value = '';
  dateInputElement.value = '';

  displayTodo();
}