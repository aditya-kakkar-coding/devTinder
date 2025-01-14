const mongoose = require("mongoose")


const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("Database connected succesfully! Enjoy")
    }catch(err){
        console.log("Error in connecting database")
    }
}
    
module.exports = {dbConnect}