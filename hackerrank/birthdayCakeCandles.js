// https://www.hackerrank.com/challenges/birthday-cake-candles/problem
/**
 *
 * @param {Array<number>} candles
 * @returns {number}
 */

function birthdayCakeCandles(candles) {
  const tallestNumber = -Infinity;
  const tallestCount = 0;

  for(const candle in candles) {
    switch(true) {
      case candle > tallestNumber:
        tallestNumber = candle;
        tallestCount = 1;
        break;
      case candle === tallestNumber:
        tallestCount += 1;
        break;
      default:
        continue;
    }
  }

  return tallestCount;
}

const candlesExample = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candlesExample)); // output: 2
