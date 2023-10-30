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
functionsArray = ['+','-', '*', '/', '=']
for (i=0; i<5;i++)
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
