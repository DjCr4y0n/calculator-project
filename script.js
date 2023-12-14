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
resultButton.className = 'button';
resultButton.id = 'resultButton'
resultButton.style.width = '100px';
resultButton.style.height = '200px';
resultButton.style.color = 'white';
resultButton.textContent = '=';
resultButton.style.backgroundColor = 'green';
functionsContainer.appendChild(resultButton);

var currentNumber = '';
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
    return a / b;
}
function operate(a,b,operator)
{
    if(operator == '+') return add(a,b);
    else if(operator == '-') return substract(a,b);
    else if(operator == '*') return multiply(a,b);
    else return divide(a,b);
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
            else if(button.textContent == '=')
            {
                secondNumber = Number(currentNumber)
                pom = operate(firstNumber,secondNumber,operator)
                console.log("result     " + pom);
                firstNumber = ''
                secondNumber = ''
                currentNumber = pom;
            }
            else 
            {
                operator = button.textContent;
                if(currentNumber.length == 0) firstNumber = 0;
                else if(firstNumber.length == 0)
                {
                    firstNumber = parseInt(currentNumber);
                }
                else secondNumber = parseInt(currentNumber);
                currentNumber = ''
            }
            console.log("current     " + currentNumber);
            console.log("first    " + firstNumber);
            console.log("second     " + secondNumber);
            console.log("operator    " + operator)
        })
    })


