/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let results = [];
  for (let count = 1; count <= n; count++) {
    if (count % 15 === 0) {
      results.push("FizzBuzz");
    } else if (count % 5 === 0) {
      results.push("Buzz");
    } else if (count % 3 === 0) {
      results.push("Fizz");
    } else {
      results.push(`${count}`);
    }
  }
  return results;
};
