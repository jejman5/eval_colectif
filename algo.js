const button = document.createElement('button');
button.textContent = 'Cliquez-moi';
document.body.appendChild(button);

let clickCount = 0;

button.addEventListener('click', () => {
  clickCount++;
  const message = `Vous avez cliqué ${clickCount} fois!`;
  alert(message);
  console.log(message);
});