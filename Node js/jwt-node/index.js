const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const jwt = require('jsonwebtoken')
const secretKey = 'secretkey'

const verifyToken = (req, res, next) => {
    const authorization = req.headers.authorization
    if (authorization) {
        const token = authorization.split(' ')[1]
        req.token = token
        next()
    }
    else {
        res.send({ message: "not authorized" })
    }
}

app.get('/profile', verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, userdata) => {
        if (err) {
            const err = {
                name: 'TokenExpiredError',
                message: 'Token hasbeen Expired, Login again',
            }

            res.send({ message: "You are not authorized", err })
        }
        else {
            res.send({
                message: "You are an authorized person.",
                userdata
            })
        }
    })
    console.log('Verifying profile..')
})

app.post('/login', (req, res) => {
    const user = {
        name: "munna",
        email: "munna@gmail.com"
    }
    jwt.sign({ user }, secretKey, { expiresIn: '100s' }, (err, token) => {
        res.send({ token })
    })
})

app.get('/', (req, res) => {
    res.send('hello from simple server :)')
})


app.listen(port, () => console.log('> Server is up and running on port : ' + port))