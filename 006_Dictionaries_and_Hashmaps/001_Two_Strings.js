function twoStrings(s1, s2) {
  s1 = [...new Set(s1.split(""))];
  s2 = [...new Set(s2.split(""))];
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) return "YES";
  }

  return "NO";
}

console.log(
  twoStrings("and", "art"),
  twoStrings("be", "cat"),
  twoStrings("hello", "world"),
  twoStrings("hi", "world")
);
