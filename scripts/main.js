// Test alert.

// window.alert('Hello.');

// function pushNumber() {
//     window.alert
// }

// Defining the pushNumber function to select all numbers,
// also adding event listener to the function.

const $numberButtons = document.querySelectorAll('.number');
const $operatorButtons = document.querySelectorAll('.operator');

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

