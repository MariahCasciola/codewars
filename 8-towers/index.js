function towerCombination(n) {
  return factorial(BigInt(n));
}

function factorial(n) {
  if (n < 2) return 1n;
  return n * factorial(n - 1n);
}