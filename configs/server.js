const express = require('express')
const app     = express()
const consign = require('consign')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/public' , express.static('public'))

consign().include('app/routers')
            .then('app/models')
            .then('configs/dbConnection.js')
            .then('app/controllers')
            .into(app)
    
app.set('view engine', 'ejs')
app.set('views', './app/views')

module.exports = app