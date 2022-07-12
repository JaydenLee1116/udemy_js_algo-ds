// Multiple Pointers

function isSubsequence(str1, str2) {
  let str1Pointer = 0;
  let str2Pointer = 0;
  if (!str1) {
    return true;
  }
  while (str2Pointer < str2.length) {
    if (str1[str1Pointer] === str2[str2Pointer]) {
      str1Pointer++;
    }
    if (str1Pointer === str1.length) {
      return true;
    }
    str2Pointer++;
  }
  return false;
}
