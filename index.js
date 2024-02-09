const Controller = require('./Controller');
const Model = require('./Model');
const View = require('./View');

const path = './topics/';

const controller = new Controller(Model, View, path);
controller.runQuiz();