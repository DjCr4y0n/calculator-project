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
let functionsArray = ['+','-', '*', '/']
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

let clearButton = document.createElement('button');
clearButton.style.textAlign = 'center';
clearButton.className = 'resultButton';
clearButton.style.width = '100px';
clearButton.style.height = '100px';
clearButton.style.color = 'white';
clearButton.textContent = 'clear';
clearButton.style.backgroundColor = '#1f2937';
functionsContainer.appendChild(clearButton);

let resultButton = document.createElement('button');
resultButton.style.textAlign = 'center';
resultButton.className = 'resultButton';
resultButton.style.width = '100px';
resultButton.style.height = '200px';
resultButton.style.color = 'white';
resultButton.textContent = '=';
resultButton.style.backgroundColor = 'green';
functionsContainer.appendChild(resultButton);

var currentNumber = '0';
var firstNumber = '';
var secondNumber = '';
var operator = '';
var displayValue = 0;
function add(a,b)
{
    return a + b;
}
function substract(a,b)
{
    return a - b;
}
function multiply(a,b)
{
    return a * b;
}
function divide(a,b)
{
    return a / secondNumber;
}
function operate(a,b,operator)
{
    if(operator == '+') add(a,b);
    else if(operator == '-') substract(a,b);
    else if(operator == '*') multiply(a,b);
    else divide(a,b);
}
const buttons = document.querySelectorAll('.button');
buttons.forEach(button =>
    {

        button.addEventListener('click', function handleCLick()
        {
            console.log('clicked');
            if(['0','1','2','3','4','5','6','7','8','9'].indexOf(button.textContent) >= 0 )
            {
                currentNumber += button.textContent;
            }
            else 
            {
                if(currentNumber == '0') firstNumber = 0;
                else if(firstNumber.length == 0)
                {
                    firstNumber = Number(currentNumber);
                }
                else secondNumber = Number(currentNumber);
                currentNumber = '0'
            }
            console.log(currentNumber);
            console.log(firstNumber);
            console.log(secondNumber);
        })
    })

