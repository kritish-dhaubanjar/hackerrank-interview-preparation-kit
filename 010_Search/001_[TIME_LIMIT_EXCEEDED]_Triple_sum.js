function triplets(a, b, c) {
  let count = 0;

  a = [...new Set(a)];
  b = [...new Set(b)];
  c = [...new Set(c)];

  let max_b = Math.max(...b);

  a = a.filter((e) => e <= max_b);
  c = c.filter((e) => e <= max_b);

  for (let i = 0; i < a.length; i++) {
    let p = a[i];
    for (let j = 0; j < b.length; j++) {
      let q = b[j];
      if (p <= q) {
        for (let k = 0; k < c.length; k++) {
          let r = c[k];
          if (q >= r) {
            console.log(p, q, r);
            count++;
          }
        }
      }
    }
  }
  return count;
}

console.log(triplets([1, 4, 5], [2, 3, 3], [1, 2, 3]));
// console.log(triplets([1, 3, 5], [2, 3], [1, 2, 3]));
// console.log(triplets([1, 3, 5, 7], [5, 7, 9], [7, 9, 11, 13]));
