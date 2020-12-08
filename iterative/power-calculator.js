function powerCalculator(base, exp) {
  if (exp < 0) {
    return 'exponent should be >= 0';
  }

  let total = 1;
  for (let i = 0; i < exp; i++) {
    total *= base;
  }
  return total;
}

console.log(powerCalculator(10, -6))
console.log(powerCalculator(10, 0))
console.log(powerCalculator(10, 1))
console.log(powerCalculator(10, 2))
console.log(powerCalculator(10, 3))