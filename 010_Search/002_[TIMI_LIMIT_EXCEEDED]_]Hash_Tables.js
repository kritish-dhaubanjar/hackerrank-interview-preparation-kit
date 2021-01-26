function whatFlavors(cost, money) {
  let icecreams = [];
  let choices = cost;
  for (let i = 0; i < choices.length; i++) {
    for (let j = i + 1; j < choices.length - 1; j++) {
      if (choices[j] == Math.abs(money - choices[i])) {
        icecreams.push(i + 1);
        icecreams.push(j + 1);
        break;
      }
    }
  }

  console.log(icecreams.join(" "));
}
whatFlavors([1, 4, 5, 3, 2], 4); //1 4
whatFlavors([2, 2, 4, 3], 4); // 1 2
