const fs = require('fs/promises');

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
      .split('\n\n')
      .map((el) => el.split('\n'));
    return qaArr;
  }
}

module.exports = Model;