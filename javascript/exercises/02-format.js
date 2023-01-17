const formatItems = (input) => {
  // return a string of the concatenated numbers, separated by commas and with three digits after the decimal point

  let results = [];
  for (const element of input) {
    results.push(element.toFixed(3));
  }

  // for reference, see the MDN Number page:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

  return results.join(", ");
};

console.log(formatItems([1, 4, 17, 26, 41]));
// expected: '1.000, 4.000, 17.000, 26.000, 41.000'
console.log(formatItems([34.0, 12.0, 13.7, 760.1, 10.5]));
// expected: '34.000, 12.000, 13.700, 760.100, 10.500'
console.log(formatItems([235.235778, 1.2346789, 14.7, 97.3, 714.1245678]));
// expected: '235.236, 1.235, 14.700, 97.300, 714.125'
