import express from "express";
import { sendOtpUserRouter } from "./send-top.routes";
import { verifyUserOtpRouter } from "./verifyotp.routes";


const router = express.Router();

router.use(sendOtpUserRouter); //send otp
router.use(verifyUserOtpRouter); //verify otp


export { router as indexOtpUserRouter}