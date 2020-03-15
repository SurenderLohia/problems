var expect = require('chai').expect;

var { getSecondLargestNumber, getSecondLargestNumber2 } = require('./../src/second-largest-number');

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

