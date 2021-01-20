function hourglassSum(arr) {
  //   console.log(arr);
  let hourglass = 0; // -9999

  for (let i = 0; i <= arr.length - 3; i++) {
    // console.log(arr[i]);
    for (let j = 0; j <= arr.length - 3; j++) {
      let _hourglass = 0;

      //   console.log(`arr[${i}][${j}]=${arr[i][j]}`);

      // [0,1,2]
      // [_,1,_]
      // [0,1,2]

      _hourglass +=
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];

      if ((i == 0) & (j == 0)) hourglass = _hourglass;

      if (_hourglass > hourglass) {
        hourglass = _hourglass;
      }
    }
  }

  return hourglass;
}

function main() {
  console.log(
    hourglassSum([
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ])
  );

  console.log(
    hourglassSum([
      [-9, -9, -9, 1, 1, 1],
      [0, -9, 0, 4, 3, 2],
      [-9, -9, -9, 1, 2, 3],
      [0, 0, 8, 6, 6, 0],
      [0, 0, 0, -2, 0, 0],
      [0, 0, 1, 2, 4, 0],
    ])
  );
}

main();
