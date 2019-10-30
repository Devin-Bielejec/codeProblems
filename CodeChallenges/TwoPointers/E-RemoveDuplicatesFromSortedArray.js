/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    let cur = i;
    let prev = i - 1;
    if (nums[prev] === nums[cur]) {
      nums.splice(prev, 1);
    }
  }
  return nums.length;
};
