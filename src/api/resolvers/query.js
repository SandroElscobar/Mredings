const model = require('../../db/models')
const {User} = require('../../db/models')
require('../../db/models')
const {AuthenticationError} = require("apollo-server-core");
const mongoose = require("mongoose");

module.exports = {
    users: async (parent, args, {models}) => {
        return models.User.find({})
    },
    city: async (parent, args, {models}) => {
        return (await models.City.find({}))
    },
    getStreet: async (parent, {id, name}, {models, user}) => {
        if (!user) return new AuthenticationError("Вы должны авторизоваться чтобы создавать проекты!")
        return models.City.findOne({id, name})
    },
    getCity: async (parent, {id}, {models, user}) => {
        if (!user) return new AuthenticationError("Вы должны авторизоваться чтобы создавать проекты!")
        return (await models.City.findById({_id: id}))
    }
}