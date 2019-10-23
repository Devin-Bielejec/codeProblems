/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
  let hash = {};
  for (let letter of chars) {
    if (!hash[letter]) {
      hash[letter] = 1;
    } else {
      hash[letter]++;
    }
  }

  let results = 0;
  for (let w of words) {
    verifyChars(hash, w) ? (results += w.length) : 0;
  }
  return results;
};

function verifyChars(hash, word) {
  let newHash = { ...hash };
  for (let letter of word) {
    if (!newHash[letter] || newHash[letter] <= 0) {
      return false;
    } else {
      newHash[letter]--;
    }
  }
  return true;
}
