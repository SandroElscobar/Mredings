const {mongoose, Schema} = require('mongoose')

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)

const User = mongoose.Model('User', UserSchema)

module.exports = User