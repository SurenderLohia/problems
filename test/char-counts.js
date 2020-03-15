var expect = require('chai').expect;

var getCharCounts = require('./../src/char-counts');

describe('Char Counts', function() {
  it('should return charactor count', function() {
    const word = 'test';
    const expectedCounts = {
      t: 2,
      e: 1,
      s: 1,
    }
    expect(getCharCounts(word)).to.deep.equal(expectedCounts);
  });
});

