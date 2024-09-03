const fs = require('fs')
const arqAntigo = "arquivo.txt"
const arqNovo = 'novoNomeArquivo.txt'

fs.rename(arqAntigo, arqNovo, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Arquivo renomeado.')
})