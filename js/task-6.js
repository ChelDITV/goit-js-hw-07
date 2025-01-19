function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');

    const size = 30 + i * 10;

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = '5px';

    boxesContainer.appendChild(div);
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const inputValue = document.querySelector('.input-task6').value;
  const amount = parseInt(inputValue);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); 
  } else {
    alert('Please enter a number between 1 and 100');
  }

  document.querySelector('.input-task6').value = '';
});

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
