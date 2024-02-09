const inquirer = require('inquirer');

const entry = {
  question: 'Что является основным источником пищи для ночных ястребов?',
  answer: 'Насекомые'
};
function printInquire(obj) {
  let questionName = 0;
  return inquirer.prompt([{
    type: 'input',
    name: `${questionName}`,
    message: obj.question,
  }])
    .then((answers) => (answers[`${questionName}`] === obj.answer ? console.log(answers[`${questionName}`] + ` - правильно!`) : console.log('неправильно'), questionName++));
}
module.exports = {printInquire}