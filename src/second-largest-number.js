function sortFn(a, b) {
  return a - b;
}

function getSecondLargestNumber(arr) {
  const arrLength = arr.length;
  const sortedArray = [...arr].sort(sortFn);
  return sortedArray[arrLength - 2];
}

// with error handling
function getSecondLargestNumber2(arr = []) {
  if(Array.isArray(arr)) {
    const arrLength = arr.length;
    if(arrLength > 1) {
      const sortedArray = [...arr].sort(sortFn);
      return sortedArray[arrLength - 2];  
    } else {
      console.error('Array should have atleast 2 elements');
    }
  } else {
    console.error('Expected argument should be a Array');
  }

  return -1;
}

const myArr = [10, 1, 20, 3, 4, 300];

getSecondLargestNumber(myArr); 

// 20

module.exports = {
  getSecondLargestNumber,
  getSecondLargestNumber2
}