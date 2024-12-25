const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  let numbers = [];
  for (let i = 0; i < str.length; i += 1) {
    newStr = str.slice(0, i) + str.slice(i + 1);
    numbers.push(parseInt(newStr));
  }
  let maxNumber = Math.max(...numbers);
  return maxNumber;
}

module.exports = {
  deleteDigit,
};
