function stringSplitter(string, separator) {
  const output = [];
  let startIndex = 0;
  let sepIndex = string.indexOf(separator);
  while (sepIndex !== -1) {
    output.push(string.substring(startIndex, sepIndex));
    startIndex = sepIndex + 1;
    sepIndex = string.indexOf(separator, startIndex);
  }
  output.push(string.substring(startIndex));
  return output;
}

// If separator is not included in string, linear time O(n).  If separator is included in string, polynomial time O(n^k) where k = number of occurrences of separator.

console.log(stringSplitter('02/20/2020', '/'))
console.log(stringSplitter('This is a test string', ' '))
console.log(stringSplitter('This is a test string', ','))