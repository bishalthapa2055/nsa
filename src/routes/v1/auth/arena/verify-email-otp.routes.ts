import express from "express";
import { currentArena } from "../../../../common/middlewares/current-arena";
import { requireAuthArena } from "../../../../common/middlewares/require-auth-arena";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { verifyEmailArenaOtpControllerHandler } from "../../../../controllers/auth/arena/verify_email_otp.controller";
import { body } from "express-validator";

const router = express.Router();


router.post(
    '/verify-email-otp',
    currentArena,
    requireAuthArena,
    [
        body("email_otp_code").not().isEmpty().withMessage("Email Otp code is required")
        .isLength({ min: 6, max: 6 }).withMessage("Email OTP code must be exactly 6 digits.")
    ],
    validateRequest,
    verifyEmailArenaOtpControllerHandler
);

export { router as verifyArenaEmailOtpROuter }