import express from "express"
import { sendOtpArenaRouter } from "./sendOtp.routes";
import { verifyOtpArenaRouter } from "./verifyOtp.routes";

const router = express.Router();

router.use(sendOtpArenaRouter); // send otp routes
router.use(verifyOtpArenaRouter); //verify otp routes


export { router as indexAuthArenaRouter }