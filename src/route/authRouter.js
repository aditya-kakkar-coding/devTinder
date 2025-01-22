const express = require("express")
const { signUp, logIn, logOut } = require("../controller/authController")
const { validate } = require("../middleware/validateMiddleware")
const { signUpSchema, logInSchema, logOutSchema } = require("../validation/auth_validation")

const authRouter = express.Router()

authRouter.post("/signup", validate(signUpSchema), signUp)
authRouter.post("/signin", validate(logInSchema), logIn)
authRouter.get("/logout", validate(logOutSchema), logOut)

module.exports = { authRouter }

//validate(signUpSchema)