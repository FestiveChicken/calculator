let firstVariable = 0
let secondVariable = 0
let operator = ""

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

function operate(firstVariable, secondVariable, operator)
    if (operator == "+") {
        add(firstVariable, secondVariable)
    }
    else if (operator == "-") {
        subtract(firstVariable, secondVariable)
    }
    else if (operator == "*") {
        multiply(firstVariable, secondVariable)
    }
    else if (operator == "/") {
        divide(firstVariable, secondVariable)
    }