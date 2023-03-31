//custom middleware
import jwt from "jsonwebtoken";
// import { request } from "express";

export const auth = (request,response,next) => {
try{
    const token = request.headers("x-auth-token");
    console.log(token);
    jwt.verify(token, process.env.SECURITY_KEY);
    next();
} catch(err){
    response.status(400).json({message: "jwt must be provided"});
}
    
}