const chalk = require('chalk')
const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual o seu nome?',
    },
    {
        name: 'idade',
        message: 'Qual a idade?'
    }
])
    .then((answers) => {
        if (answers.idade > 30) {
            console.log(chalk.bgYellow.black.bold(`Olá ${answers.nome} você tem ${answers.idade}, está ficando velhinho!`))
        } else {
            console.log(chalk.bgGreen.black(`Olá ${answers.nome} você tem ${answers.idade}, não está mentindo a sua idade né?`))
        }

    })
    .catch((err) => console.log(err))