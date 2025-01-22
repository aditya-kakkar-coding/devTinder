const express = require("express")
const { dbConnect } = require("./config/database")
const dotenv = require("dotenv")
const { authRouter } = require("./route/authRouter")
const cookieParser = require('cookie-parser')
const { userRouter } = require('./route/userRouter')

dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())

app.use("/auth",authRouter)
app.use("/user",userRouter)

app.use("/health",(req,res)=>{
    res.send("Backend is working")
})

dbConnect().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Backend is running on port ${process.env.PORT}`)
    })}).catch((err)=>{
        console.error("Error connecting database")
    })

