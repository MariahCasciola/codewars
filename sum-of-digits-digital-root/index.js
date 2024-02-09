function digitalRoot(n) {
  n += "";
  if (n.length === 1) return parseInt(n);
  let counter = n
    .split("")
    .reduce(
      (accumulator, currentValue) => (accumulator + parseInt(currentValue)),
      0
    );
  return digitalRoot(counter);
}
