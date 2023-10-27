// Initialization of Variables
let currentOperand = document.querySelector(".currentoperand");
let operator = null;
let lastOperand = document.querySelector(".lastoperand");


// On Document Load
addNumberListeners();

// Event Listeners

function addNumberListeners () {
  let buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      let value = buttons[i].textContent;
      if (buttons[i].classList.contains("num")){
        displayCurrentValue(value);
      } else if (buttons[i].classList.contains("operator")){
        cleanCurrentValue(value);
      } else if (buttons[i].classList.contains("equals")) {
        
      }
  });
}
}

// Display Functions

function displayCurrentValue (value) {
  currentOperand.textContent += value;
}

function cleanCurrentValue (value) {
  lastOperand.textContent = `${currentOperand.textContent} ${value}`;
  currentOperand.textContent = "";
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