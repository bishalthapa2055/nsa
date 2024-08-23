import { Request , Response } from "express";
import { User } from "../../../model/users";
import { BadRequestError } from "../../../common/errors/bad-request-error";
import { generateEmailOTP } from "../../../common/otp/createEmailOtp";
import SendOTPMail from "../../../common/email/send_otp_mail";

const sendEmailOtpController = async ( req : Request , res : Response )  => {
    try {
        const id = req.UserData?.id;

        const isExistUser = await User.findById(id);

        if(!isExistUser){
            throw new BadRequestError("User doesnot exists")
        }  

        if(!isExistUser.email){
            throw new BadRequestError("Email doesnot exists to your profile")
        }

        if(isExistUser.is_email_verified){
            throw new BadRequestError("Email already verififed !")
        }

        //send otp code to email

        const otp_code =  generateEmailOTP();
        const newExpDate = new Date(Date.now() + 10 * 60 * 1000).getTime(); 
        isExistUser.email_otp_code = otp_code ;
        isExistUser.email_otp_expired_at = newExpDate;

        const updateOtp = await isExistUser.save();

        if(!updateOtp){
            throw new BadRequestError("Unable to update otp")
        }
        //send otp verificaiton code 

        //nodemailer services
         
        await SendOTPMail(
            isExistUser.email! ,
            otp_code!,
            isExistUser.full_name!
        );

        res.status(200).json({
            status : true , 
            message : `Otp sent to  ${isExistUser.email}.Otp valid for 10 mins.`,
            otp_code
        })

    } catch (error) {
        res.status(400).json({
            status : false ,
            error : (error as any).message ? (error as any).message : "Internal Server Error"
        })
    }
}

export {
    sendEmailOtpController as sendEmailOtpControllerHandler
}