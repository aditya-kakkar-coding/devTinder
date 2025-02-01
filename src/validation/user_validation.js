const { z } = require("zod")

const userDetailsSchema = z.object({
    body: z.object({}).strict(),
    params: z.object({}).strict(),
    query: z.object({}).strict(),
    cookies: z.object({token: z.string().max(400)}).strict(),
});

const userPatchSchema = z.object({
    body: z.object({
        firstName: z.string().trim().min(3).max(25).toLowerCase().optional(),
        lastName: z.string().trim().min(3).max(25).toLowerCase().optional(),
        gender: z.enum(["male", "female", "other"]).optional(),
        age: z.number().min(18).optional(),
        city: z.string().trim().max(40).toLowerCase().optional(),
        about: z.string().max(400).optional(),
        photo: z.string().trim().max(800).url().optional(), 
        skills: z.array(z.string().trim().toLowerCase().max(50)).max(50).optional(),
    }).strict(),
    params: z.object({}).strict(),
    query: z.object({}).strict(),
    cookies: z.object({token: z.string().max(400)}).strict(),
});

module.exports = { userDetailsSchema, userPatchSchema }


// sample validation
// const userDetailsSchema = z.object({
//     body: z.object({}).strict(), // Body must be an empty object
//     params: z.object({}).strict(), // Params must be an empty object
//     query: z.object({}).strict(), // Query must be an empty object
//     cookies: z.object({
//       token: z.string().max(400), // Ensure the token cookie is a string and max length 400
//     }).strict(),
//     headers: z.object({
//       authorization: z.string().nonempty("Authorization header is required"), // Authorization header must not be empty
//       "content-type": z.string().nonempty("Content-Type header is required"), // Content-Type header must not be empty
//     }).strict(),
//   });