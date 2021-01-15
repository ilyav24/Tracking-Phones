// setup server.js file to serve our application
var app = require('express')();
var http = require('http').createServer(app);
// import socket.io to server.js file
var io = require('socket.io') (http);

io.on('connection',(socket) => {
    console.log('a user has connected');
    socket.emit('test event', 'here is some data')
    
})

app.get('/', (req, res) => res.send('hello!'));

http.listen(4200, () => {
  console.log('listening on *:4200');
});