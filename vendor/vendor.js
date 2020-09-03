'use strict';

const io= require('socket.io-client');
const faker = require('faker');
require('dotenv').config();
const vendorSocket = io.connect('http://localhost:3000/caps');
vendorSocket.emit('join', 'vendorFile');

const randomOrderId = faker.random.number();
const randomOrderName = faker.name.findName(); 
const randomAddress = faker.address.streetAddress(); 
let storeName = process.env.STORE_NAME;

// vendorSocket.broadcast.emit('pickup', (payload) => {
//   setInterval(function(){
//     socket.emit('New Order', {
//       event: 'pickup',
//       time: new Date(),
//       payload: {
//         storename: storeName,
//         orderID: randomOrderId, 
//         customerName: randomOrderName,
//         address: randomAddress, 
//       }
//     });
//   }, 5000)
// });





// const faker = require('faker');
// require('dotenv').config();
// const emitter = require('../apps/lib/events');


// const randomStore = faker.phone.phoneNumber();



// const delivery = {
//   store: randomStore,
//   orderID: randomOrderId,
//   customer: randomOrderName,
//   address: randomAddress,
// };

// emitter.on('delivered', (payload) =>{
//   console.log(`VENDOR: Thank you for delivering ${payload.orderID}`);
// });


// function start() {
//   setInterval(() => {
//     emitter.emit('pickup', delivery);
//   }, 5000);
// }


// console.log('in the vendors');
// start();

// module.exports = { start };


 
