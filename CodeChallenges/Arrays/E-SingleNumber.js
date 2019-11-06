/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1] || nums[i] === nums.length - 1) {
      return nums[i];
    }
  }
};

var singleNumber = function(nums) {
  const set = new Set();

  for (let num of nums) {
    set.add(num);
  }

  let arr = Array.from(set);

  let sum = arr.reduce((acc, cv) => acc + cv * 2, 0);

  return sum - nums.reduce((acc, cv) => acc + cv, 0);
};
