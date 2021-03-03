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

var admin = io.of('/dashboard'),
  client = io.of('/standby');

admin.on('connection', function (socket) {
  socket.emit('broadcast', 'one admin and ' + clients 
    + ' clients connected!');

  socket.on('find locations', function() {
    console.log("server received message")
    client.emit('location request');
  })
});

client.on('connection', function (socket) {
  clients++;
  admin.emit('broadcast', clients + ' clients connected!');
  socket.on('disconnect', function () {
    clients--;
    admin.emit('broadcast', clients + ' clients connected!');
  });

  socket.on('sent location', function (location$) {
    admin.emit('sent location',location$);
  })
});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});
