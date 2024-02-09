function checkAnsw(questionsObj, userAnswer) {
  const keys = Object.keys(questionsObj);

  keys.forEach((question) => {
    const correctAnswer = questionsObj[question];

    const normUserAnswer = userAnswer.trim().toLowerCase();
    const normCorrectAnswer = correctAnswer.trim().toLowerCase();

    if (normUserAnswer === normCorrectAnswer) {
      return true;
    }
  });

  return false;
}