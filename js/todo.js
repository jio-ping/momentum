const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
let toDos = [];
const TODOS_KEY = "todos";
const savedToDos = localStorage.getItem(TODOS_KEY);

const user = localStorage.getItem("username");

// const XICON = <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
// <path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "completeCheckbox";

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "X";

  checkbox.addEventListener("click", complete);
  button.addEventListener("click", deleteToDo);
  li.appendChild(checkbox);
  li.appendChild(span); //li는 span 자식을 갖게됨
  li.appendChild(button);

  if (newTodo.complete == true) {
    li.classList.add("complete");
    li.removeChild(checkbox);
  }

  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
    complete: false,
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  // 기본적으로 paintToDo를 실행하고 item이 object가 되는거임!!
  parsedToDos.forEach(paintToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if (user == null) {
  toDoForm.classList.add("hidden");
  toDoList.classList.add("hidden");
}

function complete(event) {
  const li = event.target.parentElement;
  const checkBox = document.getElementById("completeCheckbox");
  if (checkBox.checked) {
    toDos = toDos.filter((toDo) => {
      if (toDo.id == parseInt(li.id)) {
        toDo.complete = true;
        li.classList.add("complete");
      }
      return toDo;
    });
    console.log("checked!");
  } else {
    li.classList.remove("complete");
  }
  saveToDos();
}
