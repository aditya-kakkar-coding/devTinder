const express = require("express")
const { userDetails} = require("../controller/userController")
const { validate } = require("../middleware/validateMiddleware")
const { userDetailsSchema } = require("../validation/user_validation")
const {verifytoken} = require("../middleware/authMiddleware")

const userRouter = express.Router()

userRouter.post("/userdetails",validate(userDetailsSchema),verifytoken, userDetails)

module.exports = { userRouter }
