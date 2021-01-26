function pairs(k, arr) {
  let count = 0;
  let i = 0;
  let j = 1;
  arr.sort((a, b) => a - b);
  while (j < arr.length) {
    let diff = arr[j] - arr[i];

    if (diff == k) {
      count++;
      j++;
    } else if (diff > k) {
      i++;
    } else if (diff < k) {
      j++;
    }
  }
  return count;
}

console.log(pairs(2, [1, 5, 3, 4, 2])); //3
console.log(pairs(2, [1, 3, 5, 8, 6, 4, 2])); //5
console.log(
  pairs(1, [
    363374326,
    364147530,
    61825163,
    1073065718,
    1281246024,
    1399469912,
    428047635,
    491595254,
    879792181,
    1069262793,
  ])
); //0
