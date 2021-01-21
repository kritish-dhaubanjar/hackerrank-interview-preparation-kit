function isBalanced(s) {
  let stack = [];

  let open = ["(", "{", "["];
  let close = [")", "}", "]"];

  let checkpoint = false;

  s = s.split("").forEach((char) => {
    if (open.includes(char)) {
      stack.push(char);
    } else if (close.includes(char)) {
      if (stack[stack.length - 1] == open[close.indexOf(char)]) {
        stack.pop();
      } else {
        checkpoint = true;
        return "NO";
      }
    }
  });

  if (checkpoint) return "NO";

  if (stack.length == 0) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(
  // isBalanced("{(([])[])[]}"),
  isBalanced("{(([])[])[]]}")
  // isBalanced("{(([])[])[]}[]"),
  // isBalanced("{[()]}"),
  // isBalanced("{[(])}"),
  // isBalanced("{{[[(())]]}}")
);
