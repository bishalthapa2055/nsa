import express from "express";
import { currentArena } from "../../../../common/middlewares/current-arena";
import { requireAuthArena } from "../../../../common/middlewares/require-auth-arena";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { sendEmailOtpArenaControllerHandler } from "../../../../controllers/auth/arena/send_email_otp.controller";

const router = express.Router();

router.post(
    '/send-email-otp',
    currentArena,
    requireAuthArena,
    validateRequest,
    sendEmailOtpArenaControllerHandler
)

export { router as sendEmailArenaOtpROuter }