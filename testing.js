/**
 * Iterates for one single operation over a string
 * 
 * @param {string} string - The string to be evaluated 
 * @param {string} operation - The operation to perform on the string
 * @returns {string} Evaluated string
 */
function operateSingle(string, operation) {

    const validOperations = ['/', '*', '+', '-'];
    if (!validOperations.includes(operation)) {
        console.log("invalid operation!");
        return -1;
    }

    // console.log(`String looping : ${string}`);

    while (string.indexOf(operation) != -1) {

        let firstOcc = string.indexOf(operation); // first occurance of division in the string
        // console.log(`First occurance: ${firstOcc}`);
        console.log(`String looping : ${string}`)

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

    return string;
}

theString = "72/58+69-58*98";
// secondString = "10+25+2";
theString = operateOnString(theString);
// secondString = operateSingle(secondString, '+');
console.log(theString);