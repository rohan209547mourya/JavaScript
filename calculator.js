const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const divide = (num1, num2) => {    
    return num1 / num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}


const calculator = (num1, num2, operator) => {
    console.log(operator(num1, num2));
};


calculator(2, 3, multiply);