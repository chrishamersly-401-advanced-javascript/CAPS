'use strict';

const events = require('./events.js');

events.on('save', handleSave);

function handleSave(order) {
  console.log(`Record ${order.orderID} was saved`);
}