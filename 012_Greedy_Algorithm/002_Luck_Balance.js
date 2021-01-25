// Complete the luckBalance function below.
function luckBalance(k, contests) {
  let luck = 0;
  let important = contests.filter((a) => a[1] == 1).sort((a, b) => a[0] - b[0]);
  contests
    .filter((a) => a[1] == 0)
    .forEach((e) => {
      luck += e[0];
    });

  important.forEach((contest, index) => {
    if (index < important.length - k) luck -= contest[0];
    else luck += contest[0];
  });

  return luck;

  //   for (let i = 0; i < important.length - k; i++)
  //     important[i][0] = important[i][0] * -1;
}

console.log(
  luckBalance(5, [
    [13, 1],
    [10, 1],
    [9, 1],
    [8, 1],
    [13, 1],
    [12, 1],
    [18, 1],
    [13, 1],
  ])
);

// console.log(
//   luckBalance(3, [
//     [5, 1],
//     [2, 1],
//     [1, 1],
//     [8, 1],
//     [10, 0],
//     [5, 0],
//   ])
// );

// console.log(
//   luckBalance(2, [
//     [5, 1],
//     [4, 0],
//     [6, 1],
//     [2, 1],
//     [8, 0],
//   ])
// );
