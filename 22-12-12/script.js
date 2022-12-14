const selectElement = document.querySelector("#ice-cream");

function selectListener(event) {
  console.log("event", event);
  console.log("event.target", event.target);
  console.log("event.target.value", event.target.value);
  console.log("selectElement", selectElement);
}

selectElement.addEventListener("change", selectListener);

window.addEventListener("resize", function (evt) {
  console.log("resize");
});

const ageSelect = document.querySelector("#age");
const genderSelect = document.querySelector("#gender");
const changeLog = document.querySelector("#change-log");

function changeListener(event) {
  const selectName = event.target.name;
  const selectValue = event.target.value;

  const text = `User has changed ${selectName} select with a value ${selectValue}`;
  changeLog.innerText += "\n" + text;
}

ageSelect.addEventListener("change", changeListener);
genderSelect.addEventListener("change", changeListener);

let x, y, sum;
x = 2;
y = 3;

function add() {
  sum = x + y;
}

const firstNumber = document.querySelector("#first-number");
const secondNumber = document.querySelector("#second-number");
const result = document.querySelector("#result");
const multiplyBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");

multiplyBtn.addEventListener("click", function () {
  const firstValue = getElementValue(firstNumber);
  const secondValue = getElementValue(secondNumber);
  result.innerText = multiply(firstValue, secondValue);
});

divideBtn.addEventListener("click", function () {
  const firstValue = getElementValue(firstNumber);
  const secondValue = getElementValue(secondNumber);
  result.innerText = divide(firstValue, secondValue);
});

function getElementValue(element) {
  const elementValue = Number(element.value);
  return elementValue;
}
function multiply(firstValue, secondValue) {
  return firstValue * secondValue;
}

function divide(firstValue, secondValue) {
  return firstValue / secondValue;
}
