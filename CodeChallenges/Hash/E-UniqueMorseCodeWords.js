/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  if (words.length === 1) return 1;
  let morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--.."
  ];
  //a = 97
  let results = [];
  for (let word of words) {
    let currentWord = "";
    for (let letter of word) {
      currentWord += morse[letter.charCodeAt() - 97];
    }
    results.push(currentWord);
  }
  const set = new Set([...results]);

  return set.size;
};
