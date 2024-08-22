import express from "express"
import { sendOtpArenaRouter } from "./sendOtp.routes";
import { verifyOtpArenaRouter } from "./verifyOtp.routes";
import { resetPasswordRouter } from "./resetPassword.routes";

const router = express.Router();

router.use(sendOtpArenaRouter); // send otp routes
router.use(verifyOtpArenaRouter); //verify otp routes
router.use(resetPasswordRouter); //forget 


export { router as indexAuthArenaRouter }