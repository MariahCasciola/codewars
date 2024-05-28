function moveZeros(arr) {
  let newArr = [];
  let zeroArr = [];
  if (arr.length === 0) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArr.push(arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr.concat(zeroArr);
}
