import { Request , Response , NextFunction } from "express";
import jwt from "jsonwebtoken"
import config from "../../config";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { ArenaDoc } from "../../model/arena";



export interface ArenaPayload {
    id : string ;
    phone_number : number ;
    iat  : string;
    exp : string;
}

declare global {
    namespace Express {
        interface Request {
            currentArena  ?: ArenaPayload ;
            arenaData ?: ArenaDoc
        }
    }
}


export const currentArena =async (
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
            ) as unknown as ArenaPayload;

            // console.log(payload)
            req.currentArena = payload

        }catch(error){
            return next(new NotAuthorizedError());
        }

        next()
    
}