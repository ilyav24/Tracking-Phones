const express = require('express')
const app = express();

const http = require('http');
const server = http.Server(app);

const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('user connected');
    socket.emit('test event', 'here is some data')
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
