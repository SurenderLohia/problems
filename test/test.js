var assert = require('assert');
var expect = require('chai').expect;

var factorial = require('./../src/factorial');
var getCharCounts = require('./../src/char-counts');
var { getSecondLargestNumber, getSecondLargestNumber2 } = require('./../src/second-largest-number');
var flipCharacters = require('../src/flip-characters');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Factorial', function() {
  it('should return factorial of the given number', function() {
    assert.equal(factorial(5), 120);
  });
});

describe('Char Count', function() {
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

describe('#getSecondLargestNumber', function() {
  it('should return second largest number', function() {
    const myArr = [10, 1, 20, 3, 4, 300];
    const expectedValue = 20;

    expect(getSecondLargestNumber(myArr)).to.equal(expectedValue);
  });
});

describe('#getSecondLargestNumber2', function() {
  it('should return second largest number', function() {
    const myArr = [10, 1, 20, 3, 4, 300];
    const expectedValue = 20;

    expect(getSecondLargestNumber2(myArr)).to.equal(expectedValue);
  });

  it('#getSecondLargestNumber should return -1 if no argument passed to the function call', function() {
    const expectedValue = -1;
    expect(getSecondLargestNumber2()).to.equal(expectedValue);
  });

  it('#getSecondLargestNumber should return -1 if string passed to argument', function() {
    const expectedValue = -1;
    expect(getSecondLargestNumber2('a')).to.equal(expectedValue);
  });

  it('#getSecondLargestNumber should return -1 if passed argument array length less than 2', function() {
    const myArr = [1];
    const expectedValue = -1;
    expect(getSecondLargestNumber2(myArr)).to.equal(expectedValue);
  });
});

describe('#flipCharacters', function() {
  it('should return flipped characters', function() {
    const name = 'SuReN';
    const expectedValue = 'sUrEn';

    expect(flipCharacters(name)).to.equal(expectedValue);
  });
});

