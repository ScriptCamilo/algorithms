// https://www.hackerrank.com/challenges/mini-max-sum/problem
/**
 *
 * @param {Array<number>} arr
 */

function miniMaxSum(arr) {
  let maxSum;
  let minSum;

  const isMax = (num) => {
    if (maxSum) {
      return num > maxSum ? maxSum = num : null;
    }
    return maxSum = num;
  };

  const isMin = (num) => {
    if (minSum) {
      return num < minSum ? minSum = num : null;
    }
    return minSum = num;
  };

  arr.forEach((_, index) => {
    const filtered = arr.filter((_, i) => index !== i);
    const sum = filtered.reduce((total, num) => total + num);

    isMax(sum);
    isMin(sum);
  });

  console.log(`${minSum} ${maxSum}`);
}

const arrayExample = [1, 3, 5, 7, 9];

miniMaxSum(arrayExample); // output: 16 24
