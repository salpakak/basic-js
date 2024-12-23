const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let s1Obj = {};
  let s2Obj = {};
  let count = 0;
  for (char of s1) {
    if (s1Obj[char]) {
      s1Obj[char] += 1;
    } else {
      s1Obj[char] = 1;
    }
  }
  for (char of s2) {
    if (s2Obj[char]) {
      s2Obj[char] += 1;
    } else {
      s2Obj[char] = 1;
    }
  }
  for (let char in s1Obj) {
    if (s2Obj[char]) {
      count += Math.min(s1Obj[char], s2Obj[char]);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
