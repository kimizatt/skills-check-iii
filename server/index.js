require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express()

app.use(express.json())

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
}) 

app.get('/api/houses', ctrl.getHouses)
app.post('/api/houses', ctrl.addHouse)

app.listen(SERVER_PORT, ()=> {
    console.log(`Listening on port ${SERVER_PORT}`)
} )