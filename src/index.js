const express = require("express")
const { dbConnect } = require("./config/database")
const { UserModel } = require("./models/userModel")
const dotenv = require("dotenv")
dotenv.config()

const app = express()

app.post("/insertUser",async(req,res)=>{
    try{
    const obj = {
        firstName:"Adit",
        lastName:"Kakkar23",
        age:112
    }
    const user = new UserModel(obj)
    await user.save()
    res.send("user added successfully")
    }catch(err){
        res.status(500).send("Error at inserting data")
    }

})

app.use("/health",(req,res)=>{
    res.send("Backend is working")
})

app.use("/",(err,req,res,next)=>{
    if(err){
        console.log(err.message)
        res.status(500).send("something went wrong")
    }
})

dbConnect().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Backend is running on port ${process.env.PORT}`)
    })}).catch((err)=>{
        console.error("Error connecting database")
    })

