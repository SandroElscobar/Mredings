// const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// require('../../db/models')
// require('dotenv').config()
//
// module.exports.Mutation = {
//     createUser: async (parent, {email, password}, {models}) => {
//         email = email.trim().toLowerCase()
//         const hashed = await bcrypt.hash(password, 10)
//         try {
//             const user = await models.User.create({
//                 email,
//                 password: hashed
//             })
//             return jwt.sign({id: user._id}, process.env.JWT_SECRET)
//         } catch (err) {
//             console.log(err)
//             throw new Error("Не удалось зарегестрировать пользователя")
//         }
//     }
// }