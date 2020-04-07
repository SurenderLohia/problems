var expect = require('chai').expect;
var finbonacci = require('./../src/fibonacci.js');

describe('#finbonacci: ', function() {
  it('#finbonacci(3) should return 2', function() {
    expect(finbonacci(3)).to.equal(2);
  });
});
