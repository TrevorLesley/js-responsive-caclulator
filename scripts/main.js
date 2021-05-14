// Test alert.

// window.alert('Hello.');

// function pushNumber() {
//     window.alert
// }

// Defined variables.

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
// console.log($calculatorScreen);


function pushNumber(event) {
    // alert(event.target.value);
    console.log(event.target.value);
    document.querySelector('.calculator-screen').value = event.target.value;
    calculation.push(event.target.value);
    console.log(calculation);
    // console.log(typeof (event.target.value));

}

$numberButtons.forEach(function (button) {
    button.addEventListener('click', pushNumber);
    var toInt = parseInt(button);


});

function pushOperator(event) {
    // alert(event.target.value);
    console.log(event.target.value);
    calculation.push(event.target.value);
    document.querySelector('.calculator-screen').value = event.target.value;
}

$operatorButtons.forEach(function (button) {
    button.addEventListener('click', pushOperator);
});

function calculate(calculation) {
    let stringNum1 = '', stringNum2 = '', operator = '';
    // let num1 = [], num2 = [];
    for (i = 0; i < calculation.length; i++) {
        if (calculation[i] === 'number') {
            calculation.push(stringNum1);
        } else if (calculation[i] === operator) {
            calculation.push(operator);
        } else if (calculation.indexOf[i] > operator.indexOf[i]) {
            calculation.push(stringNum2);
        }
    };
    stringNum1
        .join()
        .parseInt();

    stringNum2
        .join()
        .parseInt();

    if (operator == '+') {
        console.log(stringNum1 + stringNum2);
    } else if (operator == '-') {
        console.log(stringNum1 - stringNum2);
    } else if (operator == '*') {
        console.log(stringNum1 * stringNum2);
    } else if (operator == '/') {
        console.log(stringNum1 / stringNum2);
    }

    $equalSign.forEach(function (button) {
        button.addEventListener('click', calculate);
    });
};



// calculate(calculation);

//  Clear button.

let clear = function (event) {

    calculation = [];
    newEquation = [];

    $calculatorScreen.value = "0";
};

$clear.addEventListener('click', clear);

