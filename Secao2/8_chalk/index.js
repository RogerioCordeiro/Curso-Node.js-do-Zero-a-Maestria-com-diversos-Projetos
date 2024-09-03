const chalk = require('chalk') // - desta maneira não está mais funcionando.

//import chalk from "chalk"


let nota = 9
console.log(chalk.green('Parabens! Você está aprovado!'))
nota = 2

if (nota >= 7) {
    console.log(chalk.green('Parabéns! Voce está aprovado!'))
} else {
    console.log(chalk.black.bgRed('Você precisa fazer a prova de recuperação!'))
}