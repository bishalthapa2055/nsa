import express from "express"
import { sendOtpArenaRouter } from "./sendOtp.routes";
import { verifyOtpArenaRouter } from "./verifyOtp.routes";
import { resetPasswordRouter } from "./resetPassword.routes";
import { loginArenaRouter } from "./login.routes";
import { setArenaPasswordRouter } from "./set-password.routes";
import { sendEmailArenaOtpROuter } from "./send_email_otp.routes";
import { verifyArenaEmailOtpROuter } from "./verify-email-otp.routes";


const router = express.Router();

router.use(sendOtpArenaRouter); // send otp routes
router.use(verifyOtpArenaRouter); //verify otp routes
router.use(resetPasswordRouter); //forget  route
router.use(loginArenaRouter); //login route
router.use(setArenaPasswordRouter);//set passwored
router.use(sendEmailArenaOtpROuter); //send email otp
router.use(verifyArenaEmailOtpROuter); //verify email otp



export { router as indexAuthArenaRouter }