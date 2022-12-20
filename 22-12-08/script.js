const formDialog = document.querySelector("form");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const emailInput = document.querySelector("#email");
const complaintInput = document.querySelector("#complaint");
const submitButton = document.querySelector("#submit-btn");
const helpButton = document.querySelector("#help-btn");
const closeButton = document.querySelector("#close-btn");
const formError = document.querySelector("#form-error");
const formErrorText = "Please correct mistakes made in your complaint form!!";
const userInfoSection = document.querySelector("#user-info");
const main = document.querySelector("main");
console.log(main);

const userFirstName = document.querySelector("#first-name-value");
const userLastName = document.querySelector("#last-name-value");
const userEmail = document.querySelector("#email-adress-value");
const userComplaint = document.querySelector("#complaint-value");
const userDate = document.querySelector("#complaint-date-value");
const userDateValue = new Date().toLocaleString();

closeButton.addEventListener("click", closeObject);
helpButton.addEventListener("click", openDialog);
submitButton.addEventListener("click", validateForm);
submitButton.addEventListener("click", submitForm);

function closeObject() {
  formDialog.style.display = "none";
}

function openDialog() {
  formDialog.style.display = "flex";
  cleanUp();
}

//patikrina ar inputa turi verte ir grazina true arba false
function isInputsValid() {
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailValidation();
  const complaint = complaintInput.value;
  if (firstName && lastName && email && complaint) {
    return true;
  } else {
    return false;
  }
}

//Tikrina ar forma tinkamai supildyta ir grazina ture arba false/
function validateForm() {
  if (isInputsValid()) {
    return true;
  } else {
    return false;
  }
}

//Jei visos validacijos geros, submitina forma
function submitForm(event) {
  event.preventDefault();
  if (validateForm()) {
    if (
      userEmail.textContent &&
      userFirstName.textContent &&
      userLastName.textContent &&
      userComplaint.textContent
    ) {
      registerComplaint();
    } else {
      userEmail.textContent = emailInput.value;
      userFirstName.textContent = firstNameInput.value;
      userLastName.textContent = lastNameInput.value;
      userComplaint.textContent = complaintInput.value;
      userDate.textContent = new Date().toLocaleString();
    }
    cleanUp();
    closeObject();
  }
  if (!validateForm()) {
    validateInputs();
  }
}

function validateInputs() {
  if (firstNameInput.value === "") {
    formError.textContent = formErrorText;
    applyErrorToField(firstNameInput);
  } else {
    applySuccesToField(firstNameInput);
  }
  if (lastNameInput.value === "") {
    formError.textContent = formErrorText;
    applyErrorToField(lastNameInput);
  } else {
    applySuccesToField(lastNameInput);
  }

  if (complaintInput.value === "") {
    formError.textContent = formErrorText;
    applyErrorToField(complaintInput);
  } else {
    applySuccesToField(complaintInput);
  }

  if (emailValidation()) {
    applySuccesToField(emailInput);
  } else {
    formError.textContent = formErrorText;
    applyErrorToField(emailInput);
  }
}

//Uzdeda raudona outline
function applyErrorToField(input) {
  input.style.border = "1px solid red";
  input.style.outline = "1px solid red";
}

//uzdeda zalia outline
function applySuccesToField(input) {
  input.style.border = "1px solid green";
  input.style.outline = "1px solid green";
}

//uzdeda default outline
function applyDefaultToField(input) {
  input.style.border = "1px solid black";
  input.style.outline = "none";
}

//tikrina emailas ar gero formato
function emailValidation() {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailInput.value.match(mailformat)) {
    applySuccesToField(emailInput);
    return true;
  } else {
    applyErrorToField(emailInput);
    return false;
  }
}

function cleanUp() {
  formError.textContent = "";
  emailInput.value = "";
  firstNameInput.value = "";
  lastNameInput.value = "";
  complaintInput.value = "";
  applyDefaultToField(firstNameInput);
  applyDefaultToField(lastNameInput);
  applyDefaultToField(emailInput);
  applyDefaultToField(complaintInput);
}

function constructParagraph(heading, className, id, inputValue) {
  const userInfoDiv = document.createElement("div");
  const userInfoHeading = document.createElement("p");
  const userInputValue = document.createElement("p");

  userInfoSection.append(userInfoDiv);
  userInfoDiv.classList.add("info-container");

  userInfoDiv.append(userInfoHeading);
  userInfoHeading.textContent = heading;
  userInfoHeading.classList.add(className);

  userInfoDiv.append(userInputValue);
  userInputValue.id = id;
  userInputValue.classList.add("user-data");
  userInputValue.textContent = inputValue.value;

  return userInfoDiv;
}

function constructSectionContent(section) {
  section.append(
    constructParagraph(
      "First Name:",
      "first-name-heading",
      "first-name-value",
      firstNameInput
    )
  );
  section.append(
    constructParagraph(
      "Last Name:",
      "last-name-heading",
      "last-name-value",
      lastNameInput
    )
  );
  section.append(
    constructParagraph(
      "Email:",
      "email-heading",
      "email-adress-value",
      emailInput
    )
  );
  section.append(
    constructParagraph(
      "Complaint:",
      "user-info-heading",
      "user-data",
      complaintInput
    )
  );
  section.append(
    displayDate(
      "Date of complaint:",
      "user-info-heading",
      "complaint-date-value"
    )
  );

  return section;
}

function createSection() {
  const complaintSection = document.createElement("section");
  constructSectionContent(complaintSection);
  return complaintSection;
}

function registerComplaint() {
  const mainElement = document.querySelector("main");
  mainElement.append(createSection());
}

function displayDate(heading, className, id) {
  const userInfoDiv = document.createElement("div");
  const userInfoHeading = document.createElement("p");
  const userInputValue = document.createElement("p");

  userInfoSection.append(userInfoDiv);
  userInfoDiv.classList.add("info-container");

  userInfoDiv.append(userInfoHeading);
  userInfoHeading.textContent = heading;
  userInfoHeading.classList.add(className);

  userInfoDiv.append(userInputValue);
  userInputValue.id = id;
  userInputValue.classList.add("user-data");
  userInputValue.textContent = new Date().toLocaleString();

  return userInfoDiv;
}
