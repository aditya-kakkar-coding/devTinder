
const { UserModel } = require("../models/userModel")
const jwt = require("jsonwebtoken")

const userDetails = async function(req,res){
    try{
        const details = await UserModel.findById(req.user_id)
        res.send({"User Details": details})
    }catch(err){
        res.status(404).send("Error :"+ err.message)
    }
}

module.exports = {userDetails}