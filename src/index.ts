// const express = require('express');

// const app = express();
// const server = require('http').Server(app);
// const io = require('socket.io')(server);
// const { v4: uuidv4 } = require('uuid');

// app.set('view engine', 'ejs');
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   console.log("Welcome home");
// });

// app.get('/meeting', (req, res) => {
//   var id = uuidv4();
//   console.log(id);
//   res.redirect(`/meeting/${id}`);
// });

// app.get('/meeting/:room', (req, res) => {
//   res.render('room', {roomId: req.params.room});
// });

// server.listen(3000);

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import socket from 'socket.io';
import expressStatusMonitor from 'express-status-monitor';
import connectToDatabase from './utils/mongo';
import './utils/config';

import userRouter from './routes/user.api';
import { v4 as uuidv4 } from 'uuid';

const app = express();

connectToDatabase((err) => {
  if (err) console.log(err);
});

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// API Routes
app.use('/', userRouter);

// Serving static files
if (process.env.NODE_ENV === 'production') {
  const root = path.join(__dirname, 'client', 'build');

  app.use(express.static(root));
  app.get('*', (_, res) => {
    res.sendFile('index.html', { root });
  });
}

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')} 🚀`);
  console.log('  Press Command C to stop\n');
});

const io = socket(server);

// app.set('view engine', 'ejs');
// app.use(express.static('public'));

// app.get('/', (req, res) => {
//   console.log("Welcome home");
// })

// app.get('/meeting', (req, res) => {
//   var id = uuidv4();
//   console.log(id);
//   res.redirect(`/meeting/${id}`);
// });

io.on('connection', (soc) => {
  console.log('Connected...');
  soc.on('disconnect', () => {
    console.log('Disconnected');
  });
});

app.set('socketio', io);

app.use(expressStatusMonitor({ websocket: io }));