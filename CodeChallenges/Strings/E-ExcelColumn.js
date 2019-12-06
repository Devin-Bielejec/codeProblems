/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let total = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    total += Math.pow(26, s.length - 1 - i) * (s[i].charCodeAt() - 64);
  }

  return total;
};
