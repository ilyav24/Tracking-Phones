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

var clients = 0;
io.on('connection', function(socket) {
   clients++;
   io.sockets.emit('broadcast',clients + ' clients connected!');
   socket.on('disconnect', function () {
      clients--;
      io.sockets.emit('broadcast', clients + ' clients connected!');
   });
});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});
