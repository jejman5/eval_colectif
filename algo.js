const button = document.createElement('button');
button.textContent = 'Cliquez-moi';
const resetButton = document.createElement('button');
resetButton.textContent = 'Réinitialiser';
const counterDisplay = document.createElement('div');
const colorPicker = document.createElement('input');
colorPicker.type = 'color';
const messageInput = document.createElement('input');
messageInput.type = 'text';
messageInput.placeholder = 'Entrez un message personnalisé';

document.body.appendChild(button);
document.body.appendChild(resetButton);
document.body.appendChild(counterDisplay);
document.body.appendChild(colorPicker);
document.body.appendChild(messageInput);

let clickCount = 0;
updateDisplay();

function updateDisplay() {
    counterDisplay.textContent = `Nombre de clics : ${clickCount}`;
    counterDisplay.style.color = colorPicker.value;
}


button.addEventListener('click', () => {
    clickCount++;
    updateDisplay();
    const customMessage = messageInput.value || 'Vous avez cliqué!';
    console.log(`${customMessage} (Total: ${clickCount})`);
});

resetButton.addEventListener('click', () => {
    clickCount = 0;
    updateDisplay();
    console.log('Compteur réinitialisé');
});

colorPicker.addEventListener('input', updateDisplay);

button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.1)';
});
button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
});