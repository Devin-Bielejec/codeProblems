//https://leetcode.com/problems/perfect-number/

/* 

We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.

Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
Note: The input number n will not exceed 100,000,000. (1e8)

*/
var checkPerfectNumber = function(num) {
    let sum = 0;
    for (let i = 1; i < num/2+1; i++) {
        if (num % i === 0) {
            sum += i;
        } 
        
        if (num % num - i === 0) {
            sum += num - i
        }
            
    }
    
    if (num === 0) {
        return false;
    } else{
        return sum === num;
    }
};

console.log(checkPerfectNumber(28));


