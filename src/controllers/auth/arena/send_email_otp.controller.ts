import { Request , Response } from "express";
import { Arena } from "../../../model/arena";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { generateEmailOTP } from "../../../common/otp/createEmailOtp";
import SendOTPMail from "../../../common/email/send_otp_mail";

const sendEmailOtpController = async( req : Request , res : Response ) =>{
    try {
        const id = req.arenaData?.id;

        const isExistArena = await Arena.findById(id);

        if(!isExistArena){
            throw new BadRequestError("Arena doesnot exists")
        };

        if(!isExistArena.email){
            throw new BadRequestError("You have not added your email address")
        }


        if(isExistArena.is_email_verified){
            throw new BadRequestError("Email already verified ")
        }
        const email_otp = generateEmailOTP();

        if(!email_otp){
            throw new BadRequestError("Error occured")
        }

        console.log(email_otp);
        const newExpDate = new Date(Date.now() + 10 * 60 * 1000).getTime(); 
        isExistArena.email_otp_code = email_otp ;
        isExistArena.email_otp_expired_at = newExpDate;

        const updateOtp = await isExistArena.save();

        if(!updateOtp){
            throw new BadRequestError("Failed to create otp code")
        }

        
        //nodemailer services
         
        await SendOTPMail(
            isExistArena.email! ,
            email_otp!,
            isExistArena.arena_full_name!
        );

        res.status(200).json({
            status : true ,
            message : `email otp sent to ${isExistArena.email} and valid for 10 mins`,
            email_otp_code : email_otp
        })

    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server Error"
        })
    }
}

export { sendEmailOtpController as sendEmailOtpArenaControllerHandler }