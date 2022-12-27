const newKeyInput = document.querySelector("#key");
const valueInput = document.querySelector("#value");
const existingKeysInput = document.querySelector("#existing-keys");
const updateButton = document.querySelector("#update-btn");
const select = document.querySelector("#existing-keys");
const textArea = document.querySelector("#result-display");
const keyCreation = {};

updateButton.addEventListener("click", updateKeys);

function updateKeys() {
  select.removeAttribute("disabled");
  if (!keyCreation[newKeyInput.value]) {
    keyCreation[newKeyInput.value] = valueInput.value;
    createKeysOption();
    updateResult();
  } else {
    keyCreation[select.value] = valueInput.value;
    updateResult();
  }
}

function createKeysOption() {
  const newOption = document.createElement("option");
  newOption.textContent = newKeyInput.value;
  select.append(newOption);
}

function updateResult() {
  textArea.textContent = JSON.stringify(keyCreation);
}
