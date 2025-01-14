const mongoose = require("mongoose")

const User = new mongoose.Schema({
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    age : {
        type: Number
    }
})

const UserModel = mongoose.model("user",User)

module.exports = { UserModel }