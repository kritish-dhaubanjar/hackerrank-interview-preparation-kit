function evaluate(left = [], current, right = []) {
  console.log(left, current, right);

  let count = 1;

  if (left.length > 0) {
    for (let i = 0; i < left.length; i++) {
      if (left[i] >= current) count++;
      else break;
    }
  }

  if (right.length > 0) {
    for (let i = 0; i < right.length; i++) {
      if (right[i] >= current) count++;
      else break;
    }
  }

  return count * current;
}

function largestRectangle(h) {
  let max = 0;
  let tmp;
  for (let i = 0; i < h.length; i++) {
    tmp = evaluate(h.slice(0, i).reverse(), h[i], h.slice(i + 1, h.length));
    if (tmp > max) max = tmp;
  }

  return max;
}

// largestRectangle([11, 12, 9, 10, 10]);
// largestRectangle([3, 2, 5, 6, 1, 4, 4]);
console.log(largestRectangle([1, 2, 3, 4, 5]));
