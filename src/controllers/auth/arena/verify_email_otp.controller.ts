import { Request , Response }  from "express";
import { Arena } from "../../../model/arena";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { expiryOtp } from "../../../common/otp/checkExp-otp";
import { verrifyOtp } from "../../../common/otp/verify-otp";

const verifyEmailOtpController = async(req : Request , res : Response ) =>{
    try {
        let { 
            email_otp_code
        } = req.body;
        
        const id = req.arenaData?.id;

        const isExistArena = await Arena.findById(id);

        if(!isExistArena){
            throw new BadRequestError("Arena doesnot exists")
        }
        //remove extra spaces
        email_otp_code = email_otp_code ? email_otp_code.trim() : '';

        if(isExistArena.is_email_verified){
            throw new BadRequestError("Email already verified")
        }


        //check exp
        const isValidOtp = expiryOtp(isExistArena.email_otp_expired_at , Date.now());

        if(isValidOtp){
            throw new BadRequestError("Otp code expired")
        }


        //verify code 
        const verifyCode = verrifyOtp(isExistArena.email_otp_code , email_otp_code);

        if(!verifyCode){
            throw new BadRequestError("Invalid  Email Otp code")
        }

        isExistArena.is_email_verified = true ;
        isExistArena.email_otp_code = '';
        isExistArena.email_otp_expired_at = 0;

        const verifyEmailOtp = await isExistArena.save();

        if(!verifyEmailOtp){
            throw new BadRequestError("Unable to verify the email")
        }
        
        res.status(200).json({
            status : true ,
            message : "Email Verified Sucessfullt"
        })
    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Debug Backend"
        })
    }
}

export { verifyEmailOtpController as verifyEmailArenaOtpControllerHandler }