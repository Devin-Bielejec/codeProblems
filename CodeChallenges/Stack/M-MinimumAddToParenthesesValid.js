/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  let stack = [];
  for (let i = 0; i < S.length; i++) {
    let cur = S[i];

    //Skipping matches
    if (cur === ")") {
      stack[stack.length - 1] === "(" ? stack.pop() : stack.push(cur);
    } else {
      stack.push(cur);
    }
  }

  return stack.length;
};

//
