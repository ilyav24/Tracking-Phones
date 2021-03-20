const insert = require('./database')
const express = require('express')
const app = express();
const http = require('http');
const { create } = require('./routes');
const server = http.Server(app);

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});

const { Pool, Client } = require('pg');
const connectionString = 'postgresql://postgres:123456@localhost:5432/locationdb'
/* Creating POOL PostgreSQL connection.*/

const pool = new Client({
  connectionString: connectionString
})

pool.connect()

const port = process.env.PORT || 3000;



var clients = 0;

var admin = io.of('/dashboard'),
  client = io.of('/standby');

admin.on('connection', function (socket) {

  // try to create new table for dashboard component (admin)
  pool.query(`CREATE TABLE IF NOT EXISTS locations 
(ip VARCHAR(255), 
city VARCHAR(255), 
country VARCHAR(255), 
latitude VARCHAR(255), 
longtitude VARCHAR(255))`, (err, res) => {
    if (err) {
      console.log(err);
    }
  })

  // communicate with dashboard component(admin) by sending him all the locations

 
  // var someVar= [];

  // app.get("/api/phones", async (req, res) => {
  //   await pool.query(`SELECT * FROM public.locations`, function(err, rows){
  //     if(err) {
  //       throw err;
  //     } else {
  //       setValue(rows);
  //     }
  //   });

  //   function setValue(value) {
  //     someVar = value;
  //     console.log(someVar);
  //     res.json(someVar).data
  //   }
  // });

  app.get("/api/phones", async (req, res) => {
    const {rows} =await pool.query(`SELECT * FROM public.locations`).catch(err => {
      console.log(err);
    });
    res.status(200).json(rows);
   });

  // communicate with dashboard component(admin) by sending him all the locations by ip
  app.get("/api/phones/:ip", async (req, res) => {
    const { rows } = await pool.query(`SELECT * FROM locations WHERE ip=${req.params.ip}`).catch(err => {
      console.log(err);
    });
    res.status(200).json(rows);
  });




  socket.emit('broadcast', 'one admin and ' + clients
    + ' clients connected!');

  socket.on('find locations', function () {
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

  socket.on('sent location', async function (location$) {
    // try to insert location into database
    await pool.query(`INSERT INTO locations VALUES($1 , $2 , $3 , $4, $5)`,
      [location$[0], location$[1], location$[2], location$[3], location$[4]]).catch(err => {
        console.log(err);
      });

    admin.emit('sent location', location$);
  })
});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});

