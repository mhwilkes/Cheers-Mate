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



var users: { [roomID: string]: Array<string>; };
// var users : {
//   roomID: string;
// } = {};

var socketToRoom: { [socketID: string]: string; };

const io = socket(server);

io.on('connection', (socket) => {
  socket.on('join room', (roomID) => {
    if (users[roomID]) {
      const length = users[roomID].length;
      if (length === 4) {
        socket.emit('room full');
        return;
      }
      users[roomID].push(socket.id);
    } else {
      users[roomID]= [socket.id];
    }
    socketToRoom[socket.id] = roomID;
    const usersInThisRoom = users.roomID.filter((id) => id !== socket.id);

    socket.emit('all users', usersInThisRoom);
  });

  socket.on('sending signal', (payload) => {
    io.to(payload.userToSignal).emit('user joined', {
      signal: payload.signal,
      callerID: payload.callerID,
    });
  });

  socket.on('returning signal', (payload) => {
    io.to(payload.callerID).emit('receiving returned signal', {
      signal: payload.signal,
      id: socket.id,
    });
  });

  socket.on('disconnect', () => {
    const roomID = socketToRoom[socket.id];
    let room = users[roomID];
    if (room) {
      room = room.filter((id) => id !== socket.id);
      users[roomID] = room;
    }
  });
});

app.set('socketio', io);

app.use(expressStatusMonitor({ websocket: io }));
