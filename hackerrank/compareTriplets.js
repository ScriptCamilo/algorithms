// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  const finalPoints = a.reduce((points, firstPersonRate, currentIndex) => {
      const [firstPersonPoint, secondPersonPoint] = points;
      const secondPersonRate = b[currentIndex];

      if (firstPersonRate > secondPersonRate) {
          return [firstPersonPoint + 1, secondPersonPoint];
      }

      if (firstPersonRate < secondPersonRate) {
          return [firstPersonPoint, secondPersonPoint + 1];
      }

      return [firstPersonPoint, secondPersonPoint];
  }, [0, 0]);

  return finalPoints;
}

const alicePoints = [17, 28, 30];
const bobPoints = [99, 16, 8];

console.log(compareTriplets(alicePoints, bobPoints)); // output: [2, 1]
