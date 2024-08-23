import configg from "../../config";
import { template } from "./templates/send_otp_mail";
import nodemailer from "nodemailer" ;

const SendOTPMail =async( toEmail : string , otpCode  : string , full_name : string) =>{

   let config ={
    service :'gmail',
    auth:{
        user: configg.app.email,
        pass: configg.app.password
    }
   }

   var mailOptions = {
      from: 'config.auth.user',
      to: toEmail,
     subject:  "OTP CODE ",
     html: template(full_name , otpCode)
     };

   let transporter =await nodemailer.createTransport(config)


   await transporter.sendMail(mailOptions, function(error : any, info : any){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}

export default SendOTPMail ;