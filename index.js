const socket = new WebSocket('ws://localhost:3000');

socket.onopen = (event) => {
  console.log(event);
  console.log('Connected to server');
}

socket.onclose = (event) => {
  console.log(event);
  console.log('Disconnected from server');
}

function sendMessage(message) {
  socket.send(message);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  const input = document.querySelector('input');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = input.value;
    sendMessage(message);
    input.value = '';
  });
});
