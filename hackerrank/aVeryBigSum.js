// https://www.hackerrank.com/challenges/a-very-big-sum/problem
/**
 *
 * @param {Array<number>} numberArray
 * @returns {number}
 */

function aVeryBigSum(numberArray) {
  const finalSum = numberArray.reduce((sum, num) => {
    return sum + num;
  });

  return finalSum;
}

const numberArrayExample = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(numberArrayExample));
