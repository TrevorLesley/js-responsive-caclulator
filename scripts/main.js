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
let $calculatorScreen = document.querySelector('.calculator-screen');
var calculation = [];
var newEquation = [];
// console.log($calculatorScreen);


function pushNumber(event) {
    // alert(event.target.value);
    console.log(event.target.value);
    document.querySelector('.calculator-screen').value = event.target.value
    calculation.push(event.target.value);
    console.log(calculation)
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

let calculate = function (event) {

    sign = this.value
    if (sign === '+') {
        result = firstNumber + secondNumber
        $calculatorScreen.value = result;
    }
    else if (sign === '-') {
        result = firstNumber - secondNumber
        $calculatorScreen.value = result;
    }
    else if (sign === '*') {
        result = firstNumber * secondNumber
        $calculatorScreen.value = result;
    }

    else if (sign === '/') {
        result = firstNumber / secondNumber
        $calculatorScreen.value = result;
    }
    // var toInt = parseInt(button);
}
$equalSign.addEventListener('click', function () {

    calculate();
})

// function positiveNegative(event) {
//     // alert(event.target.value);
//     console.log(event.target.value);
//     // toggle
//     var currentNumber = (event.target.value);
//     console.log(currentNumber);
//     document.querySelector('.calculator-screen').value = target.value;
//     let x = 54;
//     let y = -54;
//     let resultx = -(x);
//     let resulty = -(y);
// }


//  Clear button.

let clear = function (event) {

    calculation = [];
    newEquation = [];


    $calculatorScreen.value = "0";
};

$clear.addEventListener('click', clear);




// function rovarspraket(text) {
//     let translation = '';

//     text.toLowerCase().split('').forEach(function (char) {
//       if ('bcdfghjklmnpqrstvwxyz'.includes(char)) {
//         translation += char + 'o' + char;
//       } else {
//         translation += char;
//       }
//     });

//     return translation;
//   }
//   rovarspraket("this is fun");