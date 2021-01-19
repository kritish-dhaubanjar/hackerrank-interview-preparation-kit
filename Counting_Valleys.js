function countingValleys(steps, path) {
  let currentLevel = 0;
  let previousLevel = 0;
  let count = 0;

  for (let i = 0; i < steps; i++) {
    previousLevel = currentLevel;
    currentLevel = path[i] == "U" ? currentLevel + 1 : currentLevel - 1;
    if (previousLevel == -1 && currentLevel == 0) {
      count++;
    }
  }
  return count;
}

function main() {
  console.log(countingValleys(8, "UDDDUDUU"));
}

main();
