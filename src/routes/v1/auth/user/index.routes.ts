import express from "express";
import { sendOtpUserRouter } from "./send-top.routes";
import { verifyUserOtpRouter } from "./verifyotp.routes";
import { resetPasswordUserRouter } from "./resetPassword.routes";
import { loginUserRouter } from "./login.routes";
import { setUserPasswordRouter } from "./set-password.routes";


const router = express.Router();

router.use(sendOtpUserRouter); //send otp
router.use(verifyUserOtpRouter); //verify otp
router.use(resetPasswordUserRouter); //reset password 
router.use(loginUserRouter); //login routes
router.use(setUserPasswordRouter); //set user password 


export { router as indexOtpUserRouter}