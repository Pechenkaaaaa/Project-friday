class Controller {
  constructor(model, view, path) {
    this.model = model;
    this.view = view;
    this.path = path;
  }

  async runQuiz() {
    const quiz = await this.model.readFolder(this.path);
    const topics = quiz.map((el) => el.topic);
    const topicView = await this.view.showTopic(topics);
    const filePath = `${this.path}${
      quiz.find((el) => el.topic === topicView.topic).file
    }`;
    const fileData = await this.model.prepareQuiz(filePath);
    for (let i = 0; i < fileData.length; i += 1) {
      const answer = await this.view.askQuestion(fileData[i][0]);

      if (answer.answer === fileData[i][1]) {
        this.view.showResult(true);
        this.model.score += 1;
      } else this.view.showResult(false);
    }
    this.view.showScore(this.model.score);
  }
}

module.exports = Controller;
