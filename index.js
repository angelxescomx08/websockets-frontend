function sendMessage(message, socket) {
  socket.send(message);
}

function renderMessage(message, messagesElement) {
  const li = document.createElement('li');
  li.textContent = message;
  messagesElement.prepend(li);
}

document.addEventListener("DOMContentLoaded", () => {

  const socket = new WebSocket('ws://localhost:3000');

  socket.onopen = (event) => {
    console.log(event);
    console.log('Connected to server');
  }

  socket.onclose = (event) => {
    console.log(event);
    console.log('Disconnected from server');
  }


  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const messages = document.querySelector('#messages');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = input.value;
    sendMessage(message, socket);
    input.value = '';
  });

  socket.onmessage = (event) => {
    console.log(event);
    const { payload } = JSON.parse(event.data);
    console.log(payload);
    renderMessage(payload, messages);
  }
});
