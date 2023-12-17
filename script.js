var numbersContainer = document.querySelector('.numbers');
var functionsContainer = document.querySelector('.functions');

let numbersArray = [7,8,9,4,5,6,1,2,3,0,'.'];
for (i=0;i<numbersArray.length;i++)
{
    let button = document.createElement('button');
    button.style.fontSize = '30px';
    button.style.textAlign = "center";
    button.className = 'button';
    button.style.width = '100px';
    button.style.height = '100px';
    button.textContent = numbersArray[i];
    button.style.color = 'white';
    button.style.backgroundColor = '#1f2937';
    numbersContainer.appendChild(button);
}
let functionsArray = ['+','-', '*', '/']
for (i=0; i<functionsArray.length;i++)
{
    let fbutton = document.createElement('button');
    fbutton.style.fontSize = '30px';
    fbutton.style.textAlign = 'center';
    fbutton.className = 'button';
    fbutton.style.width = '100px';
    fbutton.style.height = '100px';
    fbutton.style.color = 'white';
    fbutton.textContent = functionsArray[i];
    fbutton.style.backgroundColor = '#1f2937'
    functionsContainer.appendChild(fbutton);
}

var currentNumber = '';
var firstNumber = 0;
var secondNumber = 0;
var operator = '';

let clearButton = document.createElement('button');
clearButton.style.fontSize = '30px';
clearButton.style.textAlign = 'center';
clearButton.className = 'clearButton';
clearButton.style.width = '100px';
clearButton.style.height = '100px';
clearButton.style.color = 'white';
clearButton.textContent = 'clear';
clearButton.style.backgroundColor = '#1f2937';
numbersContainer.appendChild(clearButton);

let resultButton = document.createElement('button');
resultButton.style.fontSize = '30px';
resultButton.style.textAlign = 'center';
resultButton.className = 'resultButton';
resultButton.style.width = '200px';
resultButton.style.height = '100px';
resultButton.style.color = 'white';
resultButton.textContent = '=';
resultButton.style.backgroundColor = 'green';

let deleteButton = document.createElement('button');
deleteButton.style.fontSize = '30px';
deleteButton.style.textAlign = 'center';
deleteButton.className = 'deleteButton';
deleteButton.style.width = '200px';
deleteButton.style.height = '100px';
deleteButton.style.color = 'white';
deleteButton.textContent = 'delete';
deleteButton.style.backgroundColor = '#1f2937';

functionsContainer.appendChild(deleteButton);
functionsContainer.appendChild(resultButton);

let numberBox = document.querySelector(".number-box");
let operatorBox = document.querySelector(".operator-box");


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
    if(a==0) return "Error";
    return a / b;
}
function operate(a,b,operator)
{
    if(operator == '+') return add(a,b);
    else if(operator == '-') return substract(a,b);
    else if(operator == '*') return multiply(a,b);
    else return divide(a,b);
}
function lengthCheck()
{
    if(currentNumber.length >= 8)
    {
        alert('The number has reached the limit of display!');
        return true;
    }
    return false;
}

clearButton.addEventListener('click', function handleCLick()
{
    currentNumber = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
    numberBox.textContent = 0;
    operatorBox.textContent = '';
})

deleteButton.addEventListener('click', function handleCLick()
{
    console.log(currentNumber)
    console.log(numberBox.textContent)
    if(currentNumber.length <= 1)
    {
        currentNumber = '';
        numberBox.textContent = 0;
    }
    else
    {
        currentNumber = currentNumber.slice(0,currentNumber.length-1);
        numberBox.textContent = currentNumber;
    }
})

resultButton.addEventListener('click', function handleCLick()
{
    pom = operate(firstNumber,secondNumber,operator);
    secondNumber = '';
    currentNumber = pom;
    currentNumber = currentNumber.toString();
    firstNumber = parseFloat(currentNumber);
    operatorBox.textContent = '';
    operator = '';
    
    numberBox.textContent = currentNumber;
})

numberBox.textContent = 0;

const buttons = document.querySelectorAll('.button');
buttons.forEach(button =>
    {
        button.addEventListener('click', function handleCLick()
        {
            if(['0','1','2','3','4','5','6','7','8','9','.'].indexOf(button.textContent) >= 0 && lengthCheck() == false)
            {
                currentNumber += button.textContent;
                numberBox.textContent = currentNumber;
                if(operator == '') firstNumber = parseFloat(currentNumber);
                else secondNumber = parseFloat(currentNumber);
            }
            else if(functionsArray.indexOf(button.textContent) >= 0)
            {
                operator = button.textContent;
                operatorBox.textContent = operator;
                currentNumber = '';
            }
        })
    })


