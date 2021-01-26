function pairs(k, arr) {
  let count = 0;

  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] - arr[j] == k) count++;
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
