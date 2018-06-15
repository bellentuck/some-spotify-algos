const hashChars = str => {
  const chars = {};
  for (const char of str[Symbol.iterator]()) {
    if (chars.hasOwnProperty(char)) chars[char] += 1;
    else chars[char] = 1;
  }
  return chars;
}

const composeSortedStr = (str, target, charsHash) => {
  let sortedStr = '';
  let sortedStrLength = 0;
  for (const char of target[Symbol.iterator]()) {
    if (charsHash.hasOwnProperty(char)) {
      while (charsHash[char]) {
        sortedStr += char;
        sortedStrLength++;
        charsHash[char]--;
      }
    }
    if (sortedStrLength === str.length) break;
  }
  return sortedStr;
}

export default (str, target) => {
  if (!str || !target || typeof str !== 'string' || typeof target !== 'string') {
    throw new Error('This function takes 2 inputs which must both be strings.')
  }
  return composeSortedStr(str, target, hashChars(str));
};
