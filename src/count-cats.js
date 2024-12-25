const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catCount = 0;
  for (cat of matrix) {
    for (let i = 0; i < cat.length; i += 1) {
      if (cat[i] === "^^") catCount += 1;
    }
  }
  return catCount;
}

module.exports = {
  countCats,
};
