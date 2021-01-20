function alternatingCharacters(s) {
  s = s.split("");

  let count = 0;
  let ch = s[0];

  for (let i = 1; i < s.length; i++) {
    if (s[i] == ch) {
      count++;
    } else {
      //   console.log(i, s[i]);
      ch = s[i];
    }
  }

  return count;
}

console.log(
  alternatingCharacters("AAAA"),
  alternatingCharacters("BBBBB"),
  alternatingCharacters("ABABABAB"),
  alternatingCharacters("BABABA"),
  alternatingCharacters("AAABBB"),
  alternatingCharacters("AABAAB")
);
