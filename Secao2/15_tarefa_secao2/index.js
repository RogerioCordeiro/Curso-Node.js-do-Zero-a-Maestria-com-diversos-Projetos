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
        console.log(chalk.bgYellow.black.bold(`Olá ${answers.nome} voce digitou ${answers.idade}, está é sua idade?`))
    })
    .catch((err) => console.log(err))