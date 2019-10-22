/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  let N = A.length / 2;
  let countObj = {};
  for (let i = 0; i < A.length; i++) {
    if (!countObj[A[i]]) {
      countObj[A[i]] = 1;
    } else {
      countObj[A[i]]++;
    }
  }

  for (let key in countObj) {
    if (countObj[key] === N) {
      return key;
    }
  }
};
