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

function operate(string) {

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

let buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '=', '<', '*', '/'];
let string = "";

for (i in buttons) {
    let button = document.createElement("div");
    button.className = "button";
    button.textContent = buttons[i];
    button.dataset.content = button.textContent;

    button.addEventListener("mousedown", (event) => {
        event.target.classList.toggle('clicked-button');
        string = printOnScreen(event.target.dataset.content, string);
        // console.log(event.target.dataset.content);
    });

    button.addEventListener("mouseup", (event) => {
        event.target.classList.toggle('clicked-button');
    });

    button.style.cursor = "pointer";

    if (i == 13) {
        button.addEventListener("mousedown", (event) => {
            string = deleteFromScreen(string);
        });
    }

    buttonsContainer.appendChild(button);
}

function printOnScreen(letter, string) {
    let newString = string + letter;
    screen.textContent = newString;
    superContainer.append(screen);
    return newString;
}

function deleteFromScreen(string) {
    let newString = string.substring(0, string.length - 2);
    console.log(newString);
    screen.textContent = newString;
    superContainer.append(screen);
    return newString;
}

// document.addEventListener('keydown', (event) => {
//     if (`${event.key}` in buttons) {
//         string = printOnScreen(event.key, string);
//     }
    
//     else {
//         console.log(event.key);
//     }
// });

// to be continued : keyboard event listener takes in numbers only, not operators. fix that!