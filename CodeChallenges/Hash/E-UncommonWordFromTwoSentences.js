/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  let newHash = {};
  newHash = convertStringToHash(newHash, A.concat(" ").concat(B));
  let results = [];
  for (let h in newHash) {
    if (newHash[h] === 1) {
      results.push(h);
    }
  }
  return results;
};

function convertStringToHash(hash, string) {
  for (let word of string.split(" ")) {
    if (hash[word]) {
      hash[word]++;
    } else {
      hash[word] = 1;
    }
  }
  return hash;
}
