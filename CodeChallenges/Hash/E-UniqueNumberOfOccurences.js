/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let hash = {};
  for (let item of arr) {
    if (!hash[item]) hash[item] = 1;
    else hash[item]++;
  }
  const set = new Set();
  for (let key in hash) {
    if (set.has(hash[key])) return false;
    else set.add(hash[key]);
  }

  return true;
};
