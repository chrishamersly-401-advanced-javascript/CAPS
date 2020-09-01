// - Drivers Module
// Monitor the system for events …
// On the ‘pickup’ event …
// Wait 1 second
// Log “DRIVER: picked up [ORDER_ID]” to the console.
// Emit an ‘in-transit’ event with the payload you received
// Wait 3 seconds
// Log “delivered” to the console
// Emit a ‘delivered’ event with the same payload

const emitter = require('./events');
const log = require('./dashboard');
const newCustomerOrder = require('./vendor');

emitter.on('pickup', newCustomerOrder, inTransitHandler, deliveredHandler);

emitter.on('delivered')
function inTransitHandler(order) {
  setTimeout('pickup', () => {
    console.log(`DRIVER: picked up ${order.orderID}`);
    emitter.emit(`in-transit', ${order.orderID}`);

  }, 1000);
}

function deliveredHandler(order) {
  setTimeout('pickup', () => {
    console.log(`DRIVER: delivered ${order.orderID}`);
    emitter.emit(`delivered',${order.orderID}`);

  }, 3000);
 
}
