/**
 *
 * @param {number} x1
 * @param {number} v1
 * @param {number} x2
 * @param {number} v2
 * @returns {string}
 */

function kangaroo(x1, v1, x2, v2) {
  if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) {
    return "NO";
  }
}

const x1 = 0;
const v1 = 3;
const x2 = 4;
const v2 = 2;

console.log(kangaroo(x1, v1, x2, v2)); // output: YES

const y1 = 0;
const a1 = 2;
const y2 = 5;
const a2 = 3;

console.log(kangaroo(y1, a1, y2, a2)); // output: NO
