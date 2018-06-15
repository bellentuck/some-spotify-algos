const repeatChars = (str, numRepeats = 1) => {
  let newStr = '';
  let idx = 0;

  while (idx < str.length - 1) {
    const numChar = Number(str[idx]);
    if (!isNaN(numChar) && str[idx + 1] === '[') {
      newStr += repeatChars(str.slice(idx + 2), numChar);
      break;
    } else if (str[idx] === ']') {
      break;
    } else {
      newStr += str[idx];
      idx++;
    }
  }
  return newStr.repeat(numRepeats);
}

export default (str) => {
  if (!str || typeof str !== 'string') {
    throw new Error('This function takes 1 input which must be a string.')
  }
  return repeatChars(str);
};
