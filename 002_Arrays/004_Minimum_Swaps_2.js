function minimumSwaps(arr) {
  let swap = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 != arr[i]) {
      let t = i;
      while (arr[t] != i + 1) {
        t++;
      }
      let temp = arr[t];
      arr[t] = arr[i];
      arr[i] = temp;
      swap++;
      console.log(arr);
    }
  }
  return swap;
}

function main() {
  console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
}

main();
