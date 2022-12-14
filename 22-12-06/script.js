const generateColorBtn = document.querySelector(".generate-btn");
const colorValueElement = document.querySelector("#color-value");
const colorContainer = document.querySelector(".color-container");

generateColorBtn.addEventListener("click", generateRandomColor);
window.addEventListener("load", generateRandomColor);

function generateRandomColor() {
  const randomRGB = `rgb(${getRandomRGBNumber()}, ${getRandomRGBNumber()}, ${getRandomRGBNumber()})`;
  colorContainer.style.backgroundColor = randomRGB;
  colorValueElement.textContent = randomRGB;
}

function getRandomRGBNumber() {
  return Math.floor(Math.random() * 256);
}

const modalButton = document.querySelector("#modal-btn");
const closeButton = document.querySelector("#close-btn");
const acceptButton = document.querySelector("#accept-btn");
const modalWindow = document.querySelector("#modal");

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeWindow);
acceptButton.addEventListener("click", closeWindow);
acceptButton.addEventListener("click", acceptTerms);
modalWindow.addEventListener("click", closeOnOverlayClick);

function openModal() {
  modalWindow.className = "visible";
  console.log("veikia");
}

function closeWindow() {
  modalWindow.className = "invisible";
}

function acceptTerms() {
  console.log("accpted");
}

function closeOnOverlayClick(event) {
  const cursorTarget = event.target;
  console.log(cursorTarget);

  if (cursorTarget === modalWindow) {
    closeWindow();
  }
}
