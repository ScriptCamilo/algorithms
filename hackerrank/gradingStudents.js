// https://www.hackerrank.com/challenges/grading/problem
/**
 *
 * @param {Array<number>} grades
 * @returns {Array<number>}
 */

function gradingStudents(grades) {
  const newGrades = [];

  for (const grade of grades) {
    if (grade > 37) {
      const multipleNumber = 5;
      const gradeDiffer = multipleNumber - (grade % multipleNumber);
      if (gradeDiffer < 3) {
        newGrades.push(grade + gradeDiffer);
        continue;
      }
    }
    newGrades.push(grade);
  }

  return newGrades;
}

const grades = [73, 67, 38, 33];

console.log(gradingStudents(grades));
