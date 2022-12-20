/*
//! 1. Pasirenkame selectiona 
    Pasirinkus Current budget option atvaizduojamas Current budget programa +++

    Pasirinkus add expenses option atvaizdujamas add expenses programa +++

//! 2. Current budget (by default): 
    i number inputa ivedame reiksme +++
    Paspaudus Submit budget mygtuka pasiimam i inuta ivesta value +++
    Atvaizduojame current budget inputo value. +++
    iputas ir mygtukas submit budget tampa neaktyvus. +++


    //! Current balance after expenses: 
        Pasiima spent ammount is expenses saraso verte
        Atima ja is current expenses ivestos reiksmes
          Jei gauto rezultato value < 0 jis turi buti raudonas.
    
//! 3.  Pasirinkus add expenses option atvaizdujamas add expenses programa 
        pasirenkama data ipute kurio tipas data
        pasirenkama kiek pinigu isleidzia number inpute
        pasirenkamas selectionas expenses type
        parasomas note, kuris yra optional
    
//! 4   Spaudziamas Save Expense
    Sukuriamas naujas container elementas
    Sukuriami container viduje esantys elementai
    Is inputu paimama suvesta informacija
    Ji atvaizduojama sukurtuose naujuose elementuose
    is esamo biudzeto atimamas naujai sukurto elemento turimu pinigu value.

    Pridejes nauja expense value, paskaiciuoja ir returnina atsakyma
    Jei pridedu dar viena expense value, jis paima returninta reiksme ir is jos atima expese value.

*/

const trackerTypeSelector = document.querySelector("#tracker-type");
const currentBudgetSection = document.querySelector("#current-budget");
const addExpensesSection = document.querySelector("#add-expenses");
const currentBudgetInput = document.querySelector("#budget-value");
const currentBudgetButton = document.querySelector("#submit-budget");
const currentBudgetResult = document.querySelector("#after-expenses");
const expenseDateInput = document.querySelector("#date");
const expensesSpentAmountInput = document.querySelector("#spent-amount");
const expensesTypeInput = document.querySelector("#expense-type");
const expensesNotesInput = document.querySelector("#notes");
const saveExpensesButton = document.querySelector("#save-expense");
let currentBudgetResultValue = Number(currentBudgetInput.value);
function defaultView() {
  addExpensesSection.style.display = "none";
}

defaultView();

trackerTypeSelector.addEventListener("change", changeProgram);
currentBudgetButton.addEventListener("click", submitBudget);
saveExpensesButton.addEventListener("click", saveExpense);
currentBudgetResult.addEventListener("change", calculateBudget);

function changeProgram(event) {
  if (event.target.value === "current-budget") {
    addExpensesSection.style.display = "none";
    currentBudgetSection.style.display = "block";
  } else {
    currentBudgetSection.style.display = "none";
    addExpensesSection.style.display = "block";
  }
}

function submitBudget() {
  const currentBudgetValue = currentBudgetInput.value;
  currentBudgetResult.textContent = currentBudgetValue;
  currentBudgetInput.disabled = true;
  currentBudgetButton.disabled = true;
  console.log(currentBudgetResultValue);
}
console.log(currentBudgetResultValue);
function saveExpense() {
  createNewExpenseList();
  calculateBudgetAfterExpenses();
  console.log(calculateBudgetAfterExpenses());
  console.log(currentBudgetResult);
  cleanUp();
}

function createNewExpenseList() {
  const expensesContainer = document.querySelector("#expenses-container");
  const expensesList = document.createElement("div");
  expensesList.classList.add("expenses-list");
  expensesContainer.append(expensesList);
  createExpensesParagraph(expensesList, "Date:", expenseDateInput.value);
  createExpensesParagraph(
    expensesList,
    "Spent Amount:",
    expensesSpentAmountInput.value
  );
  createExpensesParagraph(
    expensesList,
    "Expense Type:",
    expensesTypeInput.value
  );
  createExpensesParagraph(expensesList, "Note:", expensesNotesInput.value);
  return expensesList;
}

function createExpensesParagraph(expensesDiv, paragraphName, inputValue) {
  const expensesParagraph = document.createElement("p");
  expensesParagraph.textContent = `${paragraphName}  ${inputValue}`;
  expensesDiv.append(expensesParagraph);
}

let leftBudget;
let expensesSpentAmountValue;
function calculateBudgetAfterExpenses() {
  leftBudget = currentBudgetResultValue - Number(expensesSpentAmountValue);
  currentBudgetResult.textContent = leftBudget;
  if (leftBudget < 0) {
    currentBudgetResult.style.color = "red";
  }

  return Number(leftBudget);
}

//Utility Functions
function cleanUp() {
  expenseDateInput.value = "";
  expensesNotesInput.value = "";
  expensesTypeInput.value = "";
  expensesSpentAmountInput.value = "";
}

function calculateBudget(event) {
  console.log("helo", event);
}
