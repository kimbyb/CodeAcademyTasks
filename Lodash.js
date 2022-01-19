const _ = {
  clamp(number, lower, upper) { 
    if (number <= lower) {
      return lower
    } else if (number >= upper) {
      return upper
    } else {
      return number
    }
  },

  inRange(number, start, end) {
    if ( end === undefined){
      end = start;
      start = 0;
    }
    if (start > end){
      let temp = end;
      end = start;
      start = temp;
    } 
    var isInRange = start <= number && number < end 
      return isInRange
  },

  words(string){
    let words = string.split(' ');
    return words
  },

  pad(string, len) {
    if(string.length >= len) {
      return string 
      }
      let startPaddingLength = Math.floor((len - string.length) / 2);
      let endPaddingLength = len - startPaddingLength - string.length;
      let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
      return paddedString
    
  },

  has(obj, key){
    let hasVal = obj[key];
      if (hasVal != undefined) {
        return true;
      } else {
        return false
      } 
  },

  invert(obj){
    let reverted = {};
    for(let key in obj) {
      const original = obj[key];
      reverted[original] = key;
  }
  return reverted;
  },

  chunk(arr, size = 1) {
    let newArr = [];
    for (let i = 0; i< arr.length; i += size){
      let temp = arr.slice(i, i+ size)
      newArr.push(temp)
    }
    return newArr
  },

  findKey(obj, pred){
    for(let key in obj){
      let value = obj[key];
      let returnVal = pred(value);
      if (returnVal){
        return key;
      }
    }
    undefined
    return undefined 
  },

  drop(arr, drop=1){
    return arr.slice(drop)
  },

  dropWhile(arr, pred){
      const callBack = (element, i) => {
        return !pred(element, i, arr);
      }
      let dropNum = arr.findIndex(callBack)
      let dropArr = this.drop(arr, dropNum)
      return dropArr
  }
}


// Do not write or modify code below this line.
module.exports = _;
