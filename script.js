function add(val1, val2) {
    return val1 + val2;
}

console.log(add(4, 2)); // should return 6

function subtract(val1, val2) {
    return val1 - val2;
}

console.log(subtract(9, 3)); // should return 6

function multiply(val1, val2) {
    return val1 * val2;
}

console.log(multiply(3, 2)); // should return 6

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

console.log(operate(1, "+", 5)); // should return 6