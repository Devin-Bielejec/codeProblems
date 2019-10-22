/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let hash = {};
  let result = 0;
  for (let key of J) {
    hash[key] = 1;
  }
  for (let item of S) {
    if (hash[item]) result++;
  }
  return result;
};
