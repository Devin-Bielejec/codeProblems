//https://leetcode.com/problems/height-checker/submissions/

/* 

Students are asked to stand in non-decreasing order of heights for an annual photo.

Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)

*/
var heightChecker = function(heights) {
    let count = 0;
    let sortedArr = [...heights].sort((a,b) => a - b);
    for (let i = 0; i < heights.length; i++){
        if (sortedArr[i] != heights[i]) {
            count++
        }
    }
    return count;
};

console.log(heightChecker([1,1, 4, 2, 1, 3]))

