// Pridobimo gumb in sporočilo
const button = document.getElementById('actionButton');
const responseMessage = document.getElementById('responseMessage');

// Dodamo dogodek na gumb
button.addEventListener('click', () => {
  responseMessage.classList.toggle('hidden'); // Prikaži ali skrij sporočilo
});