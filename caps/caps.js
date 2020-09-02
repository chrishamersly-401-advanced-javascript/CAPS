'use strict';

const net = require('net');
const inquirer = require('inquirer');
const events = require('../apps/lib/dashboard');

const EventEmitter = require('events');
require('dotenv').config();
require('../driver/drivers');
require('../vendor/vendor');




const emitter = new EventEmitter();


// events.on('pickup', payload => log('pickup', payload));
// events.on('in-transit', payload => log('in-transit', payload));
// events.on('delivered', payload => log('delivered', payload));

// function log(event, pickup) {
//   let time = new Date();
//   console.log('EVENT', {event, pickup});
// }



'use strict';



const port = process.env.PORT || 3000;
const host = process.env.HOST ||'localhost';

const server = net.createServer();

server.listen(port, () => console.log(`server up on`, port));

// const socketPool = { };

// server.on('connection', socket => {
//   socket.id = `TotallyNotProductionGradeID ${Math.random()}`;
//   socketPool[socket.id] = socket;
//   socket.on('data', buffer => onMessageReceived(buffer.toString()));
//   socket.on('close', () => deleteSocket(socket.id));
// });

function onMessageReceived(str) {
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


module.exports = { server, emitter };

