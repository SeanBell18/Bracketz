require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const session = require('express-session')
const bcrypt = require('bcrypt')

const app = express ();
app.use(bodyParser.json())

const {
    SECRET,
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})

app.use(express.static(`${__dirname}/../build`))
app.use(
    session({
        secret: SECRET,
        resave: false,
        saveUninitialized: false
    })
)
app.post(`/auth/login`, (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body
    db.login(username)
        .then(([user]) => {
            if(bcrypt.compareSync(password, user.password)) {
                delete user.password
                req.session.user = user
                res.status(200).send(user)
            } else if (!bcrypt.compareSync(password, user.password)){
                res.status(401).send('Incorrect password; please try again')
            }
        })
        .catch(err => {
            res.status(500).send(err)
        })
})

app.listen(SERVER_PORT, console.log("Ears on"))