/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  for (let arr of A) {
    for (let i = 0; i < arr.length / 2; i++) {
      //switch and convert
      let temp = Math.abs(arr[i] - 1);
      arr[i] = Math.abs(arr[arr.length - 1 - i] - 1);
      arr[arr.length - 1 - i] = temp;
    }
  }

  return A;
};
