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

operatorbtns.forEach((button) => {
  button.addEventListener("click",() => setOperand(button.textContent));
})

equalbtn.addEventListener("click",evaluate);
deletebtn.addEventListener("click",deleteNumber);
clearbtn.addEventListener("click",clearScreen);


// Add Helper Functions
function appendNumber (number) {
  currentDisplay.textContent += number;
}

function setOperand(currentOperator) {
  firstOperand = currentDisplay.textContent;
  currentDisplay.textContent = "";
  operator = currentOperator;
  lastDisplay.textContent = `${firstOperand} ${operator}`;
}

function evaluate () {
  secondOperand = currentDisplay.textContent;
  currentDisplay.textContent = operate(operator,firstOperand,secondOperand);
  lastDisplay.textContent = `${firstOperand} ${operator} ${secondOperand}`;
  operator = null;
}

function deleteNumber () {
  currentDisplay.textContent = currentDisplay.textContent.slice(0,-1);
}

function clearScreen () {
  firstOperand = "";
  operator = null;
  secondOperand = "";
  currentDisplay.textContent = "";
  lastDisplay.textContent = "";
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

function modulus(a,b) {
  return a % b;
}

function operate (operator, a, b) {
  switch (operator) {
    case "+":
      return add(a,b);
    case "-":
      return subtract(a,b);
    case "x":
      return multiply(a,b);
    case "/":
      return divide(a,b);
    case "%":
      return modulus(a,b);
    default:
      return null; 
  }
}