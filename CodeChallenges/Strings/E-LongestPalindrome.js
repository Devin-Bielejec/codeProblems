//https://leetcode.com/problems/longest-palindrome/submissions/

var longestPalindrome = function(s) {
    let hash = {};
    for (let i = 0; i < s.length; i++){
        let curLet = s[i];
        if (curLet in hash) {
            hash[curLet]++;
        } else {
            hash[curLet] = 1;
        }
    }
    let collectedOne = false;
    let count = 0;
    for (let key in hash) {
        if (hash[key] === 1 && collectedOne === false) {
            count++;
            collectedOne = true;
        }
        
        if (hash[key] > 1) {
            if (hash[key] % 2 === 0) {
                count += hash[key];
            } else {
                if (collectedOne === false) {
                    count += hash[key];
                    collectedOne = true;
                } else {
                count += hash[key]-1
                }
            }
        }
    }
    return count;
};

//Revised
var longestPalindrome = function(s) {
    let hash = {};
    for (let i = 0; i < s.length; i++){
        let curLet = s[i];
        if (curLet in hash) {
            hash[curLet]++;
        } else {
            hash[curLet] = 1;
        }
    }
    let count = 0;
    for (let key in hash) {
        count += Math.floor(hash[key]/2)*2
        if (count % 2 === 0 && hash[key] % 2 === 1) {
            count++;
        }
    }
    return count;
};
