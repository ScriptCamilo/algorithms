// https://www.hackerrank.com/challenges/compare-the-triplets/problem
/**
 *
 * @param {Array<number>} firstPersonPoints
 * @param {Array<number>} secondPersonPoints
 * @returns {Array<number>}
 */

function compareTriplets(firstPersonPoints, secondPersonPoints) {
  const finalPoints = firstPersonPoints.reduce((points, firstPersonRate, currentIndex) => {
    const [firstCurrentPoint, secondCurrentPoint] = points;
    const secondPersonRate = secondPersonPoints[currentIndex];

    switch(true) {
      case firstPersonRate > secondPersonRate:
        return [firstCurrentPoint + 1, secondCurrentPoint];
      case firstPersonRate < secondPersonRate:
        return [firstCurrentPoint, secondCurrentPoint + 1];
      default:
        return points;
    }
  }, [0, 0]);

  return finalPoints;
}

const alicePoints = [17, 28, 30];
const bobPoints = [99, 16, 8];

console.log(compareTriplets(alicePoints, bobPoints)); // output: [2, 1]
