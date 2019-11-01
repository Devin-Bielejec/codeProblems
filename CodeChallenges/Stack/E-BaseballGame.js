/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let stack = [];
  for (let i = 0; i < ops.length; i++) {
    let cur = ops[i];
    if (cur === "C") {
      stack.pop();
    } else if (cur === "D") {
      let dValue = stack[stack.length - 1];
      stack.push(dValue * 2);
    } else if (cur === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else {
      stack.push(Number(cur));
    }
  }
  return stack.reduce((acc, cur) => acc + cur);
};
