const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {
    const user = {
        name: 'Rogerio',
        surname: 'Cordeiro',
    }

    const palavra = 'teste'

    const auth = true

    const approved = false

    res.render('home', { user: user, palavra, auth, approved })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})