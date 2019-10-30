/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let hash = { a: true, e: true, i: true, o: true, u: true };
  s = s.split("");
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (hash[s[left].toLowerCase()] && hash[s[right].toLowerCase()]) {
      //swap them
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      left++;
      right--;
    }

    if (!hash[s[left].toLowerCase()]) {
      left++;
    }

    if (!hash[s[right].toLowerCase()]) {
      right--;
    }
  }

  return s.join("");
};
