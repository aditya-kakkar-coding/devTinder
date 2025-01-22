const jwt = require("jsonwebtoken")

const verifytoken = async function( req,res,next ){
   try{
    const {user_id} = await jwt.verify(req.cookies.token, process.env.JWT_SECRET_KEY)
    req.user_id = user_id
    next()
   }catch(err){
    res.status(400).send("verification of token failed")
   }
}

module.exports = { verifytoken }