const socket = new WebSocket('ws://localhost:3000');

socket.onopen = (event) => {
  console.log(event);
  console.log('Connected to server');
}

socket.onclose = (event) => {
  console.log(event);
  console.log('Disconnected from server');
}