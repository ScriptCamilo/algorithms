// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  // Write your code here
  const candleInitialInfo = {
    maxHeight: null,
    candlesWithMax: 0,
  };

  const candlesInfos = candles.reduce((info, currentCandle) => {
    const infoClone = {...info};

      switch(true) {
        case currentCandle > infoClone.maxHeight:
          infoClone.maxHeight = currentCandle;
          infoClone.candlesWithMax = 1;
          break;
        case currentCandle === infoClone.maxHeight:
          infoClone.candlesWithMax += 1;
          break;
        default:
          return infoClone;
      }

      return infoClone;
  }, candleInitialInfo);

  return candlesInfos.candlesWithMax;
}

const candlesExample = [3, 2, 1, 3];
console.log(birthdayCakeCandles(candlesExample)); // output: 2
