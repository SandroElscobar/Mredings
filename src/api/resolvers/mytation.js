const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
require('../../db/models')
const {AuthenticationError} = require("apollo-server-core");


module.exports = {
    createUser: async (parent, {email, password}, {models}) => {
        email = email.trim().toLowerCase()
        const hashed = await bcrypt.hash(password, 10)
        try {
            const user = await models.User.create({
                email,
                password: hashed
            })
            return jwt.sign({id: user._id}, process.env.JWT_SECRET)
        } catch (err) {
            console.log(err)
            throw new Error("Не удалось создать пользователя")
        }
    },
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
        return jwt.sign({id: user._id}, process.env.JWT_SECRET)
    }
}
