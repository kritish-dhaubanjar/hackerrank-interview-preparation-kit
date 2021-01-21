function poisonousPlants(p) {
  let indices = [];
  let count = 0;
  let end = false;

  do {
    indices = [];
    for (let i = 0; i < p.length - 1; i++) {
      if (p[i + 1] > p[i]) {
        indices.push(i + 1);
      }
    }

    if (indices.length > 0) {
      count++;

      let tmp = p.filter((e, j) => {
        return !indices.includes(j);
      });

      p = [...tmp];
    } else {
      end = true;
    }
  } while (!end);

  return count;
}

console.log(poisonousPlants([6, 5, 8, 4, 7, 10, 9]));
