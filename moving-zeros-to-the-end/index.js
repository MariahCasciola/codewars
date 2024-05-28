function moveZeros(arr) {
  let count = 0;
  let newArr = [];
  if (arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count += 1;
    } else {
      newArr.push(arr[i]);
    }
  }
  if (count === 0) {
    return newArr;
  }
  for (let i = 0; i < count; i++) {
    newArr.push(0);
  }
  return newArr;
}
