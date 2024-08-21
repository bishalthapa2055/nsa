import { Request , Response } from "express";
import { Otp } from "../../../model/otp";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { expiryOtp } from "../../../common/otp/checkExp-otp";
import { verrifyOtp } from "../../../common/otp/verify-otp";
import { User } from "../../../model/users";
import config from "../../../config";
import jwt from "jsonwebtoken";


const verifyUserOtpController = async(req : Request , res : Response ) =>{
    try {
        const { phone_number , otp_code } = req.body;


        if (isNaN(otp_code)) {
            throw new BadRequestError("OTP must be number");
        }
        const isExistPhoneNumber = await Otp.findOne({phone_number});

        if(!isExistPhoneNumber){
            throw new BadRequestError("Phone number doesnot exists.")
        }



        //check exp 
        const isExpire  = expiryOtp(isExistPhoneNumber.otp_code , Date.now());
        if(!isExpire){
            throw new BadRequestError("OTP Code Expired");
        }

        //verifgy otp
        const otpVerify = verrifyOtp(isExistPhoneNumber!.otp_code , otp_code)
        if(!otpVerify){
            throw new BadRequestError("Invalid Otp")
        }

        

        // create user 
        const createUser = await User.build({phone_number}).save();
        if(!createUser){
            throw new BadRequestError("Unable to create user")
        }

        //if verified then remove  otp model and then create the users  
        await Otp.findByIdAndDelete(isExistPhoneNumber.id);

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
                user_id : createUser.id,
                phone_number : phone_number
            }
        })

    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server Error" 
        })
    }
}

export { verifyUserOtpController as verifyUserOtpControllerHandler}