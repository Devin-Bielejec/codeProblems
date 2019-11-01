/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let results = [];
  S = S.split("");
  let left = 0,
    right = 0;
  for (let i = 0; i < S.length; i++) {
    S[i] === "(" ? left++ : right++;

    if (left === right && left > 0) {
      left = 0;
      right = 0;
      continue;
    }

    if (left === 1) {
      continue;
    }

    results.push(S[i]);
  }

  return results.join("");
};
