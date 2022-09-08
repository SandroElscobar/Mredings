const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        index: {unique: true}
    },
    password: String
},{
    timestamps: true
})

const User = mongoose.model("User", UserSchema)

module.exports = User