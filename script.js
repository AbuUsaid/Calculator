console.log('Calculator console');

//-----functions---------
const add = (num1, num2) => {
  return num1 + num2;
};

const sub = (num1, num2) => {
  return num1 - num2;
};

const mul = (num1, num2) => {
  return num1 * num2;
};

const div = (num1, num2) => {
  return num1 / num2;
};
//--------functions--------

/*
let number1 = 1;
let number2 = 2;
let operator = 'sum';

const operate = (operator, num1, num2) => {
  if (operator === 'sum') {
    return add(num1, num2);
  }
};

console.log(operate(operator, number1, number2));
*/

// document.addEventListener('DOMContentLoaded', function () {
//   const saveValue = () => {
//     const value = document.getElementById('1').innerText;
//     const outputDiv = document.getElementByClassName('display');
//     outputDiv.innerText = value;

//     //   console.log(value);
//   };
// });

//Get the display element
const display = document.querySelector('.display');

//Get all the number buttons
const buttons = document.querySelectorAll('.button');

//Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    //Get the number from the clicked button
    const number = button.textContent;

    //Display the number in the display box
    display.textContent = number;
  });
});
