function nthTriangularNumber(n) {
  let triNum = 0;
  for (let i = 1; i <= n; i++) {
    triNum += i;
  }
  return triNum;
}

// Linear time O(n).

console.log(nthTriangularNumber(4))
console.log(nthTriangularNumber(5))
console.log(nthTriangularNumber(6))
console.log(nthTriangularNumber(7))
console.log(nthTriangularNumber(8))
console.log(nthTriangularNumber(9))