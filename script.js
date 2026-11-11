let buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '<', '/', '*', '+', '-', '='];
const validOperators = ['/', '*', '+', '-'];
let string = "";
let decimalLog = "0";

// function replaceWithResult(string, operatorIndex, result) {
//     chars = string.split("");
//     chars.splice(operatorIndex-1, 3, )
// }

/**
 * Iterates for one single operation over a string
 * 
 * @param {string} string - The string to be evaluated 
 * @param {string} operation - The operation to perform on the string
 * @returns {string} Evaluated string
 */
function operateSingle(string, operation) {

    if (!validOperators.includes(operation)) {
        console.log("invalid operation!");
        return -1;
    }

    // console.log(`String looping : ${string}`);

    while (string.indexOf(operation) != -1) {

        let firstOcc = string.indexOf(operation); // first occurance of division in the string
        // console.log(`First occurance: ${firstOcc}`);
        // console.log(`String looping : ${string}`);

        let i = firstOcc - 1;
        
        let a = "";
        let b = "";
        let c;

        while (Number.isInteger(Number(string[i])) || string[i] == '.') {
            a = string[i] + a;
            i--;
        }

        a = Number(a);

        // console.log(`a : ${a}`);

        j = firstOcc + 1;

        while (Number.isInteger(Number(string[j])) || string[j] == '.') {
            b = b + string[j];
            j++;
        }

        b = Number(b);

        // console.log(`b : ${b}`);

        switch (operation) {
            case '/':
                c = a / b;
                break;

            case '*':
                c = a * b;
                break;

            case '+':
                c = a + b;
                break;

            case '-':
                c = a - b;
                break;
        }


        newChars = `${c}`.split("");
        // console.log(`newChars : ${newChars}`);

        chars = string.split("");
        // console.log(`chars : ${chars}`);
        chars.splice(i+1, j-i-1, ...newChars);
        string = chars.join("");

        // console.log(`new string : ${string}`);

        if (string[0] == '-' || string[0] == '+') {
            break;
        }
    }
    return string;
}

function operateOnString(string) {

    // example: 1+2-5/6*4
    // acc to dmas : a) x=5/6 b) y=x*4 c) z=1+2 d) result=z-y
    
    // Algorithm:
        // 1. find first /
        // 2. if found : get the operands and calculate
        // 3. iterate for all of / and solve all of them
        // 4. store those in an array called division, such that the first item is the result of first /
        // 5. replace the calculated values instead of, let's say, x / y!
        // 6. do the same for * => + => - until you get a final value!

    if (string.includes('/')) {
        string = operateSingle(string, '/');
        // console.log(`dividing... result : ${string}`);
    }

    if (string.includes('*')) {
        string = operateSingle(string, '*');
        // console.log(`multiplying... result : ${string}`);
    }

    if (string.includes('+')) {
        string = operateSingle(string, '+');
        // console.log(`adding... result : ${string}`);
    }

    if (string.includes('-')) {
        string = operateSingle(string, '-');
        // console.log(`subtracting... result : ${string}`);
    }

    replaceOnScreen(string);
    return string;
}

function printOnScreen(letter, string) {
    let newString = string + letter;
    screen.textContent = newString;
    superContainer.append(screen);
    return newString;
}

function replaceOnScreen(newString) {
    screen.textContent = newString;
    superContainer.append(screen);
    return newString;
}

function deleteFromScreen(string) {
    let newString = string.substring(0, string.length - 1);
    // console.log(newString);
    screen.textContent = newString;
    superContainer.append(screen);
    return newString;
}

function onPress(buttonContent, string) {
    if (buttonContent == "Backspace" || buttonContent == "<") {

        if (string.slice(-1) == '.') {
            decimalLog = decimalLog.slice(0, -1) + "0";
        }

        if (validOperators.includes(string.slice(-1))) {
            decimalLog = decimalLog.slice(0, -1);
        }

        string = deleteFromScreen(string);
    }

    else if (buttonContent == "=" || buttonContent == "Enter") {

        if (validOperators.includes(string.slice(-1))) {
            string = deleteFromScreen(string);
        }

        string = operateOnString(string);

        if (string.includes('.')) {
            decimalLog = "1";
        }

        else {
            decimalLog = "0";
        }

        console.log("operated!");
    }


    else if (validOperators.includes(buttonContent)) {
        decimalLog = decimalLog + "0";

        if (validOperators.includes(string.slice(-1))) {
            string = deleteFromScreen(string);  string = deleteFromScreen(string);
        }

        string = printOnScreen(buttonContent, string);  
    }

    else if (buttonContent == '.') {
        if (decimalLog.slice(-1) == '1') {}

        else {
            string = printOnScreen(buttonContent, string);
            decimalLog = decimalLog.slice(0, -1) + "1";
        }
    }

    else if (buttons.includes(buttonContent)) {
        string = printOnScreen(buttonContent, string);
    }

    // else {
    //     console.log(buttonContent);
    // }

    return string;
}

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

for (i in buttons) {
    let button = document.createElement("div");
    button.className = "button";
    button.textContent = buttons[i];
    button.dataset.content = button.textContent;

    button.addEventListener("mousedown", (event) => {
        event.target.classList.toggle('clicked-button');
        string = onPress(event.target.dataset.content, string);
        // console.log(event.target.dataset.content);
    });

    button.addEventListener("mouseup", (event) => {
        event.target.classList.toggle('clicked-button');
    });

    button.style.cursor = "pointer";

    buttonsContainer.appendChild(button);
}

document.addEventListener("keydown", (event) => {
    string = onPress(event.key, string);
});