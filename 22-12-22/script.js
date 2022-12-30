const firstStepContainer = document.querySelector(".first-step");
const secondStepContainer = document.querySelector(".second-step");
const thirdStepContainer = document.querySelector(".third-step");
const fourthStepContainer = document.querySelector(".fourth-step");
const continueButton = document.querySelector("#continue-button");
const backButton = document.querySelector("#back-button");
const form = document.querySelector("form");
const result = document.querySelector("#result");
const email = document.querySelector("#email");

secondStepContainer.style.display = "none";
thirdStepContainer.style.display = "none";
fourthStepContainer.style.display = "none";
backButton.style.display = "none";

const step = { step: 1, user: {} };

continueButton.addEventListener("click", proceedFormStep);
backButton.addEventListener("click", goBack);

function goBack(event) {
  event.preventDefault();

  if (step.step === 1) {
    backButton.style.display = "none";
  }

  if (step.step === 2) {
    closeStep(secondStepContainer);
    openStep(firstStepContainer);
    backButton.style.display = "none";
    updateObject(step, "step", 1);
  }

  if (step.step === 3) {
    closeStep(thirdStepContainer);
    openStep(secondStepContainer);
    updateObject(step, "step", 2);
  }

  if (step.step === 4) {
    closeStep(fourthStepContainer);
    openStep(thirdStepContainer);
    continueButton.style.display = "inline";
    updateObject(step, "step", 3);
  }
}

function proceedFormStep(event) {
  event.preventDefault();
  if (step.step === 3) {
    if (validateThirdStep()) {
      closeStep(thirdStepContainer);
      openStep(fourthStepContainer);
      updateObject(step, "step", 4);
      continueButton.style.display = "none";
      result.textContent = JSON.stringify(step);
    }
  }

  if (step.step === 2) {
    if (validateSecondStep()) {
      closeStep(secondStepContainer);
      openStep(thirdStepContainer);
      backButton.style.display = "inline";
      updateObject(step, "step", 3);
    }
  }

  if (step.step === 1) {
    if (validateFirstStep()) {
      closeStep(firstStepContainer);
      openStep(secondStepContainer);
      backButton.style.display = "inline";
      updateObject(step, "step", 2);
    }
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
  if (firstName.value) {
    applyDefaultToField(firstName);
    updateObject((step.user.firstName = firstName.value));
  } else {
    applyErrorToField(firstName);
    result = false;
  }
  if (lastName.value) {
    applyDefaultToField(lastName);
    updateObject((step.user.lastName = lastName.value));
  } else {
    applyErrorToField(lastName);
    result = false;
  }
  console.log(email.validity.typeMismatch);
  if (!email.validity.typeMismatch && email.value) {
    applyDefaultToField(email);
    updateObject((step.user.email = email.value));
  } else {
    applyErrorToField(email);
    result = false;
  }
  return result;
}

function validateSecondStep() {
  let result = true;
  const primaryAddress = document.querySelector("#primary-address");
  const secondaryAddress = document.querySelector("#secondary-address");
  const shirtSize = document.querySelector("#shirt-size");
  if (primaryAddress.value) {
    applyDefaultToField(primaryAddress);
    updateObject((step.user.primaryAddress = primaryAddress.value));
  } else {
    applyErrorToField(primaryAddress);
    result = false;
  }
  if (secondaryAddress.value) {
    updateObject((step.user.secondaryAddress = secondaryAddress.value));
  }

  if (shirtSize.value) {
    applyDefaultToField(shirtSize);
    updateObject((step.user.shirtSize = shirtSize.value));
  } else {
    applyErrorToField(shirtSize);
    result = false;
  }

  return result;
}

function validateThirdStep() {
  const password = document.querySelector("#password");
  const repeatPassword = document.querySelector("#repeat-password");
  const passwordError = document.querySelector("#password-error");
  let result = true;
  if (password.value) {
    applyDefaultToField(password);
  } else {
    applyErrorToField(password);
    result = false;
  }
  if (repeatPassword.value) {
    applyDefaultToField(repeatPassword);
  } else {
    applyErrorToField(repeatPassword);
    result = false;
  }
  if (password.value !== repeatPassword.value) {
    applyErrorToField(password);
    applyErrorToField(repeatPassword);
    passwordError.textContent = "Passwords must match!";
    result = false;
  } else {
    updateObject((step.user.password = password.value));
  }

  return result;
}

// Utility Functions

function applyErrorToField(input) {
  input.style.outline = "1px solid red";
  input.style.border = "1px solid red";
}

function applyDefaultToField(input) {
  input.style.border = "1px solid rgb(0, 152, 187)";
  input.style.outline = "none";
}

function closeStep(element) {
  element.style.display = "none";
}

function openStep(element) {
  element.style.display = "flex";
}
