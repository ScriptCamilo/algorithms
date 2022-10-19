function calPoints(ops) {
  console.log(ops)
  const allScores = ops.reduce((scores, item) => {
    const newScores = [...scores];
    const lastScore = newScores[newScores.length - 1];
    const beforeLastScore = newScores[newScores.length - 2];

    switch(item) {
      case 'D':
      case 'd':
        newScores.push(lastScore * 2);
        break;
      case 'C':
      case 'c':
        newScores.pop();
        break;
      case '+':
        newScores.push(lastScore + beforeLastScore);
        break;
      default:
        newScores.push(Number(item));
    }

    return newScores;
  }, []);

  const result = allScores.reduce((total, score) => total + score);
  return result;
}

const arrayExample = ['5', '2', 'C', 'D', '+'];

console.log(calPoints(arrayExample)); // output: 30
