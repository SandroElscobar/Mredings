const mongoose = require('mongoose')

const StreetSchema = new mongoose.Schema({
    name: String
}, {
    timestamps: true
})

const Street = mongoose.model("Street", StreetSchema)

module.exports = {Street, StreetSchema}