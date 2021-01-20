function makeAnagram(a, b) {
  a = a.split("");
  b = b.split("");

  let count = 0;

  [...a].forEach((char) => {
    if (b.includes(char)) {
      a.splice(a.indexOf(char), 1);
      b.splice(b.indexOf(char), 1);
    } else {
    }
  });

  return a.length + b.length;
}

console.log(
  makeAnagram("cde", "abc")
  //   makeAnagram("bacdc", "dcbac")
  //   makeAnagram("bacdc", "dcbad")
);
