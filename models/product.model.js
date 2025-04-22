const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,'Please enther the product name']
        },

        quantity:{
            type: Number,
            required: true,
            default: 0
        },

        price:{
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