// Initialization of Variables
let firstOperand = "";
let operator = null;
let secondOperand = "";
let resetScreen = false;

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
  button.addEventListener("click",() => setOperator(button.textContent));
})

equalbtn.addEventListener("click",evaluate);
deletebtn.addEventListener("click",deleteNumber);
clearbtn.addEventListener("click",clearScreen);
document.addEventListener("keydown",(e) => {
  if (e.key >= 0 && e.key <= 9) {appendNumber (e.key)};
  if (e.key === '=' || e.key === 'Enter') {evaluate()};
  if (e.key === 'Backspace') {deleteNumber()};
  if (e.key === 'Escape') {clearScreen()};
  if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%')
    {setOperator(convertOperator(e.key))};
})

function convertOperator(keyboardOperator) {
  if (keyboardOperator === '/') return '/'
  if (keyboardOperator === '*') return 'x'
  if (keyboardOperator === '-') return '-'
  if (keyboardOperator === '+') return '+'
  if (keyboardOperator === '%') return '%'
}


// Add Helper Functions
function appendNumber (number) {
  if (resetScreen) {
    clearScreen();
    resetScreen = false;
  }
  currentDisplay.textContent += number;
}

function setOperator(currentOperator) {
  if (operator != null) {evaluate()};
  firstOperand = currentDisplay.textContent;
  currentDisplay.textContent = "";
  operator = currentOperator;
  lastDisplay.textContent = `${firstOperand} ${operator}`;
}

function evaluate () {
  if (operator === "/" && currentDisplay.textContent === "0") {
    currentDisplay.textContent = "You can't divide by zero! Try again!"
    lastDisplay.textContent = "";
    return resetScreen = true;
  } else if (operator === null || currentDisplay.textContent === "") {
    return clearScreen();
  }
  secondOperand = currentDisplay.textContent;
  currentDisplay.textContent = Math.round(operate(operator,firstOperand,secondOperand)*1000) / 1000;
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