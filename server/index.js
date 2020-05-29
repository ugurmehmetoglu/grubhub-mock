const express = require('express')
const app = express()
const path=require('path')
const bodyParser = require('body-parser')
const port = 3000
const sequelize = require('../database/index.js').sequelize
const Product = require('../database/index.js').Product


app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../static')))





app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))