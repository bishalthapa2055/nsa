import { Request , Response , NextFunction } from "express";
import jwt from "jsonwebtoken"
import config from "../../config";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { UserDoc } from "../../model/users";




export interface UserPayload {
    id : string ;
    phone_number : number ;
    iat  : string;
    exp : string;
}

declare global {
    namespace Express {
        interface Request {
            currentUser  ?: UserPayload ;
            UserData ?: UserDoc ;
        }
    }
}


export const currentUser =async (
    req:Request,
    res : Response,
    next : NextFunction
    
    ) => {
        try{
            if(!req.headers.authorization){
                throw new NotAuthorizedError()
            }

            const jwtToken = req.headers.authorization.split(" ")[1];
            const payload = jwt.verify(
                jwtToken,
                `${config.app.access_token}`
            ) as unknown as UserPayload;

            // console.log(payload)
            req.currentUser = payload

        }catch(error){
            throw new NotAuthorizedError()
        }

        next()
    
}