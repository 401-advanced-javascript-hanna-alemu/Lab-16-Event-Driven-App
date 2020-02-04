'use strict';

const events = require('./events');

events.on('readFile', file => log('readFile', file));
events.on('writeFile', file => log('writeFile', file));
events.on('save', file => log('save', file));


function log(event, file) {
  let time = new Date();
  console.log({event, time});
  console.log(`${file} is saved`);
}

