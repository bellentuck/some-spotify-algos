const changePossibilities = (total, denoms) => {
	// Initialize an array of size total + 1, to dynamically keep track
	// of change possibilities for the whole number interval [0, total+1].
  const ways = Array(total + 1).fill(0);
  ways[0] = 1; // Base case: 1 way to make nothing: don't use anything

	for (const denom of denoms) { // Iterate through denominations available to us
		for (let amt = 1; amt < ways.length; amt++) {
      // Iterate through the natural number interval of change possibilities (0, total+1].
		  if (denom <= amt) { // If denom > amt, no change possibilities
        ways[amt] += ways[amt - denom];
        // However many ways there are to make amt - denom, we can add 1 denom to make amt.
				// Because we are iterating over possible amts, we can track all denom multiples <= total.
			}
		}
  }

	return ways[total];
}


export default (amt, denoms) => {
  if (isNaN(Number(amt)) || !Array.isArray(denoms) || denoms.some(el => isNaN(Number(el)))) {
    throw new Error('This function takes 2 inputs which must be a number and an array of numbers, respectively.');
  }
  return changePossibilities(amt, denoms);
}
