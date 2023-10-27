// Initialization of Variables
let firstOperand = "";
let operator = null;
let secondOperand = "";

// Add Event Listeners
const numberbtns = document.querySelectorAll(".num");
const operatorbtns = document.querySelectorAll(".operator");
const equalbtn = document.querySelector(".equals");
const deletebtn = document.querySelector(".delete");
const clearbtn = document.querySelector(".clear");
const currentDisplay = document.querySelector(".currentoperand");
const lastDisplay = document.querySelector(".lastoperand");

numberbtns.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
})

// Add Helper Functions
function appendNumber (number) {
  currentDisplay.textContent += number;
}

// Calculator Functions
function add (a, b) {
  return +a + +b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a,b) {
  return a / b;
}

function operate (operator, a, b) {
  switch (operator) {
    case "+":
      return add(a,b);
    case "-":
      return subtract(a,b);
    case "*":
      return multiply(a,b);
    case "/":
      if (b === 0) {
        return null
      } else {
        return divide(a,b);
      }
    default:
      return null; 
  }
}