var assert = require('assert');

var factorial = require('./../src/factorial');

describe('Factorial', function() {
  it('should return factorial of the given number', function() {
    assert.equal(factorial(5), 120);
  });
});

