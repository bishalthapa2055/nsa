import { Request , Response , NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { Arena } from "../../model/arena";

export const requireAuthArena = async(

    req : Request ,
    res : Response,
    next : NextFunction
) =>{
    if(!req.currentArena){
        throw new NotAuthorizedError();

    }
    const isExixtedArena = await Arena.findById(req.currentArena.id);

    // console.log(isExixtedInstructor)
    if(!isExixtedArena){
        throw new NotAuthorizedError()
    }

    req!.arenaData = isExixtedArena;

    next()

}