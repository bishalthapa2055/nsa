import { Request , Response } from "express";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { User } from "../../../model/users";
import { Password } from "../../../helpers/password";

const resetPasswordUserController = async ( req : Request , res : Response ) =>{
    try {
        const { newPassword , confirmPassword , phone_number} = req.body;

        const trimmedNewPassword = newPassword ? newPassword.trim() : "";
        const trimmedConfirmPassword = confirmPassword ? confirmPassword.trim() : "";

        const isExistUser = await User.findOne({
            phone_number : phone_number 
        });  

        if(!isExistUser){
            throw new BadRequestError("User doesnot exists")
        }

        if(trimmedNewPassword !== trimmedConfirmPassword){
            throw new BadRequestError("Password didnot match")
        }

        const hashedPassword = await Password.toHash(newPassword);

        isExistUser.pass_key = hashedPassword;

        const updatePass = await isExistUser.save();

        if(!updatePass){
            throw new BadRequestError("Unable to update the password")
        }

        res.status(200).json({
            status : true ,
            message : "Password Reset sucessfull. Proceed to login "
        })

    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server Error "
        })
    }
}

export { resetPasswordUserController as resetPasswordUserControllerHandler }