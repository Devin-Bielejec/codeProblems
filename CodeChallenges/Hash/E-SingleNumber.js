/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let hash = {};
  for (let n of nums) {
    if (hash[n]) {
      hash[n]++;
    } else {
      hash[n] = 1;
    }
  }

  for (let h in hash) {
    if (hash[h] === 1) {
      return h;
    }
  }
};
