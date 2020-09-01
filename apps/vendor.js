'use strict';


// Emit a ‘pickup’ event and attach the fake order as payload
// Monitor the system for events …


//deliveredHandler imported
//pickup handler delivered
const faker = require('faker');


const randomStore = faker.phone.phoneNumber();
const randomOrderId = faker.random.number();
const randomOrderName = faker.name.findName(); 
const randomAddress = faker.address.streetAddress(); 

// Declare your store name (perhaps in a .env file, so that this module is re-usable)
let storeName = process.env.STORE_NAME;

// Every 5 seconds, simulate a new customer order
//for five seconds, every five seconds.  
function newCustomerOrder (order) {

  setInterval(order , () => {
    const delivery = {
      store: randomStore,
      orderID: randomOrderId,
      customer: randomOrderName,
      address: randomAddress,
    };
  }, 5000)

 
}