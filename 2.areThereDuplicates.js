function areThereDuplicates(...arg) {
  // good luck. (supply any arguments you deem necessary.)
  const arr = [...arg];

  const obj = {};

  for (let value of arr) {
    obj[value] ? ++obj[value] : (obj[value] = 1);

    if (obj[value] >= 2) {
      return true;
    }
  }
  return false;
}
