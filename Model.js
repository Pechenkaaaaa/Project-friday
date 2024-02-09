const fs = require('fs/promises');
const {EOL} = require('os');

class Model {
  static score = 0;

  static async readFolder(str) {
    const folder = await fs.readdir(str);
    const topics = folder.map((el) => el.replace(/(^[a-z]+)([\w\d.]*)/g, '$1'));
    const fileNames = [];
    folder.forEach((el, i) => {
      const obj = {};
      obj.topic = topics[i];
      obj.file = el;
      fileNames.push(obj);
    });
    return fileNames;
  }

  static async prepareQuiz(file) {
    const qaArr = (await fs.readFile(file, 'utf-8'))
      .trim()
      .split(EOL)
      .map((el) => el.split(EOL));
    return qaArr;
  }
}

module.exports = Model;
