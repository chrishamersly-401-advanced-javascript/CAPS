'use strict';

const net = require('net');
const inquirer = require('inquirer');
require('dotenv').config();

const port = process.env.PORT || 3000;
// const host = process.env.HOST ||'localhost';

const server = net.createServer();

server.listen(port, () => console.log(`server up on`, port));

let socketPool = { };

server.on('connection', socket => {
  socket.id = `TotallyNotProductionGradeID ${Math.random()}`;
  socketPool[socket.id] = socket;
  socket.on('data', buffer => onMessageReceived(buffer.toString()));
  socket.on('close', () => deleteSocket(socket.id));
});

function onMessageReceived(str) {

  // const raw = buffer.toString();
  logEvent(str);
  broadcast(str);
}

function logEvent(str) {

  const time = new Date();
  const messageObj = JSON.parse(str);

  const eventName = messageObj.event;

  const payload = messageObj.payload;

  console.log('EVENT', {event:eventName, time, payload});
}

function broadcast(str) {

  for (let key in socketPool) {
    const socket = socketPool[key];
    socket.write('str');
  }
}

function deleteSocket(id) {
  delete socketPool[id];
}

module.exports = socketPool;