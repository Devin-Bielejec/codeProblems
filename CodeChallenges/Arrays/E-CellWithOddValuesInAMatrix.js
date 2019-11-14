/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  let matrix = [];
  let row;
  for (let i = 0; i < n; i++) {
    row = [];
    for (let j = 0; j < m; j++) {
      row.push(0);
    }
    matrix.push(row);
  }

  for (let i = 0; i < indices.length; i++) {
    let ri = indices[i][0];
    let ci = indices[i][1];

    //Loop through all rows and only increment when equal to ci
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (row === ri) {
          matrix[row][col]++;
        }

        if (col === ci) {
          matrix[row][col]++;
        }
      }
    }
  }

  //Keep count of odd values in matrix
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] % 2 === 1 ? count++ : null;
    }
  }
  return count;
};
