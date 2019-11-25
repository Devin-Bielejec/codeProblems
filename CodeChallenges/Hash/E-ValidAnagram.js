/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  let hash = {};
  for (let letter of s) {
    hash[letter] = (hash[letter] || 0) + 1;
  }

  for (let letter of t) {
    if (hash[letter]) {
      if (hash[letter] === 0) {
        return false;
      } else {
        hash[letter]--;
      }
    } else {
      return false;
    }
  }
  return true;
};
