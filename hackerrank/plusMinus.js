// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  // Write your code here
  const ratiosBase = arr.length;
  let positiveRatios = 0;
  let negativeRatios = 0;
  let zeroRatios = 0;

  arr.forEach((value) => {
    switch(true) {
      case value > 0:
        positiveRatios += 1;
        break;
      case value < 0:
        negativeRatios += 1;
        break;
      default:
        zeroRatios += 1;
    }
  });

  console.log((positiveRatios/ratiosBase).toFixed(6));
  console.log((negativeRatios/ratiosBase).toFixed(6));
  console.log((zeroRatios/ratiosBase).toFixed(6));
}

const arrayExample = [-4, 3, -9, 0, 4, 1];

plusMinus(arrayExample);
/*
output:
  0.500000
  0.333333
  0.166667
*/

