/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let odd = [];
  let even = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 1) {
      odd.push(A[i]);
    } else {
      even.push(A[i]);
    }
  }
  return even.concat(odd);
};
