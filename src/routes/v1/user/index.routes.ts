import express from "express";
import { sendOptUserRouter } from "./send-otp.routes";

const router = express.Router();


router.use(sendOptUserRouter);




export { router as indexUser}