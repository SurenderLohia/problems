function getCharCounts(word) {
  const charCounts = {};
  word = word.replace(/\W/g, '').toLowerCase();
  for(let char of word) {
    if(!charCounts[char]) {
      charCounts[char] = 1;
    } else {
      charCounts[char] += 1;
    }
  }

  return charCounts;
}

function isAnagram(word1, word2) {
  const word1CharCounts = getCharCounts(word1);
  const word2CharCounts = getCharCounts(word2);

  if(Object.keys(word1CharCounts).length !== Object.keys(word2CharCounts).length) {
    return false;
  }

  Object.keys(word1CharCounts).forEach((char) => {
    if(word1CharCounts[char] !== word2CharCounts[char]) {
      return false;
    }
  })

  return true;
}

module.exports = isAnagram;

// Test cases
// console.log(isAnagram('Suren', 'urens')); // true
// console.log(isAnagram('test', 'east')); // false
// console.log(isAnagram('test', 'test')); // true