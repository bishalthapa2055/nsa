import { Request , Response } from "express";
import { User } from "../../../model/users";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { Password } from "../../../helpers/password";
import config from "../../../config";
import jwt from "jsonwebtoken";


const loginUserController = async ( req : Request , res : Response ) =>{
    try {
        
        const {
            phone_number ,
            pass_key
        } = req.body;

        const isExistUser = await User.findOne({
            phone_number
        });

        if(!isExistUser){
            throw new BadRequestError("Account doesnot exists")
        }

        
        //compare password
        const checkPassword = await Password.compare(isExistUser.pass_key! , pass_key);
        if(!checkPassword)  throw new BadRequestError("Invalid Password !!!")

            const arenaJwt = jwt.sign({
                id:isExistUser.id,
                phone_number: phone_number,
                    },
                `${config.app.access_token}`,
                {
                expiresIn:"30days"
            })
    
            res.status(200).json({
                status : true ,
                accessToken : arenaJwt,
                // streamToken : isExistedUser.stream_token,
                message : "Login Sucessfull ",
                data : {
                    phone_number : isExistUser.phone_number,
                    onboarding_done : isExistUser.onboarding_done,
                    under_review : isExistUser.under_review
                }
            })        
    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ?(error as any).message : "Internal Server Error"
        })
    }
}


export { loginUserController as loginUserControllerHandler }