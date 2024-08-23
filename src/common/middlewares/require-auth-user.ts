import { Request , Response , NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { User } from "../../model/users";


export const requireAuthUser = async(

    req : Request ,
    res : Response,
    next : NextFunction
) =>{
    if(!req.currentUser){
        return next(new NotAuthorizedError());

    }
    const isExixtedUser = await User.findById(req.currentUser.id);

    // console.log(isExixtedInstructor)
    if(!isExixtedUser){
        return next(new NotAuthorizedError());
    }

    req!.UserData = isExixtedUser;

    next()

}