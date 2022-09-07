const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const {User} = require('../../db/models')


module.exports = {
    createUser: async (parent, {email, password}, {models}) => {
        email = email.trim().toLowerCase()
        const hashed = await bcrypt.hash(password, 10)
        try {
            const user = await User.create({
                email,
                password: hashed
            })
            return jwt.sign({id: user._id}, process.env.JWT_SECRET)
        } catch (err) {
            console.log(err)
            throw new Error("Не удалось создать пользователя")
        }
    }
}
