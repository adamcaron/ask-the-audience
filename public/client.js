var socket = io();

// count
var connectionCount = document.getElementById('connection-count');
socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

// connection message
var statusMessage = document.getElementById('status-message');
socket.on('statusMessage', function (message) {
  statusMessage.innerText = message;
});

// voting buttons
var buttons = document.querySelectorAll('#choices button');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    socket.send('voteCast', this.innerText);
  });
}