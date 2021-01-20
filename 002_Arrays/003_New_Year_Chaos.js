function minimumBribes(q) {
  let bribes = 0;

  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] != i + 1) {
      //i-1
      if (i - 1 >= 0 && q[i - 1] == i + 1) {
        bribes++;
        let tmp = q[i];
        q[i] = q[i - 1];
        q[i - 1] = tmp;
      }
      //i-2
      else if (i - 2 >= 0 && q[i - 2] == i + 1) {
        bribes += 2;
        q[i - 2] = q[i - 1];
        q[i - 1] = q[i];
        q[i] = i + 1;
      } else {
        console.log("Too chaotic");
        return;
      }
    }
  }

  console.log(bribes);
}

function main() {
  minimumBribes([2, 1, 5, 3, 4]);
  minimumBribes([2, 5, 1, 3, 4]);
}

main();
