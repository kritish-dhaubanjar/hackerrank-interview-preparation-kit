function repeatedString(s, n) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "a") count++;
  }
  //abaabaaba
  let rep_count = Math.floor(n / s.length) * count;

  //ab
  let rem = n - s.length * Math.floor(n / s.length);

  //a
  for (let i = 0; i < rem; i++) {
    if (s[i] == "a") rep_count++;
  }

  return rep_count;
}

function main() {
  console.log(repeatedString("aba", 10));
}

main();
