const firstStepContainer = document.querySelector(".first-step");
const secondStepContainer = document.querySelector(".second-step");
const thirdStepContainer = document.querySelector(".third-step");
const fourthStepContainer = document.querySelector(".fourth-step");
const continueButton = document.querySelector("#continue-button");
const backButton = document.querySelector("#back-button");
const form = document.querySelector("form");

secondStepContainer.style.display = "none";
thirdStepContainer.style.display = "none";
fourthStepContainer.style.display = "none";
backButton.style.display = "none";

const step0 = { step: 0 };
// const step1 = { step: 1 };
// const step2 = { step: 2 };
// const step3 = { step: 3 };

continueButton.addEventListener("click", proceedForm);
backButton.addEventListener("click", goBack);

function goBack(event) {
  event.preventDefault();
  if ((step0.step = 1)) {
    secondStepContainer.style.display = "none";
    firstStepContainer.style.display = "flex";
    updateObject(step0, "step", 0);
  }
  if ((step0.step = 0)) {
    backButton.style.display = "none";
  }
}

function proceedForm(event) {
  event.preventDefault();
  if (validateFirstStep()) {
    firstStepContainer.style.display = "none";
    secondStepContainer.style.display = "flex";
    backButton.style.display = "inline";
    updateObject(step0, "step", 1);
  }
  if ((step0.step = 1)) {
    secondStepContainer.style.display = "none";
    thirdStepContainer.style.display = "flex";
    updateObject(step0, "step", 2);
  }
}

function updateObject(objectName, input, value) {
  objectName[input] = value;
}

function validateFirstStep() {
  let result = true;
  const firstName = document.querySelector("#first-name");
  const lastName = document.querySelector("#last-name");
  const email = document.querySelector("#email");
  updateObject(step0, "step", 0);
  if (firstName.value) {
    applyDefaultToField(firstName);
    updateObject((step0["firstName"] = firstName.value));
  } else {
    applyErrorToField(firstName);
    result = false;
  }
  if (lastName.value) {
    applyDefaultToField(lastName);
    updateObject((step0["lastName"] = lastName.value));
  } else {
    applyErrorToField(lastName);
    result = false;
  }
  if (email.value || email.validity.typeMismatch) {
    applyDefaultToField(email);
    updateObject((step0["email"] = email.value));
    console.log(JSON.stringify(step0));
  } else {
    applyErrorToField(email);
    result = false;
  }

  return result;
}

function validateSecondStep() {
  let result = true;
  updateObject(step1, "step", 1);
  const primaryAddress = document.querySelector("#primary-address");
  const secondaryAddress = document.querySelector("#secondary-address");
  const shirtSize = document.querySelector("#shirt-size");
  if (primaryAddress.value) {
    applyDefaultToField(primaryAddress);
  } else {
    applyErrorToField(primaryAddress);
    result = false;
  }
  if (shirtSize.value) {
    applyDefaultToField(shirtSize);
  } else {
    applyErrorToField(shirtSize);
    result = false;
  }

  return result;
}

// Utility Functions

function applyErrorToField(input) {
  input.style.outline = "1px solid red";
  input.style.border = "1px solid red";
}

function applyDefaultToField(input) {
  input.style.border = "1px solid black";
  input.style.outline = "none";
}
