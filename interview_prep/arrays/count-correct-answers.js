const testCorrectAnswers = ['a', 'a', 'b', 'b'];
const testCorrectAnswers2 = ['a', 'a', 'c', 'b'];
const testCorrectAnswers3 = ['a', 'a', 'b', 'c'];
const testCorrectAnswers4 = ['b', 'c', 'b', 'a'];
const testStudentsAnswers = ['a', 'c', 'b', 'd'];
const testStudentsAnswers2 = ['a', 'a', 'b', ''];
const testStudentsAnswers3 = ['a', 'a', 'b', 'c'];
const testStudentsAnswers4 = ['', 'a', 'a', 'c'];

const countCorrectAnswers = (correctAnsw, studentAnsw) => {
  let score = 0;
  correctAnsw.forEach((answ, idx) => {
    if (studentAnsw[idx]) {
      if (answ === studentAnsw[idx]) score += 4;
      if (answ !== studentAnsw[idx]) score -= 1;
    }
  });
  return score < 0 ? 0 : score;
};

console.log(countCorrectAnswers(testCorrectAnswers, testStudentsAnswers)); // 6
console.log(countCorrectAnswers(testCorrectAnswers2, testStudentsAnswers2)); // 7
console.log(countCorrectAnswers(testCorrectAnswers3, testStudentsAnswers3)); // 16
console.log(countCorrectAnswers(testCorrectAnswers4, testStudentsAnswers4)); // 0

{
  const countCorrectAnswers = (correctAnsw, studentAnsw, idx = 0) => {
    if (idx >= correctAnsw.length) return 0;

    if (!studentAnsw[idx]) {
      return countCorrectAnswers(correctAnsw, studentAnsw, idx + 1);
    }

    let score = 0;
    correctAnsw[idx] === studentAnsw[idx] ? score += 4 : score -= 1;

    return score + countCorrectAnswers(correctAnsw, studentAnsw, idx + 1);
  };

  const calculateScore = (correctAnsw, studentAnsw) => {
    const score = countCorrectAnswers(correctAnsw, studentAnsw);
    return score < 0 ? 0 : score;
  };

  console.log(calculateScore(testCorrectAnswers, testStudentsAnswers)); // 6
  console.log(calculateScore(testCorrectAnswers2, testStudentsAnswers2)); // 7
  console.log(calculateScore(testCorrectAnswers3, testStudentsAnswers3)); // 16
  console.log(calculateScore(testCorrectAnswers4, testStudentsAnswers4)); // 0
}

{
  const calculateScore = (correct, student, idx = 0, score = 0) => {
    if (idx >= student.length) return score < 0 ? 0 : score;

    if (student[idx]) {
      correct[idx] === student[idx] ? score += 4 : score -= 1;
    }

    return calculateScore(correct, student, idx + 1, score);
  };

  console.log(calculateScore(testCorrectAnswers, testStudentsAnswers)); // 6
  console.log(calculateScore(testCorrectAnswers2, testStudentsAnswers2)); // 7
  console.log(calculateScore(testCorrectAnswers3, testStudentsAnswers3)); // 16
  console.log(calculateScore(testCorrectAnswers4, testStudentsAnswers4)); // 0
}
