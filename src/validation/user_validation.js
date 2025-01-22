const { z } = require("zod")

const userDetailsSchema = z.object({
    body: z.object({}).strict(),
    params: z.object({}).strict(),
    query: z.object({}).strict(),
    cookies: z.object({token: z.string().max(400)}).strict()
});

module.exports = { userDetailsSchema }