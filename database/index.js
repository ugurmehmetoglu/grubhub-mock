const { Sequelize, DataTypes } = require('sequelize');
const mysql = require('mysql2');


const sequelize = new Sequelize('food', 'root', '',{
    host:'localhost',
    dialect:'mysql',
    logging:false,
});

sequelize.authenticate()
.then(()=> console.log("database connected"))
.catch(err => console.log(err));

const Product = sequelize.define("product", {

    imgURL:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },

    deliveryTime:{
        type:DataTypes.STRING,
        allowNull:false
    },

    rating:{

        type:DataTypes.STRING,
        allowNull:false
    }


},{
    timestamps:false
})

Product.sync();




module.exports={
    sequelize,
    Product
}

