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
            } else if (action == 'Consultar Saldo') {

            } else if (action == 'Depositar') {
                console.log('passou aqui')
                deposit()
            } else if (action == 'Sacar') {

            } else if (action == 'Sair') {
                console.log(chalk.bgBlue('Obrigado por usar o Accounts!'))
                process.exit()
            }
        })
        .catch((err) => console.log(err))
}

// Create an account
function createAccount() {
    console.log(chalk.bgGreen.white('Obrigado por escolher o nosso banco!'))
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
            operation()
        })
        .catch((err) => console.log(err))
}

// add an amount to user account
function deposit() {

    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName']
            if (!checkAccount(accountName)) {
                return deposit()
            }

            inquirer.prompt([
                {
                    name: 'amount',
                    message: `Quanto deseja depositar na conta ${accountName}?`
                },
            ])
                .then((answer) => {
                    const amount = answer['amount']

                    addAmount(accountName, amount)
                    operation()
                }).catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

// verify if account exists
function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black(`A conta de nome ${accountName} não existe, digite novamente!`))
        return false
    }

    return true
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(
            chalk.bgRed.white('Valor digitado inválido! Refazer operação.')
        )
        return deposit()
    }
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    )

    console.log(
        chalk.green(`Foi depositado R$ ${amount} na conta ${accountName}.`)
    )
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })
    return JSON.parse(accountJSON)
}