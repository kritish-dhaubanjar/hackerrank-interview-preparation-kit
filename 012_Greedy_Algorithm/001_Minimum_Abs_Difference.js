function minimumAbsoluteDifference(arr) {
  let result;
  arr.sort((a, b) => a - b);

  console.log(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let diff = Math.abs(arr[i] - arr[i + 1]);
    if (i == 0) {
      result = diff;
    }

    if (diff < result) {
      result = diff;
    }
  }

  return result;
}

console.log(
  minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75])
);
