'use strict';
//Hanna - import modules
const events = require('./events');
require('./cache.js');
require('./logger.js');

const util = require('util');
const fs = require('fs');
/**
 * This readFile function is a promise that reads the file
 * @param {object} file
 */
const readFile = util.promisify(fs.readFile);

/**
 * This writeFile function updates the fule contents with the modified content
 */
const writeFile = util.promisify(fs.writeFile);

/**
 * This function takes in the file's inner contents, changes them to strings and uppercases them
 * @param {object} fileContents 
 */
const uppercaser = (fileContents) => {
  let stringifiedContent = fileContents.toString().toUpperCase();
  return Buffer.from(stringifiedContent);
};

/**
 * This function takes in the stringified content and overwrites it
 * @param {object} file 
 */
const alterFile = (file) => {
  let stringifiedContent = null;

  readFile(file)
    .then(fileContents => {
      stringifiedContent = uppercaser(fileContents);
      return writeFile(file, stringifiedContent)
        .then (() => {
          events.emit('readFile', file);
          events.emit('writeFile', file);
          events.emit('save', file);
        });
    })
    .catch(err => console.log(err));
};

let file = process.argv.slice(2).shift();
alterFile(file);
