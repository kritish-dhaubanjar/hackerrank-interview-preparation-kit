function arrayManipulation(n, queries) {
  let arr = Array(n).fill(0);

  for (let i = 0; i < queries.length; i++) {
    let a = queries[i][0] - 1;
    let b = queries[i][1] - 1;
    let k = queries[i][2];

    arr[a] += k;
    arr[b + 1] -= k;
  }

  //   console.log(arr);

  let result = 0;
  let acc = 0;

  for (let i = 0; i < n; i++) {
    acc += arr[i];

    if (acc > result) {
      result = acc;
    }
  }

  return result;
}

function main() {
  let result = arrayManipulation(10, [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1],
  ]);
  console.log(result);

  //   result = arrayManipulation(10, [
  //     [1, 2, 100],
  //     [2, 5, 100],
  //     [3, 4, 100],
  //   ]);

  //   console.log(result);
}

main();
