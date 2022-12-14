// const heading = document.querySelector("#my-element h1");
// const paragraph = document.querySelector("p");
// heading.innerText = "Labas Vakaras";

// paragraph.className = "hover";
// heading.className = "hover";

// console.log(heading);
// console.log(paragraph);
// console.log(heading.innerText);

// console.log("asd")

// function myFunction() {
//   alert("function");
// }

// const button = document.querySelector("#my-button");
// let clickCount = 0;

// function myFunction() {
//   clickCount++;
//   button.innerText = `Click Count ${clickCount}`;
// }

// const DROPDOWN_ACTIVE = "dropdown-menu active";
// const DROPDOWN_HIDDEN = "dropdown-menu";

// const dropdownElement = document.querySelector(`#dropdown .${DROPDOWN_HIDDEN}`);

// function toggle() {
//   if (dropdownElement.className === DROPDOWN_ACTIVE) {
//     dropdownElement.className = DROPDOWN_HIDDEN;
//   } else {
//     dropdownElement.className = DROPDOWN_ACTIVE;
//   }
// }

const ACTIVE = "accordeon-content active";
const HIDDEN = "accordeon-content";

const accordeonElement = document.querySelector(`#accordeon .${HIDDEN}`);

function toggle() {
  if (accordeonElement.className === ACTIVE) {
    accordeonElement.className = HIDDEN;
  } else {
    accordeonElement.className = ACTIVE;
  }
}
