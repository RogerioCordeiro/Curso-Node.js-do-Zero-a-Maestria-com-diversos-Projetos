const minimist = require('minimist')

const args = minimist(process.argv.slive(2))

console.log(args)
const nome = args['nome']
const profissao = args['profissao']

console.log(nome, profissao)

console.log(`O nome dele é ${nome} e a profissao é ${profissao}.`)