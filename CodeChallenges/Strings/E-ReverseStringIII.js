//https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/

var reverseWords = function(s) {
  return s
    .split(" ")
    .map(word =>
      word
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");
};
