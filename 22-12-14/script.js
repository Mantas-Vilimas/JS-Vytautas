const inputEl = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-btn");
const todoListEl = document.querySelector("#todo-list");
const doneListEl = document.querySelector("#done-list");

todoButton.addEventListener("click", addToDo);

function addToDo() {
  inputEl.style.border = "1px solid black";
  const inputValue = inputEl.value;
  if (!inputValue) {
    inputEl.style.border = "1px solid red";
    return;
  }
  inputEl.value = "";
  todoListEl.append(createNewToDo(inputValue));
}

function createNewToDo(text) {
  const textNode = document.createTextNode("text");
  const newToDo = document.createElement("li");
  const doneButton = document.createElement("button");
  doneButton.textContent = "V";
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  newToDo.append(textNode, doneButton, deleteButton);

  function deleteToDo() {
    newToDo.remove();
  }

  deleteButton.addEventListener("click", deleteToDo);
  doneButton.addEventListener("click", function () {
    deleteToDo();
    createNewDone(text);
  });
  return newToDo;
}

function createNewDone(title) {
  const newdoneElement = document.createElement("li");
  const textNode = document.createTextNode(title);
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  newdoneElement.append(textNode, deleteButton);
  doneListEl.append(newdoneElement);

  function deleteDoneToDo() {
    doneListEl.remove();
  }
  deleteButton.addEventListener("click", deleteDoneToDo);
}
