function jumpingOnClouds(c) {
  let jumps = 0;
  let i = 0;

  while (i < c.length - 1) {
    if (c[i] == 0) {
      if (c[i + 2] == 0) {
        jumps++;
        i += 2;
      } else {
        jumps++;
        i += 1;
      }
      //   console.log(i);
    }
  }

  return jumps;
}

function main() {
  //7
  console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
  //6
  console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
}

main();
