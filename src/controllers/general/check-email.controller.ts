import { Request , Response } from "express";
import { User } from "../../model/users";
import { Arena } from "../../model/arena";
import { BadRequestError } from "../../common/errors/bad-request-error";

const checkIsExistEmail = async (req : Request , res : Response ) =>{
    try {
        const { email } = req.query;

        if(!email){
            throw new BadRequestError("Email is required ")
        }
        const trimmedEmail = typeof email === 'string' ? email.trim() : '';
        const isExistEmailUser = await User.findOne({email : trimmedEmail});

        const isExistEmailArena = await Arena.findOne({email});

        if(isExistEmailArena || isExistEmailUser) {
            throw new BadRequestError("Email address already used")
        }
        res.status(200).json({
            status : true ,
            message : "Email address available",
            email : trimmedEmail
        })
    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server Error"
        })
    }
}

export { checkIsExistEmail as checkIsExistEmailHandler }