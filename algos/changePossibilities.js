export default (amt, denoms) => {
  if (isNaN(Number(amt)) || !Array.isArray(denoms) || denoms.some(el => isNaN(Number(el)))) {
    throw new Error('This function takes 2 inputs which must be a number and an array of numbers, respectively.');
  }

  const seenDenoms = [];
  let possibilities = 0;
  const sortedDenoms = denoms.sort((a, b) => a > b);
  for (let i = 0; i < sortedDenoms.length; i++) {
    if (sortedDenoms[i] > amt) break;
    if (sortedDenoms[i] === amt) {
      possibilities++;
      break;
    }

    if (amt % sortedDenoms[i] === 0) possibilities++;

    let multiples = 1;



    seenDenoms.push(sortedDenoms[i]);

  }
}
