// https://www.hackerrank.com/challenges/diagonal-difference/problem
/**
 *
 * @param {Array<Array<number>>} arr
 * @returns {number}
 */

function diagonalDifference(arr) {
  const leftToRight = arr.reduce((sum, matrix, matrixIndex) => {
      const matrixNumber = matrix[matrixIndex];
      return sum + matrixNumber;
  }, 0);

  const rightToLeft = arr.reduce((sum, matrix, index) => {
      const matrixIndex = (matrix.length - 1) - index;
      const matrixNumber = matrix[matrixIndex];
      return sum + matrixNumber;
  }, 0)

  return Math.abs(leftToRight - rightToLeft);
};

const arrayExample = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];

console.log(diagonalDifference(arrayExample)); // output: 2
