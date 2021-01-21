function activityNotifications(expenditure, d) {
  //   console.log(expenditure);

  let notices = 0;
  for (let i = 0; i < expenditure.length - d; i++) {
    let median;

    let transaction = [];

    for (let j = i; j < i + d; j++) {
      transaction.push(expenditure[j]);
    }

    transaction.sort((a, b) => a - b);

    if (d % 2 != 0) {
      median = transaction[i + Math.floor(d / 2)];
    } else {
      median =
        (transaction[i + Math.floor(d / 2) - 1] +
          transaction[i + Math.floor(d / 2)]) /
        2;
    }

    console.log(transaction);
    console.log(expenditure[i + d]);

    if (expenditure[i + d] >= 2 * median) {
      notices++;
    }
  }

  return notices;
}

console.log(
  activityNotifications([10, 20, 30, 40, 50], 3),
  activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5),
  activityNotifications([1, 2, 3, 4, 4], 4)
);
