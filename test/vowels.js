var expect = require('chai').expect;
var getVowelsCount = require('./../src/vowels.js');

describe('#getVowelsCount: ', function() {
  it('#getVowelsCount("hello") should return 2', function() {
    expect(getVowelsCount('hello')).to.equal(2);
  });
  it('#getVowelsCount("why") should return 0', function() {
    expect(getVowelsCount('why')).to.equal(0);
  });
});
