'use strict';

const cache = require('../modular-events/cache');
const events = require('../modular-events/events');
const index = require('../modular-events/index');
const logger = require('../modular-events/logger');
const mockFile = require('../__mocks__/fs');

describe('it can read uppercase contents of a file', () => {
  test('should get an output that is all uppercase from the file', () => {
    let test = mockFile;

    console.log(test.readFile);

  });

});