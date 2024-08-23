import { Request , Response } from "express";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { Otp } from "../../../model/otp";
import { Password } from "../../../helpers/password";
import { User } from "../../../model/users";
import config from "../../../config";
import jwt from "jsonwebtoken";


const setUserPassword = async ( req : Request , res : Response ) =>{
    try {
        const { 
            phone_number ,
            pass_key 
        } = req.body;

        const isExistOtpNumber = await Otp.findOne({
            phone_number
        });

        if(!isExistOtpNumber){
            throw new BadRequestError("User doesnot exists ")
        }

        if(!isExistOtpNumber.verified){
            throw new BadRequestError("Otp not verified")
        }
        
        let trimmedPass ;
        if(pass_key){
            trimmedPass = pass_key ? pass_key.trim() : " "
        }
        const hashedPass = await Password.toHash(trimmedPass);

       // create user 
       const createUser = await User.build({phone_number , pass_key : hashedPass}).save();
       if(!createUser){
           throw new BadRequestError("Unable to create user")
       }

       //if verified then remove  otp model and then create the users  
       await Otp.findByIdAndDelete(isExistOtpNumber.id);
        //create access token for further processing
        const userJwt = jwt.sign({
            id:createUser.id,
            phone_number: phone_number,
                },
                `${config.app.access_token}`,
                {
                expiresIn:"30days"
            });

            res.status(200).json({
                status : true ,
                message : "Otp verified ",
                data  :{
                    accessToken : userJwt,
                    phone_number : phone_number ,
                    user_id : createUser.id
                }
            })
    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ?(error as any).message : "Internal Server Error "
        })
    }
}

export { setUserPassword as setUserPasswordHandler }