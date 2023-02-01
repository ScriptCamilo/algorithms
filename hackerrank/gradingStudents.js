// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  // Write your code here
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
const result = gradingStudents(grades);

console.log(result);
