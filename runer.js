const inquirer = require('inquirer');
const fs = require('fs/promises');
const { FlashCards, createQuestion } = require('./questionArray.js');
const {printInquire} = require('./inquire.js')



async function master(animal) {
    const questions = await createQuestion(animal)
    for (let i = 0; i < questions.length; i++){
        const answer = await printInquire(questions[i])
    }
    

}