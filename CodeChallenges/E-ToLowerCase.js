/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() < 91 && str[i].charCodeAt() >= 65) {
      let code = str[i].charCodeAt() + 32;
      let letter = String.fromCharCode(code);
      newStr += letter;
    } else {
      newStr += str[i];
    }
  }
  return newStr;
};
