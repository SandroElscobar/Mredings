const model = require('../../db/models')
const {User} = require('../../db/models')
require('../../db/models')

module.exports = {
    users: async (parent, args, {models}) => {
        return models.User.find({})
    },
    city: async (parent, args, {models}) => {
        return models.City.find({})
    }
}