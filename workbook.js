// https://www.hackerrank.com/challenges/lisa-workbook/

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

console.log(workbook(5, 3, [4, 2, 6, 1, 10]));
