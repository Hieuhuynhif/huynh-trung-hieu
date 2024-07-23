const palindromeCheck = (str) => {
  const isAlpha = /^[a-zA-Z]+$/;

  let filterStr = str.toLowerCase();
  filterStr = filterStr.split("").filter((s) => isAlpha.test(s));

  let left = 0;
  let right = filterStr.length - 1;

  while (left < right) {
    if (filterStr[left] == filterStr[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
};

console.log(palindromeCheck("A man, a plan, a canal, Panama"));
