function getCharCounts(str) {
  return str.split('').reduce((wordCounts, char) => {
    if(char in wordCounts) {
      wordCounts[char]++
    } else {
      wordCounts[char] = 1;
    }
    return wordCounts;
  }, {});
}

module.exports = getCharCounts;