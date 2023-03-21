// https://www.hackerrank.com/challenges/simple-array-sum/problem
/**
 *
 * @param {Array} array
 * @returns {number}
 */

function simpleArraySum(array){
  const sum = array.reduce((sumValue, num) => {
      return sumValue + num;
  }, 0);

  return sum;
}

const arrayToSum = [1, 2, 3, 4, 10, 11];

console.log(simpleArraySum(arrayToSum)); // output: 31
