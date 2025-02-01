
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

const editUserDetails = async function(req,res){
    try{
        const details = await UserModel.findById(req.user_id)
        Object.keys(req.body).forEach(key => (details[key]=req.body[key]))
        await details.save()
        res.status(200).json({message:"User details has been updated succefully", details: details})
    }catch(err){
        res.status(404).send("Error :"+ err.message)
    }
}

module.exports = {userDetails,editUserDetails}