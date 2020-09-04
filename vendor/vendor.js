'use strict';
const client = require('socket.io-client');
const faker = require('faker');
require('dotenv').config();
const randomOrderId = faker.random.number();
const randomOrderName = faker.name.findName(); 
const randomAddress = faker.address.streetAddress(); 
const time = faker.date.recent();
const storeName = process.env.STORE_NAME;

const socket = client.connect('http://localhost:3001/caps');

socket.emit('join', storeName);

socket.on('delivered', (payload) => {
  console.log(`Thank you for delivering ${payload.orderID}`);
})

setInterval(() => {

  let delivery = {
    store : storeName, 
    orderID : randomOrderId,
    customer: randomOrderName,
    address: randomAddress
  }
  socket.emit('pickup', delivery);
}, 5000)


