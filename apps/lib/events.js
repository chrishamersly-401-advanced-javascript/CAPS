// Global Event Pool (shared by all modules)

// should export an EventEmitter instance NOT the class
// this is called a Singleton

// Becuase we export the pool of events (aka emitter), any module
// that "requires" this one will get the same event pool
// This therefore acts like a global
// Technically, this is exporting a single instance of Events


'use strict';

const EventEmitter = require('events');

const emitter = new EventEmitter();


//single instance of an event emitter
// We call this a "singleton"
module.exports = emitter;