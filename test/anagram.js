var expect = require('chai').expect;
var isAnagram = require('./../src/anagram.js');

describe('#isAnagram: ', function() {
  it('of ("Suren", "urens") should return true', function() {
    expect(isAnagram('Suren', 'urens')).to.equal(true);
  });

  it('of ("test", "east") should return false', function() {
    expect(isAnagram('test', 'east')).to.equal(false);
  });

  it('of ("test", "tset") should return true', function() {
    expect(isAnagram('test', 'tset')).to.equal(true);
  });
});
