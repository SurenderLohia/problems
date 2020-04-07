function isPalindrome(str) {
  str = str.replace(/\W/g, '');
  return str === str.split('').reverse().join('');
}

// Test
console.log(isPalindrome('madam')) // true
console.log(isPalindrome('Name')) // false