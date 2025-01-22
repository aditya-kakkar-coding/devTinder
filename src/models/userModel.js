const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
        trim : true,
        minLength : 3,
        maxLength : 25,
        lowercase : true
    },
    lastName : {
        type : String,
        trim : true,
        minLength : 3,
        maxLength : 25,
        lowercase : true
    },
    email : {
        type : String,
        required : true,
        unique: [true, 'Email must be unique'],
        trim : true,
        minLength : 8,
        maxLength : 40,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
        minLength : 8,
        maxLength : 250
    },
    gender :{
        type : String,
        validate(value){
            if(!["male","female","other"].includes(value)){
                throw new Error("Gender data is not valid! It can only be male, female or other")
            }
        }
    },
    age : {
        type : Number,
        trim : true,
        min : 18
    },
    city : {
        type : String,
        trim : true,
        maxLength : 40,
        lowercase : true
    },
    about : {
        type : String,
        maxLength : 400
    },
    photo : {
        type : String,
        default : "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1737396070~exp=1737399670~hmac=5de6b28b7fab19aeb560b91c4d540cc6df0fe861829a0ce772fee0c95f54cc37&w=1060",
        trim : true,
        maxLength : 800,
    },
    skills : {
        type : [String],
        maxLength : 800,
        lowercase : true
    }

},{
    timestamps: true
})

UserSchema.methods.verifyPassword = async function(userInputPassword){
    const user = this
    return await bcrypt.compare(userInputPassword,user.password) // left->my normal pass||right-> my hash password
}

UserSchema.methods.getJWT = async function( user_id ){
    return await jwt.sign({ user_id: user_id }, process.env.JWT_SECRET_KEY,{expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME});
}

// just for knowledge purpose
// UserSchema.method('verifyPassword',async function(userInputPassword){
//     const user = this
//     const isValidPassword = await bcrypt.compare(userInputPassword,user.password)
//     return isValidPassword
// })

const UserModel = mongoose.model("user",UserSchema)

module.exports = { UserModel }