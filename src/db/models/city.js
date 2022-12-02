const mongoose = require('mongoose')
const {StreetSchema} = require("./street");

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: {unique: true}
    },
    street: {
        type: [StreetSchema]
    }
},
    {
        timestamps: true
    })

const City = mongoose.model('City', CitySchema)
module.exports = City