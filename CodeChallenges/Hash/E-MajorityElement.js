/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hash = {};
    for (let n of nums) {
        hash[n] = (hash[n] || 0) + 1
    }
    
    for (let key in hash) {
        if (hash[key] > nums.length/2) return key;
    }
};