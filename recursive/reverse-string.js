function reverseString(string) {
  if (string.length === 1) {
    return string;
  }
  return string.charAt(string.length - 1) + reverseString(string.slice(0, string.length - 1));
}

// Linear time O(n). 

console.log(reverseString('Hello, World!'))