import express from "express";
import { currentUser } from "../../../../common/middlewares/current-user";
import { requireAuthUser } from "../../../../common/middlewares/require-auth-user";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { sendEmailOtpControllerHandler } from "../../../../controllers/auth/user/send_email_top.controller";

const router = express.Router();

router.post(
    '/send-email-otp',
    currentUser,
    requireAuthUser,
    validateRequest,
    sendEmailOtpControllerHandler
)


export { router as sendEmailOtpROuter}