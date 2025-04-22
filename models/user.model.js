const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: [true,'Please enter your name']
        },

        email:{
            type: String,
            required: true,
            unique: true
        },

        password:{
            type: Number,
            required: true
        }
    },
    {
        timestamp: true
    }
)

const User = mongoose.model("Users",UserSchema);

module.exports = User;