/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let hash = {};
  for (let i = 0; i < nums1.length; i++) {
    if (!hash[nums1[i]]) {
      hash[nums1[i]] = 1;
    }
  }
  let results = [];
  for (let i = 0; i < nums2.length; i++) {
    if (hash[nums2[i]]) {
      results.push(nums2[i]);
      delete hash[nums2[i]];
    }
  }
  return results;
};
