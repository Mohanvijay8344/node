//custom middleware
import jwt from "jsonwebtoken";
import { request } from "express";

export const auth = (request,response,next) => {
try{
    const token = request.header("x-auth-token");
    console.log(token);
    jwt.verify(token, process.env.SECRET_KEY);
    next();
} catch(err){
    response.status(401).json({message: "Invalid token"});
}
    
}