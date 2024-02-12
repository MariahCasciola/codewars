function orderWeight(strng) {
  let weightKey = {};
  let weightList = strng.split(" ");

  for (let number of weightList) {
    let sum = number.split("").reduce((accum, current) => accum + (+current), 0);
    weightKey[number] = sum;
  }

  return weightList
    .sort()
    .sort((a, b) => weightKey[a] - weightKey[b])
    .join(" ");
}
