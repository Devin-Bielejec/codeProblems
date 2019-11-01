//5 minutes

///https://leetcode.com/problems/split-a-string-in-balanced-strings/submissions/

var balancedStringSplit = function(s) {
  let count = 0;
  let countR = 0;
  let countL = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      countR++;
    } else if (s[i] === "L") {
      countL++;
    }

    if (countR === countL) {
      count++;
      countR = 0;
      countL = 0;
    }
  }
  return count;
};
