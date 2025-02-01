const express = require("express")
const { userDetails,editUserDetails} = require("../controller/userController")
const { validate } = require("../middleware/validateMiddleware")
const { userDetailsSchema, userPatchSchema } = require("../validation/user_validation")
const {verifytoken} = require("../middleware/authMiddleware")

const userRouter = express.Router()

userRouter.get("/userdetails",validate(userDetailsSchema),verifytoken, userDetails)
userRouter.patch("/edituser",validate(userPatchSchema),verifytoken, editUserDetails)

module.exports = { userRouter }
