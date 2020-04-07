function fizzBuzz(n) {
  function isMultiplyByNumber(number) {
    return function(multiplier) {
      return number % multiplier === 0;
    }
  }

  let result = '';

  for(let i = 1; i <= n; i++) {
    if(isMultiplyByNumber(i)(3) && isMultiplyByNumber(i)(5)) {
      result += ' FizzBuzz';
    } else if(isMultiplyByNumber(i)(3)) {
      result += ' Fizz';
    } else if(isMultiplyByNumber(i)(5)) {
      result += ' Buzz';
    }
    else {
      result += ' ' + i;
    }
  }

  return result;
}

module.exports = fizzBuzz;

// Test
fizzBuzz(16);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz