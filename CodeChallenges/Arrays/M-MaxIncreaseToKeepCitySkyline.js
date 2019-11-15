/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let result = 0;
  let rowMax = 0;
  let colMaxHash = {};
  //Find colMax
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (colMaxHash[col]) {
        if (grid[row][col] > colMaxHash[col]) {
          colMaxHash[col] = grid[row][col];
        }
      } else {
        colMaxHash[col] = grid[row][col];
      }
    }
  }

  let cur;
  let curMin;
  for (let row = 0; row < grid.length; row++) {
    rowMax = Math.max(...grid[row]);
    for (let col = 0; col < grid[row].length; col++) {
      cur = grid[row][col];
      curMin = Math.min(rowMax, colMaxHash[col]);
      if (cur < curMin) {
        result += curMin - cur;
      }
    }
  }
  return result;
};
