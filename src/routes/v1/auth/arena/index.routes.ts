import express from "express"
import { sendOtpArenaRouter } from "./sendOtp.routes";

const router = express.Router();

router.use(sendOtpArenaRouter); // send otp routes


export { router as indexAuthArenaRouter }