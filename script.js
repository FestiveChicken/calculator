let displayValue = null
let firstVariable = null
let secondVariable = null
let operator = ""
let displayOutput = document.getElementById('display')
const buttons = document.querySelectorAll('button')
const buttonPressed = e => {e.target.id}

//gets button id and assigns it to variable
for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
    displayValue = buttonPressed
    console.log(displayValue)
  }

function add(firstVariable,secondVariable) {
	return firstVariable + secondVariable
};

function subtract(firstVariable,secondVariable) {
	return firstVariable - secondVariable
};

function multiply(firstVariable, secondVariable) {
    return firstVariable * secondVariable
};

function divide(firstVariable, secondVariable) {
	return firstVariable / secondVariable
};

function operate(firstVariable, secondVariable, operator) {
    if (operator == "+") {
        return add(firstVariable, secondVariable)
    }
    else if (operator == "-") {
        return subtract(firstVariable, secondVariable)
    }
    else if (operator == "*") {
        return multiply(firstVariable, secondVariable)
    }
    else if (operator == "/") {
        return divide(firstVariable, secondVariable)
    }
}