const express = require('express')
const mongoose = require('mongoose')

const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static(__dirname + "/assets"))

app.use('/api/planes', require('./routes/planes'))

mongoose.connect('mongodb+srv://user1:789123@cluster0.twhgrzf.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => {
        app.listen(port , () => {
            console.log('db ok')
        })
    })
    .catch(() => {
        console.log('db err')
    })