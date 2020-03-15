function flipCharacters(str) {
  const lowerCaseLeters = 'abcdefghijklmnopqrstuvwxyz'
  const uperCaseLeters = lowerCaseLeters.toUpperCase();

  let flipedStr = '';
  const strList = str.split('');
  
  for(let i = 0; i < strList.length; i++) {
    const char = strList[i];
    if(lowerCaseLeters.includes(char)) {
      flipedStr = flipedStr + char.toUpperCase();
    } else {
      flipedStr = flipedStr + char.toLowerCase();
    }
  }

  return flipedStr;
}

flipCharacters('SuReN'); 
// sUrEn

module.exports = flipCharacters;