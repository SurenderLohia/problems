var expect = require('chai').expect;
var fizzbuzz = require('./../src/fizz-buzz.js');

describe('#fizzbuzz: ', function() {
  it('fizzbuzz(4) should return 1 2 Fizz 4 Buzz', function() {
    expect(fizzbuzz(5)).to.equal(' 1 2 Fizz 4 Buzz');
  });

  it('fizzbuzz(3) should return 1 2 Fizz', function() {
    expect(fizzbuzz(3)).to.equal(' 1 2 Fizz');
  });
});