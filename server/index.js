const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const port = 3000
const { Sequelize, Op } = require('sequelize')
const sequelize = require('../database/index.js').sequelize
const Product = require('../database/index.js').Product
const Cuisine = require('../database/index.js').Cuisine
const Item = require('../database/index.js').Item




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../static')))

app.get('/itemSearch', function(req,res){
    var order = req.query.order
    var descending = 'DESC'
    console.log(order)
    if (order === "deliveryTime"){
     descending = "ASC"
     console.log('asfdasf')
    }
    Item.findAll({
        attributes: ['rating', 'restaurant', 'deliveryTime', 'image', 'cuisine'],
        order:[ [order, descending] ],
        limit: 3
    })
    .then(result => res.send(result))
    .catch(err => res.send(err))
})


app.get('/search', function (req, res) {
    var query = req.query.name
    Product.findAll({ where: { name: { [Op.like]: "%" + query + "%" } } })
        .then(result => res.send(result))
        .catch(err => res.send(err))
})


app.get('/foods', function (req, res) {
    Product.findAll()
        .then((result) => res.send(result))
})

app.post('/foods', function (req, res) {

    Product.create({
        imgURL: req.body.imgURL,
        name: req.body.name,
        deliveryTime: req.body.deliveryTime,
        rating: req.body.rating

    })
        .then(res => res.send(res))
        .catch(err => res.send(err))
})

app.get('/cuisines', function (req, res) {
    Cuisine.findAll()
        .then(result => res.send(result))
})

app.post('/cuisines', function (req, res) {
    Cuisine.create({
        cuisineImgURL: req.body.cuisineImgURL,
        cuisineName: req.body.cuisineName
    })
        .then(res => res.send(res))
        .catch(err => res.send(err))
})

app.get('/items', function (req, res) {
    Item.findAll({

        where: {
            rating: {
                [Op.gte]: 4// square brackets are needed for property names that aren't plain strings
            }
        },
        
        limit: 3
    })
        .then(result => res.send(result))
        .catch(err => res.send(err))
})





app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


