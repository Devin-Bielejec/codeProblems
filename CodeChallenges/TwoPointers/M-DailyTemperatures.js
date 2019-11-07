/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let cur = 0;
  let next = 1;
  while (cur < T.length - 1) {
    if (T[cur] < T[next]) {
      T[cur] = next - cur;
      cur++;
      next = cur + 1;
    } else {
      if (next === T.length - 1) {
        T[cur] = 0;
        cur++;
        next = cur + 1;
      } else {
        next++;
      }
    }
  }
  T[T.length - 1] = 0;
  return T;
};
