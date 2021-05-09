// Test alert.

// window.alert('Hello.');

// function pushNumber() {
//     window.alert
// }

// Defining the variables to attach event listeners and such to.

const $numberButtons = document.querySelectorAll('.number');
const $operatorButtons = document.querySelectorAll('.operator');
const $equalSign = document.querySelector('.equal-sign');
const $clear = document.querySelector('.clear');
const $decimal = document.querySelector('.decimal');
const $plusMinus = document.querySelector('.plus-minus');
const $percent = document.querySelector('.percent');
const $numberbtlg = document.querySelector('.number btn-lg');
let $calculatorScreen = document.querySelector('.calculator-screen');

// console.log($calculatorScreen);


function pushNumber(event) {
    // alert(event.target.value);
    console.log(event.target.value);
    document.querySelector('.calculator-screen').value = event.target.value;
}

$numberButtons.forEach(function (button) {
    button.addEventListener('click', pushNumber);
});

function pushOperator(event) {
    alert(event.target.value);
    document.querySelector('.calculator-screen').value = event.target.value;
}

$operatorButtons.forEach(function (button) {
    button.addEventListener('click', pushOperator);
});

function calculate(event) {
    alert(event.target.value);
}

$equalSign.for(function (button) {
    button.addEventListener('click', calculate);
});

var calculation = [];

