function countSwaps(a) {
  let numSwaps = 0;
  let n = a.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[i]) {
        let temp = a[j];
        a[j] = a[i];
        a[i] = temp;
        numSwaps++;
      }
    }
  }

  console.log(`Array is sorted in ${numSwaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[n - 1]}`);
}

countSwaps([6, 4, 1]);
