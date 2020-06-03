const express = require('express')
const app = express()
const path=require('path')
const bodyParser = require('body-parser')
const port = 3000
const{Sequelize, Op}=require('sequelize')
const sequelize = require('../database/index.js').sequelize
const Product = require('../database/index.js').Product




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../static')))


app.get('/foods', function(req,res){
    console.log(res)
    Product.findAll()
    .then((result) => res.send(result))
})

app.post('/foods', function(req,res){
    console.log(req.body)
    Product.create({
        imgURL:req.body.imgURL,
        name:req.body.name,
        deliveryTime:req.body.deliveryTime,
        rating:req.body.rating
       
    })
    .then(result => res.send(result))
    .catch(err =>res.send(err))
})





app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))