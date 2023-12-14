var numbersContainer = document.querySelector('.numbers');
var functionsContainer = document.querySelector('.functions');

for (i=0;i<10;i++)
{
    let button = document.createElement('button');
    button.style.textAlign = "center";
    button.className = 'button';
    button.style.width = '100px';
    button.style.height = '100px';
    button.textContent = 9-i;
    button.style.color = 'white';
    button.style.backgroundColor = '#1f2937';
    numbersContainer.appendChild(button);
}
let functionsArray = ['+','-', '*', '/','clear']
for (i=0; i<functionsArray.length;i++)
{
    let fbutton = document.createElement('button');
    fbutton.style.textAlign = 'center';
    fbutton.className = 'button';
    fbutton.style.width = '100px';
    fbutton.style.height = '100px';
    fbutton.style.color = 'white';
    fbutton.textContent = functionsArray[i];
    fbutton.style.backgroundColor = '#1f2937'
    functionsContainer.appendChild(fbutton);
}
let resultButton = document.createElement('button');
resultButton.style.textAlign = 'center';
resultButton.className = 'button';
resultButton.style.width = '100px';
resultButton.style.height = '200px';
resultButton.style.color = 'white';
resultButton.textContent = '=';
resultButton.style.backgroundColor = 'green';
functionsContainer.appendChild(resultButton);

var firstNumber = '';
var secondNumber = '';
var operator = '';
var displayValue = 0;
function add(firstNumber,secondNumber)
{
    return firstNumber + secondNumber;
}
function substract(firstNumber,secondNumber)
{
    return firstNumber - secondNumber;
}
function multiply(firstNumber,secondNumber)
{
    return firstNumber * secondNumber;
}
function divide(firstNumber,secondNumber)
{
    return firstNumber / secondNumber;
}
function operate(firstNumber,secondNumber,operator)
{
    if(operator == '+') add(firstNumber,secondNumber);
    else if(operator == '-') substract(firstNumber,secondNumber);
    else if(operator == '*') multiply(firstNumber,secondNumber);
    else divide(firstNumber,secondNumber);
}
