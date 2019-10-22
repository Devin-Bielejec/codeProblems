/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let countObj = {};
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    if (!countObj[nums[i]]) {
      countObj[nums[i]] = 1;
    } else {
      results.push(nums[i]);
    }
  }

  return results;
};
