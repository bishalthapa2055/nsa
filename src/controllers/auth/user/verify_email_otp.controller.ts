import { Request , Response } from "express";
import { User } from "../../../model/users";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { expiryOtp } from "../../../common/otp/checkExp-otp";
import { verrifyOtp } from "../../../common/otp/verify-otp";

const verifyEmailOtp = async ( req : Request , res : Response ) =>{
    try {
        let { 
            email_otp_code
        } = req.body;

        const id = req.UserData?.id;

        const isExistUser = await User.findById(id);

        email_otp_code = email_otp_code ? email_otp_code.trim() : '';

        if(!isExistUser){
            throw new BadRequestError("User doesnot exists ")
        }
        if(isExistUser.is_email_verified){
            throw new BadRequestError("Email already verified ")
        }

        //check exp 
        const isValidOtp = expiryOtp(isExistUser.email_otp_expired_at , Date.now());

        if(isValidOtp){
            throw new BadRequestError("Otp code expired")
        }

        const verifyCOde = verrifyOtp(isExistUser.email_otp_code , email_otp_code);

        if(!verifyCOde){
            throw new BadRequestError("Invalid  Email Otp code")
        }
        isExistUser.is_email_verified = true ;
        isExistUser.email_otp_code = '';
        isExistUser.email_otp_expired_at = 0;
        
        const verifyEmailOtp = await isExistUser.save();
        if(!verifyEmailOtp){
            throw new BadRequestError("Unable to verify the email")
        }

        res.status(200).json({
            status : true ,
            message : "Email Verified Sucessfully"
        })
    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Debug Backend "
        })
    }
}

export { verifyEmailOtp as verifyEmailOtpHandler }