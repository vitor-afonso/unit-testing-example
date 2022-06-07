//jshint esversion:9

function sum(array) {
  if (array === undefined) {
    throw new Error('No parameter provided');
  }
  if (array.length === 0) return 0;

  return array.reduce((acc, value) => acc + value, 0);
}

if (typeof module !== 'undefined') {
  module.exports = sum;
}
