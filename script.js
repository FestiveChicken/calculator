let displayValue = ''
let firstVariable = null
let secondVariable = null
let operator = ""
let displayOutput = document.getElementById('display')
let lastNumber = null
const buttonContainer = document.getElementById('buttonContainer')
const decimalButton = document.getElementById('.')

//displays 0 to start
displayOutput.innerHTML = 0

//main function
buttonContainer.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON'
    const buttonClass = event.target.className
    let eventID = event.target.id
    //ignores clicks that are not on a button
    if (!isButton) {
        return
    }
    //clears the variables and the display if clear is selected
    if (eventID == "clearButton") {
        firstVariable = null
        secondVariable = null
        lastNumber = null
        displayValue = ''
        displayOutput.innerHTML = 0
        decimalButton.disabled = false
        return
    }
    //assigns value to second variable and enables decimal point
    if (eventID == "=") {
        decimalButton.disabled = false
        secondVariable = displayValue
        displayValue = ''
        displayOutput.innerHTML = operate()
        firstVariable = operate()
        lastNumber = null
        secondVariable = null 
        return
    }
    if (buttonClass == "operatorButton") {
        decimalButton.disabled = false
        if (firstVariable == null) {
        firstVariable = displayValue
        displayValue = ''
        operator = eventID
        return
        }
        else {
        secondVariable = displayValue
        displayValue = ''
        operator = eventID
        displayOutput.innerHTML = operate()
        firstVariable = operate()
        secondVariable = null 
        return
        }
        
    }
    if (eventID == "backspaceButton") {
        if (lastNumber == null) {
            return
        }
        else {
        displayValue = displayValue - lastNumber
        displayValue = displayValue/10
        lastNumber = displayValue
        displayOutput.innerHTML = displayValue
        return
        }
    }
    lastNumber = eventID
    displayValue = displayValue + eventID
    displayOutput.innerHTML = displayValue
  })

//disables decimal button after one click
decimalButton.onclick = function () {
    this.disabled = true
}

function add(firstVariable,secondVariable) {
    answer = firstVariable + secondVariable
	return answer
};

function subtract(firstVariable,secondVariable) {
    answer = firstVariable - secondVariable
	return answer
};

function multiply(firstVariable, secondVariable) {
    answer = firstVariable * secondVariable
    return answer
};

function divide(firstVariable, secondVariable) {
    if (secondVariable == 0) {
        return "You cannot divide by zero"
    }
    answer = firstVariable / secondVariable
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