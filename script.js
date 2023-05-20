console.log('Calculator console');

let value1 = '';
let value2 = '';
let value1andOperator = '';
let operator = '';

//Get the display element
const display = document.querySelector('.display');

//Get all the number buttons
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');

//Add event listeners to each button
numbers.forEach((number) => {
  number.addEventListener('click', (e) => {
    value1 = value1 + e.target.innerText; //Number1

    display.innerText = value1;

    operations.forEach((op) => {
      op.addEventListener('click', (e) => {
        operator = e.target.innerText; //Operator use switch to calculate
        value1andOperator = value1 + operator; //This is just for display
        console.log(operator + ' ' + typeof operator);

        display.innerText = value1andOperator;
      });
    });
  });
});
