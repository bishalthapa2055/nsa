import express from "express"
import { sendOtpArenaRouter } from "./sendOtp.routes";
import { verifyOtpArenaRouter } from "./verifyOtp.routes";
import { resetPasswordRouter } from "./resetPassword.routes";
import { loginArenaRouter } from "./login.routes";
import { setArenaPasswordRouter } from "./set-password.routes";

const router = express.Router();

router.use(sendOtpArenaRouter); // send otp routes
router.use(verifyOtpArenaRouter); //verify otp routes
router.use(resetPasswordRouter); //forget  route
router.use(loginArenaRouter); //login route
router.use(setArenaPasswordRouter);//set passwored


export { router as indexAuthArenaRouter }