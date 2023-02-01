// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  let hours = s.slice(0, 2);
  let convertedHours = hours;
  const indexOfAm = s.indexOf('AM');
  const indexOfPm = s.indexOf('PM');

  if (indexOfAm !== -1) {
      if (Number(hours) === 12) {
          convertedHours = '00';
      }
      const stringArray = s.replace(hours, convertedHours).split('');
      stringArray.splice(indexOf, 2);
      return stringArray.join('');
  }

  if (Number(hours) < 12) {
      convertedHours = String(Number(hours) + 12).padStart(2, '0');
  }
  const stringArray = s.replace(hours, convertedHours).split('');
  stringArray.splice(indexOfPm, 2);
  return stringArray.join('');
}

const hourString = '01:20:34PM';

console.log(timeConversion(hourString)); // output: 13:20:34
