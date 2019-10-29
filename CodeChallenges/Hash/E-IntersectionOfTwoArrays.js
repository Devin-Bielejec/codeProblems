/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hash = {};
    for (let num of nums1) {
        hash[num] = (hash[num] || 0) + 1;
    }
    let results = [];
    for (let num of nums2) {
        if (hash[num]) {
            hash[num]--;
            results.push(num);
        }
    }
    return results;
};