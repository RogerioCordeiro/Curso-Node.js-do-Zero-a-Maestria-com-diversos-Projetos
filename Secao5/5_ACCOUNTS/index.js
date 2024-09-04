const chalk = require('chalk')
const inquirer = require('inquirer')

// modulos internos
const fs = require('fs')

operation()

function operation() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'action',
                message: 'O que você deseja fazer?',
                choices: [
                    'Criar Conta',
                    'Consultar Saldo',
                    'Depositar',
                    'Sacar',
                    'Sair',
                ],
            },
        ])
        .then((answer) => {
            const action = answer['action']
            if (action == 'Criar Conta') {
                createAccount()
            }
        })
        .catch((err) => console.log(err))
}

// Create an account
function createAccount() {
    console.log(chalk.bgGreen.whiteBright('Obrigado por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir!'))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para a sua conta:'
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName']
            console.info(accountName)
            if (!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts')
            }
            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(
                    chalk.bgRed.whiteBright(`O nome de conta ${accountName} já existe, exolha outro nome!`),
                )
                buildAccount()
                return
            }

            fs.writeFileSync(
                `accounts/${accountName}.json`,
                '{"balance":0}',
                function (err) {
                    console.log(err)
                },
            )

            console.log(chalk.bgGreen('Parabéns, sua conta foi criada!'))

        })
        .catch((err) => console.log(err))
}