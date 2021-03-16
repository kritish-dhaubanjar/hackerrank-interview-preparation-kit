var step = 0;
var steps = 0;
var count = 0;

function stepPermsRecursive() {
  for (let i = 1; i <= 3; i++) {
    step += i;

    // console.log(i, step);

    if (step == steps) {
      count++;
      step -= i;
      return;
    } else if (step > steps) {
      step -= i;
      return;
    } else {
      stepPermsRecursive();
      step -= i;
    }
  }
}

function stepPerms(n) {
  steps = n;
  stepPermsRecursive();
}

stepPerms(7);
console.log(count);
