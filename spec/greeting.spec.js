//jshint esversion:9

const greeting = require('../src/greeting');

describe('The function greeting', () => {
  it('should greet all Ironhackers', () => {
    expect(greeting()).toEqual('Hello Ironhackers!');
  });
});
