import { Request , Response } from "express";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { Arena } from "../../../model/arena";
import { Password } from "../../../common/service/password";

const resetPasswordArenaController = async(req : Request , res : Response ) =>{
    try {

        const { newPassword , confirmPassword } = req.body;

        const trimmedNewPassword = newPassword ? newPassword.trim() : "";
        const trimmedConfirmPassword = confirmPassword ? confirmPassword.trim() : "";

        if(trimmedNewPassword !== trimmedConfirmPassword){
            throw new BadRequestError("Password didnot match")
        }

        const id = req.arenaData?.id;

        const isExistArena = await Arena.findById(id);

        if(!isExistArena){
            throw new BadRequestError("Arean doesnot exists")
        }

        const hashedPassword = await Password.toHash(newPassword);

        isExistArena.pass_key = hashedPassword;

        const updatePass = await isExistArena.save();

        if(!updatePass){
            throw new BadRequestError("Unable to update the password")
        }

        res.status(200).json({
            status : true ,
            message : "Password Reset sucessfull "
        })
    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server Error !"
        })
    }
}


export { resetPasswordArenaController as resetPasswordArenaControllerHandler }