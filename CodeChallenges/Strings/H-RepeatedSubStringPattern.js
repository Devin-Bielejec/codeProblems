//Good solution below



/* 

aabaab

aabaabaabaab


abaabaabaa

check if aabaab is in ^ string


*/






























/* 
const repeatedSubstringPattern = (s) => {
    let double = s + s;
    return double.slice(1,double.length-1).includes(s);
}
*/






//Good Solution

/*
var repeatedSubstringPattern = function(s) {
    if (s.length < 2) return false;
    
    let pattern = '';
    for (let i = 0; i < s.length / 2; i++) {
        pattern += s[i];
        console.log(pattern);
        console.log(!s.split(pattern).join('').length);
        if (!s.split(pattern).join('').length) return true;
    }
    
    return false;
};
*/
