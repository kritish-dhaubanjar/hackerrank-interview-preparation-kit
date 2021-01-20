function maximumToys(prices, k) {
  //   for (let i = 0; i < prices.length - 1; i++) {
  //     for (let j = i + 1; j < prices.length; j++) {
  //       if (prices[j] < prices[i]) {
  //         let temp = prices[j];
  //         prices[j] = prices[i];
  //         prices[i] = temp;
  //       }
  //     }
  //   }

  prices.sort((a, b) => a - b);

  let budget = 0;
  let count = 0;
  for (let i = 0; i < prices.length; i++) {
    if (budget + prices[i] <= k) {
      budget += prices[i];
      count++;
    } else {
      break;
    }
  }

  return count;
}

console.log(maximumToys([1, 2, 3, 4], 7));
console.log(maximumToys([1, 12, 5, 111, 2000, 1000, 10], 50));
