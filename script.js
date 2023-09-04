let displayValue = ''
let firstVariable = null
let secondVariable = null
let operator = ""
let displayOutput = document.getElementById('display')
const buttonContainer = document.getElementById('buttonContainer')

//displays 0 to start
displayOutput.innerHTML = 0

//main function
buttonContainer.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON'
    const buttonClass = event.target.className
    let eventID = event.target.id
    if (!isButton) {
        return
    }
    if (eventID == "clearButton") {
        displayValue = ''
        displayOutput.innerHTML = 0
        return
    }
    if (eventID == "=") {
        secondVariable = displayValue
        displayValue = ''
        displayOutput.innerHTML = operate()
        secondVariable = null 
        return
    }
    if (buttonClass == "operatorButton") {
        if (firstVariable == null) {
        firstVariable = displayValue
        displayValue = ''
        displayOutput.innerHTML = eventID
        operator = eventID
        return
        }
        else {
        secondVariable = displayValue
        displayValue = ''
        operator = eventID
        displayOutput.innerHTML = operate()
        secondVariable = null 
        return
        }
        
    }

    displayValue = displayValue + eventID
    displayOutput.innerHTML = displayValue
  })

function add(firstVariable,secondVariable) {
    answer = firstVariable + secondVariable
    firstVariable = answer
	return answer
};

function subtract(firstVariable,secondVariable) {
    answer = firstVariable - secondVariable
    firstVariable = answer
	return answer
};

function multiply(firstVariable, secondVariable) {
    answer = firstVariable * secondVariable
    firstVariable = answer
    return answer
};

function divide(firstVariable, secondVariable) {
    answer = firstVariable / secondVariable
    firstVariable = answer
	return answer
};

function operate() {
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