// https://www.hackerrank.com/challenges/lisa-workbook/problem

function workbook(n, k, arr) {
  // Write your code here
  const DEFAULT_VALUES = {
    page: 0,
    special: 0,
  };

  const result = arr.reduce((values, problems) => {
    const valuesTotal = {...values};
    let countProblems = 0;

    while (countProblems !== problems) {
      valuesTotal.page += 1;

      for (let i = 1; i <= k; i += 1) {
        countProblems += 1;

        if (countProblems === valuesTotal.page) {
          valuesTotal.special += 1;
        }

        if (countProblems === problems) break;
      }
    }

    return valuesTotal;
  }, DEFAULT_VALUES);

  return result.special;
}

const chapters = 5;
const problemsPerPage = 3;
const arrayWithNumberOfProblems = [4, 2, 6, 1, 10];

console.log(workbook(chapters, problemsPerPage, arrayWithNumberOfProblems)); // output: 4
