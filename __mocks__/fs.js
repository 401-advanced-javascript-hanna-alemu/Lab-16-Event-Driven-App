'use strict';

module.exports = exports = {};

var fileContents = 'Hello World';

exports.readFile = (file, cb) => {
  if (!fileContents) {
    cb('Invalid File');
  }
  else {
    cb(undefined, Buffer.from(fileContents));
  }
};

exports.writeFile = (file, buffer, cb) => {
  if (!fileContents) {
    cb('Invalid File');
  }
  else {
    fileContents = buffer;
    cb(undefined, true);
  }
};
