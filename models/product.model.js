const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        productid:{
            type:Number,
            required:true,
            unique:true
        },
        
        name:{
            type: String,
            required: [true,'Please enter the product name']
        },

        category:{
            type: String,
            required: [true,'Please enter the category of the product']
        },

        price:{
            type: Number,
            required: true,
            default: 0
        },

        stock:{
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamp: true
    }
)

const Product = mongoose.model("Products",ProductSchema);

module.exports = Product;