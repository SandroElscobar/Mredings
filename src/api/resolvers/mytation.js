const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
require('../../db/models')


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

        const user = await models.User.findOne({
            $eq: [{email}]
        })

        if (!user) {
            new Error("Пользователь не найден")
        }

        const valid = await bcrypt.compare(password, user.password)
        if (!valid) {
            new Error("Неверно введен пароль")
        }
        return jwt.sign({id: user._id}, process.env.JWT_SECRET)
    }
}
