const fs = require('fs/promises')


class FlashCards {
    constructor( question, answer ) {
        this.question = question;
        this.answer = answer;

    }
}
async function createQuestion(animal) {
    let text = await (await fs.readFile(`./topics/${animal}_flashcard_data.txt`, 'utf-8')).split('\n\n')
    let newText = text.map((entry) => entry.split('\n'))
    const arr =[]
    for (let i=0; i < newText.length; i++){
        let obj = new FlashCards(newText[i][0], newText[i][1])
        arr.push(obj)}
    return arr
}        
module.exports = {FlashCards , createQuestion}