function whatFlavors(cost, money) {
  const map = new Map();
  for (let i = 0; i < cost.length; i++) {
    let target = money - cost[i];
    if (map.has(target)) {
      console.log(map.get(target), i + 1);
      break;
    }
    map.set(cost[i], i + 1);
  }
}

whatFlavors([1, 4, 5, 3, 2], 4); //1 4
whatFlavors([2, 2, 4, 3], 4); // 1 2
