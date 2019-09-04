'use strict';

const events = require('./events');
events.on('readFile', handleRead);
events.on('writeFile', handleWrite);

function handleRead(file) {
  console.log(`File ${file} was read`);
  events.emit('cache-update', file);
}
function handleWrite(file) {
  console.log(`File ${file} was written`);
  events.emit('cache-update', file);

}
