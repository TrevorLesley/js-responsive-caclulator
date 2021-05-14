//================Establishing variables===================
const $numberButtons = document.querySelectorAll('.number');
const $operatorButtons = document.querySelectorAll('.operator');
const $equalSign = document.querySelector('.equal-sign');
const $clear = document.querySelector('.clear');
const $decimal = document.querySelector('.decimal');
const $plusMinus = document.querySelector('.plus-minus');
const $percent = document.querySelector('.percent');
const $numberbtlg = document.querySelector('.number btn-lg');
const $calculatorScreen = document.querySelector('.calculator-screen');
var calculation = [];
var newEquation = [];
var calcString = [];

//==================Defining Functions=====================

function pushNumber(event) {
    alert(event.target.value);
}

function pushOperator(event) {
    alert(event.target.value);
    calculation.push(event.target.value);
}

function calculate(event) {
    alert('=');

    let num1 = '', num2 = '', operator = null;
    let operators = ['*', '+', '-', '/'];

    for (let i = 0; i < calculation.length; i++) {
        const char = calculation[i];

        if (operators.includes(char)) {
            operator = char;
        } else if (!operator) {
            num1 += char;
        } else {
            num2 += char;
        }
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    }
}

$numberButtons.forEach(function (button) {
    button.addEventListener('click', pushNumber);
});


$operatorButtons.forEach(function (button) {
    button.addEventListener('click', pushOperator);
});

$equalSign.addEventListener('click', calculate);

