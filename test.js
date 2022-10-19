const validStrings = ['{}', '{}()[]', '{[()]}'];
const invalidStrings = ['{[(}]}', '{[])', '{}()(]'];


function isBracketsValid(s) {
  const leftBrackets = ['(', '{', '['];
  const rightBrackets = [')', '}', ']'];
  const stringArray = s.split('');

  let firstCase;
  let secondCase;

  for(let i = 0; i < stringArray.length; i++) {
    const currentBracket = stringArray[i];
    const nextBracket = stringArray[i + 1];

    if (nextBracket) {
      const leftIndexOf = leftBrackets.indexOf(currentBracket);
      const rightIndexOf = rightBrackets.indexOf(nextBracket);
      const isValid = leftIndexOf === rightIndexOf;
      firstCase = isValid;

      if (isValid) {
        continue;
      }
      break;
    }
  }

  while(stringArray.length) {
    const left = stringArray.shift();
    const right = stringArray.pop();
    const leftIndexOf = leftBrackets.indexOf(left);
    const rightIndexOf = rightBrackets.indexOf(right);
    const isValid = leftIndexOf === rightIndexOf;
    secondCase = isValid;

    if (!isValid) {
      break;
    }
  }

  return firstCase || secondCase;
}

// Invalid Strings
console.log('---- Invalid Strings ----');
for (let strings of invalidStrings) {
  console.log(isBracketsValid(strings));
}

// Valid Strings
console.log('---- Valid Strings ----');
for (let strings of validStrings) {
  console.log(isBracketsValid(strings));
}
