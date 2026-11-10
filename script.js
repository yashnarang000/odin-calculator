function add(val1, val2) {
    return val1 + val2;
}

// console.log(add(4, 2)); // should return 6

function subtract(val1, val2) {
    return val1 - val2;
}

// console.log(subtract(9, 3)); // should return 6

function multiply(val1, val2) {
    return val1 * val2;
}

// console.log(multiply(3, 2)); // should return 6

function divide(val1, val2) {
    return val1 / val2;
}

// console.log(divide(12, 2)); // should return 6

function operate(operand1, operator, operand2) {
    
    switch(operator) {
        case '+': 
            return add(operand1, operand2);
            break; 

        case '-':
            return subtract(operand1, operand2);
            break;
        
        case '*':
            return multiply(operand1, operand2);
            break;

        case '/':
            return divide(operand1, operand2);
            break;
    }

}

// console.log(operate(1, "+", 5)); // should return 6

const ultimateContainer = document.querySelector("#ultimate-container");

const superContainer = document.createElement("div");
superContainer.id = "super-container";
ultimateContainer.appendChild(superContainer);

const screen = document.createElement("div");
screen.id = "screen";
superContainer.appendChild(screen);

const buttonsContainer = document.createElement("div");
buttonsContainer.id = "buttons-container";
superContainer.appendChild(buttonsContainer);

let buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '=', '*', '/'];

for (i in buttons) {
    let button = document.createElement("div");
    button.className = "button";
    button.textContent = buttons[i];

    if (i == 12) {
        button.id = "equal-button"
    }

    buttonsContainer.appendChild(button);
}