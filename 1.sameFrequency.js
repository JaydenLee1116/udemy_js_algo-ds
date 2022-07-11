function sameFrequency(num1, num2) {
  const numString1 = String(num1);
  const numString2 = String(num2);

  if (numString1.length !== numString2.length) {
    return false;
  }

  const numObj1 = {};
  const numObj2 = {};

  for (let i = 0; i < numString1.length; i++) {
    numObj1[numString1[i]] = numObj1[numString1[i]]
      ? ++numObj1[numString1[i]]
      : 1;
    numObj2[numString2[i]] = numObj2[numString2[i]]
      ? ++numObj2[numString2[i]]
      : 1;
  }

  for (let num of numString1) {
    if (numObj1[num] !== numObj2[num]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(12322, 22231));
