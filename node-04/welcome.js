const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

//initialize object
const myEmitter = new MyEmitter();

const welcome = (name, age) => {
    console.log(`Welcome! ${name}, ${age}`);
};


myEmitter.once('welcome', (name, age) => {
    console.log(`Welcome! ${name}, ${age}`);
})

myEmitter.emit('welcome', "Avi" , 22);
myEmitter.removeListener('welcome', welcome);
myEmitter.emit('welcome', "Avi" , 22);
