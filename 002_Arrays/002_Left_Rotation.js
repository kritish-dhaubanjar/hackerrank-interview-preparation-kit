function rotLeft(a, d) {
  let result = Array(a.length);

  for (let i = 0; i < a.length; i++) {
    // console.log(i, "->", (i + d) % a.length);
    let nextPos = (i + d) % a.length;
    result[i] = a[nextPos];
  }

  return result;
}

function main() {
  let result = rotLeft([1, 2, 3, 4, 5], 3);
  console.log(result.join(" ") + "\n");
  result = rotLeft([1, 2, 3, 4, 5], 4);
  console.log(result.join(" ") + "\n");
}

main();
