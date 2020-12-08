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

console.log(stringSplitter('02/20/2020', '/'))
console.log(stringSplitter('This is a test string', ' '))
console.log(stringSplitter('This is a test string', ','))