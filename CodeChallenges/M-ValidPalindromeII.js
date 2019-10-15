/* 
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

https://leetcode.com/problems/valid-palindrome-ii/
*/

var validPalindrome = function(s) {
    let count = 0;
    for (let i = 0; i < s.length/2; i++) {
        if (s[i] !== s[s.length-1-i]) {
            //delete character from end
            s = s.slice(0, s.length-i-1) + s.slice(s.length-i);
            console.log(s);
            i--;
            count++;
        }
        
        if (count === 2) {
            return false;
        }
    }
    
    return true;
};

// console.log(validPalindrome("aba"));
// console.log(validPalindrome("abca"));
console.log(validPalindrome("deeee"));