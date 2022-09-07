const model = require('../../db/models')
const {User} = require('../../db/models')

module.exports = {
    hello: () => 'Yeeeeeeessssss',
    users: async (parent, args) => {
        return User.find({})
    }
}