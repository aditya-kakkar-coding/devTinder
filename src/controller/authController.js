const { UserModel } = require("../models/userModel")
const { encrypt } = require("../utils/encrypt")


const signUp = async function(req,res){
    try{
        req.body.password = await encrypt(req.body.password)
        const user = new UserModel(req.body)  //made instance of user
        await user.save()  //mongodb function to save new user
        res.status(200).send(`We welcome you ${req.body.firstName} !!`)
    }catch(err){
        res.status(400).send("Error saving user : " + err.message)
    }
}

const logIn = async function(req,res){
    try{
        const user =  await UserModel.findOne({email: req.body.email}) // mongo function for checking if user exists
        if(!user){
           throw new Error(" User is not present !")
        }
        const isValidPassword = await user.verifyPassword(req.body.password)
        if (isValidPassword===false){
            throw new Error(" User is not present !")
        }
        const token = await user.getJWT(user._id);
        res.cookie("token",token,{ expires: new Date(Date.now() + 900000)})
        res.status(200).send(" User is logged in !!")
    }catch(err){
        res.status(400).send("Error : "+ err.message)
    }
}

const logOut = function(req,res){
   //logic 
    res.cookie("token", null ,{
        expires: new Date(Date.now())
    })
    res.status(200).send("User has been logged out !!")
}
module.exports = { signUp, logIn, logOut }