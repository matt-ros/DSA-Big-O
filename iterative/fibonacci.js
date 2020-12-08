// function fibonacci(n) {
//   if (n === 2) {
//     return [1, 1];
//   } else {
//     let sequence = fibonacci(n - 1);
//     sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
//     return sequence;
//   }
// }

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

console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))