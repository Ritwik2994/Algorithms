function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");

  return str === str.split("").reverse().join("");
}

console.log(palindrome("Mr. Owl ate my metal worm"));
