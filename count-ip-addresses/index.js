function ipsBetween(start, end) {
  const startBaseTen = baseTen(start);
  const endBaseTen = baseTen(end);
  return endBaseTen - startBaseTen;
}

function baseTen(string) {
  const array = string.split(".");
  return array
    .map((number, index) => {
      return 256 ** (array.length - index - 1) * parseInt(number);
    })
    .reduce(
      (accumulator, currentValue) => parseInt(accumulator) + currentValue,
      0
    );
}
