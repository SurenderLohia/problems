var expect = require('chai').expect;

var flipCharacters = require('../src/flip-characters');

describe('#flipCharacters', function() {
  it('should return flipped characters', function() {
    const name = 'SuReN';
    const expectedValue = 'sUrEn';

    expect(flipCharacters(name)).to.equal(expectedValue);
  });
});

