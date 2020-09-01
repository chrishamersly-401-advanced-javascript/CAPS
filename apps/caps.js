// Main Hub Application
// Manages the state of every package (ready for pickup, in transit, delivered, etc)
// Logs every event to the console with a timestamp and the event payload
// i.e. “EVENT {}”

'use strict';

const events = require('./events.js');
// require('./drivers');
// require('./events');
// require('./dashboard');
// require('./logger');
// require('./drivers')

events.on('pickup', payload => log('pickup', payload));
events.on('in-transit', payload => log('in-transit', payload));
events.on('delivered', payload => log('delivered', payload));

function log(event, pickup) {
  let time = new Date();
  console.log('EVENT', {event, pickup});
}

module.exports = log;