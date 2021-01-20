function sockMerchant(n, ar) {
  let counter = {};
  let count = 0;

  ar.forEach((el) => {
    counter[el] = counter[el] >= 1 ? (counter[el] += 1) : 1;
  });

  Object.keys(counter).forEach((key) => {
    count += Math.floor(counter[key] / 2);
  });

  return count;
}

function main() {
  console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
}

main();
