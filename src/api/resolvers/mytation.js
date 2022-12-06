const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
require('../../db/models')
const {AuthenticationError} = require("apollo-server-core");


module.exports = {
    // Создаем пользователя
    createUser: async (parent, {name, email, password}, {models}) => {
        email = email.trim().toLowerCase()
        const hashed = await bcrypt.hash(password, 10)
        try {
            const user = await models.User.create({
                name,
                email,
                password: hashed
            })
            return jwt.sign({id: user._id}, process.env.JWT_SECRET)
        } catch (err) {
            throw new Error("Не удалось создать пользователя")
        }
    },
    // Авторизация пользователя
    signIn: async (parent, {email, password}, {models}) => {
        if (email) {
            email = email.trim().toLowerCase()
        }

        const user = await models.User.findOne({email})
        if (!user) {
             throw new AuthenticationError("Пользователь не найден")
        }

        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
            throw new AuthenticationError("Неверно  введен пароль")
        }
        return jwt.sign({id: user._id, name: user.name}, process.env.JWT_SECRET)
    },
    // Создаем город
    createCity: async (parent, {name}, {models, user}) => {
        if (!user) return new AuthenticationError("Вы должны авторизоваться чтобы создавать проекты!")
        return await models.City.create({
            name,
        })
    },
    // Создаем улицу в городе
    setStreet: async (parent, {id, name},{models, user}) => {
        if (!user) {
            new AuthenticationError("Вы должны авторизоваться чтобы создавать проекты!")
        }
        try {
            const street = await models.Street.create({name})
            return await models.City.findByIdAndUpdate({_id: id}, {$push: {street}})
        } catch (err) {
            return new Error(`Что то пошло не так ${err}`)
        }


    }
}
