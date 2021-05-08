// Test alert.

// window.alert('Hello.');

// function pushNumber() {
//     window.alert
// }

// Defining the push-button functions and attaching event listeners.

const $numberButtons = document.querySelectorAll('.number');
const $operatorButtons = document.querySelectorAll('.operator');
const $equalSign = document.querySelector('.equal-sign');


function pushNumber(event) {
    alert(event.target.value);
}

$numberButtons.forEach(function (button) {
    button.addEventListener('click', pushNumber);
});

function pushOperator(event) {
    alert(event.target.value);
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
