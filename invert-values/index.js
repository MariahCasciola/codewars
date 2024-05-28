function invert(array) {
  if (array.length === 0) return [];
  return array.map((elements, index) => elements * -1);
}
