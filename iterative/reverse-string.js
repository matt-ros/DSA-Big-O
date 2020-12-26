function reverseString(string) {
  let output = '';
  for (let i = string.length - 1; i >= 0; i--) {
    output += string.charAt(i);
  }
  return output;
}

// Linear time O(n).

console.log(reverseString('Hello, World!'))