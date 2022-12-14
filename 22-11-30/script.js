const displayElement = document.querySelector("#display");
let temporaryValue;
let operationType;

function call1() {
  const value = 1;
  displayElement.innerText += value;
}

function call2() {
  const value = 2;
  displayElement.innerText += value;
}

function call3() {
  const value = 3;
  displayElement.innerText += value;
}

function call4() {
  const value = 4;
  displayElement.innerText += value;
}

function call5() {
  const value = 5;
  displayElement.innerText += value;
}

function call6() {
  const value = 6;
  displayElement.innerText += value;
}

function call7() {
  const value = 7;
  displayElement.innerText += value;
}

function call8() {
  const value = 8;
  displayElement.innerText += value;
}

function call9() {
  const value = 9;
  displayElement.innerText += value;
}

function call0() {
  const value = 0;
  displayElement.innerText += value;
}

function saveValue() {
  if (
    typeof temporaryValue === "number" &&
    typeof operationType !== "undefined"
  ) {
    let result;

    if (operationType === "multiply") {
      result = Number(displayElement.innerText) * temporaryValue;
    } else if (operationType === "divide") {
      result = temporaryValue / Number(displayElement.innerText);
    } else if (operationType === "add") {
      result = temporaryValue + Number(displayElement.innerText);
    } else if (operationType === "substract") {
      result = temporaryValue - Number(displayElement.innerText);
    }
    temporaryValue = result;
  } else {
    temporaryValue = Number(displayElement.innerText);
  }
}

function multiply() {
  saveValue();
  displayElement.innerText = "";
  operationType = "multiply";
}

function divide() {
  saveValue();
  displayElement.innerText = "";
  operationType = "divide";
}

function add() {
  saveValue();
  displayElement.innerText = "";
  operationType = "add";
}

function substract() {
  saveValue();
  displayElement.innerText = "";
  operationType = "substract";
}

function calculateResult() {
  let result;

  if (operationType === "multiply") {
    result = Number(displayElement.innerText) * temporaryValue;
  } else if (operationType === "divide") {
    result = temporaryValue / Number(displayElement.innerText);
  } else if (operationType === "add") {
    result = temporaryValue + Number(displayElement.innerText);
  } else if (operationType === "substract") {
    result = temporaryValue - Number(displayElement.innerText);
  }

  displayElement.innerText = result;
  temporaryValue = undefined;
  operationType = undefined;
}

function clearResult() {
  displayElement.innerText = "";
  temporaryValue = undefined;
  operationType = undefined;
}
