/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = arr1.length - 1; j >= 0; j--) {
      if (arr2[i] === arr1[j]) {
        result.push(arr1.splice(j, 1));
      }
    }
  }

  return result.concat(arr1.sort((a, b) => a - b));
};
