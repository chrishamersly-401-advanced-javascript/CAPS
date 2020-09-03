'use strict';

const io= require('socket.io-client');
const faker = require('faker');
require('dotenv').config();
const vendorSocket = io.connect('http://localhost:3001/caps');
vendorSocket.emit('join', process.env.STORE_NAME);

const randomOrderId = faker.random.number();
const randomOrderName = faker.name.findName(); 
const randomAddress = faker.address.streetAddress(); 
const time = faker.date.recent();
const storeName = process.env.STORE_NAME;


setInterval(()=>{

    const order ={
      event: 'pickup',
      time: new Date(),
        storename: storeName,
        orderID: randomOrderId, 
        customerName: randomOrderName,
        address: randomAddress, 
      }

console.log('driver picked up', order.orderID, time)
  vendorSocket.emit('pickup', order);
}, 5000);

setInterval(()=>{

  const order ={
    event: 'pickup',
    time: new Date(),
      storename: storeName,
      orderID: randomOrderId, 
      customerName: randomOrderName,
      address: randomAddress, 
    }

console.log('driver delivered', order.orderID, time)
vendorSocket.emit('delivered', order);
}, 5000);











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


 
