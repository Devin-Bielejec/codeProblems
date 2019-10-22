/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.sort((a, b) => Math.pow(a, 2) - Math.pow(b, 2)).map(item =>
    Math.pow(item, 2)
  );
};
