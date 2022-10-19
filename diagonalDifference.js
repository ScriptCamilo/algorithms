// www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  // Write your code here
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

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // output: 2
