var container = document.querySelector('.calculator-body');

for (i=0;i<10;i++)
{
    let button = document.createElement('button');
    button.style.textAlign = "center";
    button.className = 'button';
    button.style.width = '100px';
    button.style.height = '100px';
    button.textContent = 9-i;
    button.style.color = 'white';
    button.style.margin = '5px';
    button.style.backgroundColor = '#1f2937';
    container.appendChild(button);
}