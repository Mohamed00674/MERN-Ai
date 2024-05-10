import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { history, model } from "../config/Gemini.js";

export const run =   async (req : Request,res : Response, next: NextFunction) => {
    const { message } = req.body;
    try {
        const user = await User.findById(res.locals.jwtData.id)
        if (!user) {
            return res.status(401).json({message : "User not registered"})
        }
        const result = await model.generateContent(message)
        const response = await result.response
        const text = response.text()
        console.log(text)
        history.push(text)
        res.send({response : text})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message :" Internal Server error"})
        
    }

}
