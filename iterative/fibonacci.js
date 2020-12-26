function fibonacci(n) {
  let sequence = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      sequence.push(1);
      continue;
    }

    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Linear time O(n).

console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))