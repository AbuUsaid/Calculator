console.log('Calculator console');

let value = '';

//Get the display element
const display = document.querySelector('.display');

//Get all the number buttons
const buttons = document.querySelectorAll('.button');

//Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    value = value + e.target.innerText;

    display.innerText = value;
  });
});
