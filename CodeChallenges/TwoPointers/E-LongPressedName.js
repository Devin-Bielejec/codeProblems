/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
  //check for duplicates with cur and next, then compare strings
  for (let i = 0; i < typed.length; i++) {
    let cur = typed[i];
    let next = typed[i + 1];
    //double letters in original names
    if (
      cur === next &&
      name.substring(i, i + 2) !== typed.substring(i, i + 2)
    ) {
      typed = typed.substring(0, i + 1) + typed.substring(i + 2);
      i--;
    }
  }
  console.log(typed);
  return typed === name;
};

// lla, llaa
