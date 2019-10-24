/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let hash = {};
  let topRow = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  let midRow = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  let botRow = ["z", "x", "c", "v", "b", "n", "m"];

  for (let t of topRow) {
    hash[t] = 1;
  }

  for (let m of midRow) {
    hash[m] = 2;
  }

  for (let b of botRow) {
    hash[b] = 3;
  }

  let results = [];

  for (let word of words) {
    let currentLetterValue = hash[word[0].toLowerCase()];
    let count = 1;

    if (word.length === 1) {
      results.push(word);
    }
    for (let i = 1; i < word.length; i++) {
      if (hash[word[i].toLowerCase()] !== currentLetterValue) {
        break;
      } else {
        count++;
      }

      if (count === word.length) {
        results.push(word);
      }
    }
  }

  return results;
};
