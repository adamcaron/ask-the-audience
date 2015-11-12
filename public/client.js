var socket = io();

// count
var connectionCount = document.getElementById('connection-count');
socket.on('userConnection', function (count) {
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

// voting results
var currentTally = document.getElementById('current-tally');
socket.on('voteCount', function (votes) {
  console.log(votes);
  currentTally.innerText = JSON.stringify(votes);;
})