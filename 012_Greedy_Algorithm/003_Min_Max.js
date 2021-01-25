function maxMin(k, arr) {
  arr.sort((a, b) => a - b);

  let unfaireness;

  for (let i = 0; i <= arr.length - k; i++) {
    // let members = arr.slice(i, i + k);
    // console.log(members);
    // console.log(members[0], members[k - 1]);
    // console.log(arr[i], arr[i + k - 1]);

    // let tmp = Math.max(...members) - Math.min(...members);
    let tmp = arr[i + k - 1] - arr[i];
    if (i == 0) unfaireness = tmp;

    if (tmp < unfaireness) {
      unfaireness = tmp;
    }
  }

  return unfaireness;
}

console.log(maxMin(3, [100, 200, 300, 350, 400, 401, 402])); //2
// console.log(maxMin(4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]));
// console.log(maxMin(3, [10, 100, 300, 200, 1000, 20, 30]));
