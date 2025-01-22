const { z } = require("zod")

const signUpSchema = z.object({
    body: z.object({
        email: z.string().email("Invalid email format!").min(8,{message:"Email minimum length should be 8!"}).max(40,{message:"Email maximum characters could be 40"}),
        password: z.string().min(8,{message:"Password minimum length should be 8!"}).max(25,{message:"Password maximum characters could be 25"}).refine(
        (password) =>
            /[a-zA-Z]/.test(password) && // At least one alphabet
            /\d/.test(password) && // At least one numeric digit
            /[^a-zA-Z0-9]/.test(password), // At least one special character
        {
            message:
            "Password must contain at least one alphabet, one numeric digit, and one special character",
        }),
        firstName: z.string().min(3,{message:"First name minimum length should be 3!"}).max(25,{message:"First name maximum length could be 25!"}),
        lastName: z.string().min(3,{message:"Last name minimum length should be 3!"}).max(25,{message:"Last name maximum length could be 25!"}).optional()
    }).strict(),
    params: z.object({}).strict(),
    query: z.object({}).strict(),
    cookies: z.object({}).strict()
});

const logInSchema = z.object({
    body: z.object({
        email: z.string().email("Invalid email format!").max(40,{message:"Email maximum characters could be 40"}),
        password: z.string().min(8,{message:"Password minimum length should be 8!"}).max(25,{message:"Password maximum characters could be 25"})
    }).strict(),
    params: z.object({}).strict(),
    query: z.object({}).strict(),
    cookies: z.object({}).strict()
});

const logOutSchema = z.object({
    body: z.object({}).strict(),
    params: z.object({}).strict(),
    query: z.object({}).strict(),
    cookies: z.object({token: z.string().max(400).optional()})
});




module.exports = { signUpSchema, logInSchema, logOutSchema }