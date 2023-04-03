// https://www.hackerrank.com/challenges/apple-and-orange/problem
/**
 *
 * @param {number} s
 * @param {number} t
 * @param {number} a
 * @param {number} b
 * @param {Array<number>} apples
 * @param {Array<number>} oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesInside = 0;
  let orangesInside = 0;
  const mostFruitsDown = apples.length > oranges.length ? apples.length : oranges.length;

  for(let i = 0; i < mostFruitsDown; i++) {
      const applePosition = a + apples[i];
      const orangePosition = b + oranges[i];

      if(isFruitInsideHouse(applePosition, { start: s, end: t })) {
          applesInside += 1;
      }

      if(isFruitInsideHouse(orangePosition, { start: s, end: t })) {
          orangesInside += 1;
      }
  }

  console.log(applesInside);
  console.log(orangesInside);
}

/**
 *
 * @param {number} fruitPosition
 * @param {{ start: number, end: number }} houseRange
 * @returns {boolean}
 */

function isFruitInsideHouse(fruitPosition, houseRange) {
  return fruitPosition >= houseRange.start && fruitPosition <= houseRange.end;
}

const s = 7; //House start point
const t = 11; //House end point
const a = 5; //Apple tree location
const b = 15; //Orange tree location
const apples = [-7, 1, 5];
const oranges = [7, -13, -6, -7];

countApplesAndOranges(s, t, a, b, apples, oranges);
