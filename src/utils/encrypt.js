
// import bcrypt from "bcrypt"

// //es6 function for knowledge purpose

// export const encrypt = async ( text ) => {
//     try{
//         return await bcrypt.hash(text, Number(process.env.SALT_ROUND));
//     }catch(err){
//         throw new Error("Cannot generate password hash");
//     } 
// }

const bcrypt = require("bcrypt")

const encrypt = async function( text ){
    try{
        return await bcrypt.hash(text, Number(process.env.SALT_ROUND));
    }catch(err){
        throw new Error("Cannot generate password hash");
    }
}

module.exports = { encrypt }