function getVowelsCount(str) {
  const vowels = 'aeiou';
  let vowelsCount = 0;
  for(let char of str) {
    if(vowels.includes(char)) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}

module.exports = getVowelsCount;

// console.log(getVowelsCount('hello')); // 2
// console.log(getVowelsCount('why')); // 0
