const { UserModel } = require("../models/userModel")

const signUp = async function(req,res){
    try{
        const user = new UserModel(req.body)
        await user.save()
        res.status(200).send(`We welcome you ${req.body.firstName} !!`)
    }catch(err){
        res.status(400).send("Error saving user : " + err.message)
    }
    

}

const logIn = function(req,res){
    
    res.status(200).send("User has been created!!")
}

const logOut = function(req,res){
    
    res.status(200).send("User has been created!!")
}
module.exports = { signUp, logIn, logOut }