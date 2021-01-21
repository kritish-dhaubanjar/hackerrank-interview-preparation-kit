function checkMagazine(magazine, note) {
  let replica = true;

  for (let i = 0; i < note.length; i++) {
    let index = magazine.indexOf(note[i]);
    if (index == -1) {
      replica = false;
      break;
    } else {
      magazine.splice(index, 1);
    }
  }

  console.log(replica ? "Yes" : "No");
}

checkMagazine(
  ["give", "me", "one", "grand", "today", "night"],
  ["give", "one", "grand", "today"]
);
checkMagazine(
  ["two", "times", "three", "is", "not", "four"],
  ["two", "times", "two", "is", "four"]
);
