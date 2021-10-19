// require('dotenv').config()
const express = require('express')
const http = require('http')

const app = express()
// const connectToDatabase = require('./db')
// const Note = require('./Note')

app.get('/', async (req, res) => {
    // await connectToDatabase()
    //  const notes = await Note.find()
    // test
    res.send({ hi: "hello lomkovsky you are super dev!" })
})

http.createServer(app).listen(process.env.PORT || 8000)
