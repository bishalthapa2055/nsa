import { Request , Response } from "express";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { Otp } from "../../../model/otp";
import { expiryOtp } from "../../../common/otp/checkExp-otp";
import { verrifyOtp } from "../../../common/otp/verify-otp";
import { Arena } from "../../../model/arena";
import config from "../../../config";
import jwt from "jsonwebtoken";

const verifyOtpArenaController = async( req : Request , res : Response ) =>{
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

        isExistPhoneNumber.verified = true ;
        await isExistPhoneNumber.save();

        res.status(200).json({
            status : true ,
            message : "Otp verified ",
            data  :{
                phone_number : phone_number
            }
        })

    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server Error !"
        })
    }
}

export { verifyOtpArenaController as verifyOtpArenaControllerHandler }