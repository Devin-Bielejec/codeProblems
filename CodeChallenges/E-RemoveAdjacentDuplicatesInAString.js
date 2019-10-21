//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/submissions/

var removeDuplicates = function(S) {
  for (let i = 0; i < S.length; i++) {
    if (S[i] === S[i + 1]) {
      S = S.slice(0, i) + S.slice(i + 2);
      i = -1;
    }
  }
  return S;
};
