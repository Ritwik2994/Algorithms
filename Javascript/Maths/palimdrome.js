function palindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0] === str.slice(-1)) {
    return palindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

console.log(palindrome("abcdcba"));
