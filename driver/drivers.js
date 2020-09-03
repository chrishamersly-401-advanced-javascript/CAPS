'use strict';

const io= require('socket.io-client');

const driverSocket = io.connect('http://localhost:3000/caps');

driverSocket.emit('join', 'driverFile');

driverSocket.emit('pickup', pickupHandler, (payload) => {
  console.log('pickup event');
});

driverSocket.emit('in-transit', inTransitHandler, (payload) => {
  console.log('pickup event');
});

driverSocket.emit('delivered', deliveredHandler, (payload) => {
  console.log('pickup event');
});




function pickupHandler(payload) {
  const time = new Date();
  console.log('EVENT', {event:'pickup', time, payload});
}
  
  
function inTransitHandler(order) {
  setTimeout('pickup', () => {
    console.log(`DRIVER: picked up ${order.orderID}`);
    driverSocket.emit(`in-transit', ${order.orderID}`);
  
  }, 1000);
}
  
function deliveredHandler(order) {
  setTimeout('pickup', () => {
    console.log(`DRIVER: delivered ${order.orderID}`);
    driverSocket.emit(`delivered',${order.orderID}`);
  
  }, 3000);
   
}
// pickupHandler();








// const net = require('net');
// const inquirer = require('inquirer');
// const socketPool = require('../apps/lib/server');
// const socket = new net.Socket();
// const port = process.env.PORT || 3000;
// const host = process.env.HOST ||'localhost';

// const server = net.createServer();

// console.log('im alive');

// let socketPool = {  };

// server.on('connection', (socket) => {
//   // Give each client a unique ID number
//   const id = `Socket-${Math.random()}`;
//   // Add them to the list (we're goign to need this later...)
//   socketPool[id] = socket;

//   // Here's what we do when events come in
//   socket.on('data', (buffer) => dispatchEvent(buffer));
//   // Note that this is the same as the above ... how does that work in Javascript?
//   // socket.on('data', dispatchEvent);

//   socket.on('error', (e) => { console.log('SOCKET ERROR', e); });
//   socket.on('end', (e) => { delete socketPool[id]; });

// });

// server.on('error', (e) => {
//   console.error('SERVER ERROR', e.message);
// });



// socket.on('pickup',  eventHandler); {
//   socket.emit('pickup');
// };
// // console.log('in the socket function');
// socket.on('in-transit', eventHandler('in-transit'));
// socket.on('delivered', eventHandler('delivered'));

// function eventHandler(eventName) {
  
//   return payload => {
//     const time = new Date();
//     console.log('EVENT', {event: eventName, time, payload});

//   };

// }

// console.log('in the drivers');





// function pickupHandler(payload) {
//   const time = new Date();
//   console.log('EVENT', {event:'pickup', time, payload});
// }


// function inTransitHandler(order) {
//   setTimeout('pickup', () => {
//     console.log(`DRIVER: picked up ${order.orderID}`);
//     emitter.emit(`in-transit', ${order.orderID}`);

//   }, 1000);
// }

// function deliveredHandler(order) {
//   setTimeout('pickup', () => {
//     console.log(`DRIVER: delivered ${order.orderID}`);
//     emitter.emit(`delivered',${order.orderID}`);

//   }, 3000);
 
// }
// pickupHandler();

