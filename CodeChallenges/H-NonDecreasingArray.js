var checkPossibility = function(nums) {
    nums.unshift(-Infinity);
    nums.push(Infinity);
    let count = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        let prev = nums[i-1];
        let cur = nums[i];
        let next = nums[i+1];
        if (count === 2) {
            return false;
        }
        
        if (cur > next) {
            if (next - prev < 0) {
                nums[i+1] = cur;
            } else {
                nums[i] = next;
            }
            count++
        }
    }
    return true;
};


console.log(checkPossibility([3, 4, 2, 3]));