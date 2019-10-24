/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        let curr = 4;
        //check above
        if (i >= 1 && grid[i - 1][j] === 1) {
          curr--;
        }
        //check down
        if (i <= grid.length - 1 && grid[i + 1][j] === 1) {
          curr--;
        }
        //left
        if (j >= 1 && grid[i][j - 1] === 1) {
          curr--;
        }

        if (j <= grid[i].length - 1 && grid[i][j + 1] === 1) {
          curr--;
        }

        perimeter += curr;
      }
    }
  }
  return perimeter;
};

islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]);
