/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  if (A.length === 3) {
    return 1;
  }

  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      return i;
    }
  }
};
