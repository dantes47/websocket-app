const status = document.getElementById('status'),
      messages = document.getElementById('messages'),
      form = document.getElementById('form'),
      input = document.getElementById('input'),
      ws = new WebSocket('ws://localhost:3000');

function setStatus(value) {
    status.innerHTML = value;
}

function printMessage(value) {
    const li = document.createElement('li');

    li.innerHTML = value;
    messages.appendChild(li);
}

form.addEventListener('submit', event => {
    event.preventDefault();

    ws.send(input.value); 
    input.value = '';  
});

ws.onopen = () => setStatus('ONLINE');
ws.onclose = () => setStatus('OFFLINE');
ws.onmessage = response => printMessage(response.data);