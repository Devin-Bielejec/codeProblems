/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const hash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let total = 0;

  let second = s.length - 1;
  let first = second - 1;
  while (second > -1) {
    let firstVal = s[first];
    let secondVal = s[second];
    if (
      ((secondVal == "V" || secondVal == "X") && firstVal == "I") ||
      ((secondVal == "L" || secondVal == "C") && firstVal == "X") ||
      ((secondVal == "D" || secondVal == "M") && firstVal == "C")
    ) {
      total += hash[secondVal] - hash[firstVal];
      first -= 2;
      second -= 2;
    } else {
      total += hash[secondVal];
      first--;
      second--;
    }
  }
  return total;
};
