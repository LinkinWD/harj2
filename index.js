const express = require('express')
const path = require('path')
const app = express()

//view engine, että voi käyttää embedded javascriptiä
app.set('view engine', 'ejs')
//mahdollistaa käytöin muistakin directoreista, että löytää views kansion
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/r/:kysely', (req, res) => {
    const { kysely } = req.params;
    res.render('kysely',  { kysely })
})

app.get('/vieraat', (req, res) => {
    const vieraat = [
        'Mikko', 'Jaakko', 'Pekka', 'Joonas', 'Vilpertti'
    ]
    res.render('vieraat', { vieraat })
})

app.get('/some', (req, res) => {
    //tehdään muutuja ja siirretään se sivulle toisena muuttujana
    const numero = Math.floor(Math.random() *10 ) +1;
    res.render('some', {satunnainen: numero})
})


app.listen(3000, () => {
    console.log('Paikallinen serveri hyrrää:D')
})
