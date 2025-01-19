const inputElement = document.getElementById('name-input');
const outputElement = document.getElementById('name-output');

inputElement.addEventListener('input', () => {
    const name = inputElement.value.trim();
    outputElement.textContent = name ? name : 'Anonymous';
});
