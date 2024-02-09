const inquirer = require("inquirer");
const {EOL} = require('os');

class View {
  static showTopic(topics) {
    return inquirer
      .prompt({
        type: "list",
        name: "topic",
        message: "Приветствуем вас на очередном пятничном проекте. Сегодня у нас Квиз!\nВыбери тему",
        choices: topics,
      })
      .then((topic) => topic);
  }

  static askQuestion(question) {
    return inquirer
      .prompt({
        type: "input",
        name: "answer",
        message: question,
      })
      .then((answer) => answer);
  }

  static showResult(data) {
    data
      ? console.log("верно")
      : console.log("ответ неверный");
  }

  static showScore(score) {
    if (score === 1) {
      console.log(`Вы набрали ${score} балл`);
    } else if (score === 5 || score === 0) {
      console.log(`Вы набрали ${score} баллов`);
    } else {
      console.log(`Вы набрали ${score} балла`);
    }
  }
}

module.exports = View;

