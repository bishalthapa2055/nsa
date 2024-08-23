import express from "express";
import { currentUser } from "../../../../common/middlewares/current-user";
import { requireAuthUser } from "../../../../common/middlewares/require-auth-user";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { verifyEmailOtpHandler } from "../../../../controllers/auth/user/verify_email_otp.controller";
import { body } from "express-validator";

const router = express.Router();

router.post(
    '/verify-email-otp',
    currentUser,
    requireAuthUser,
    [
        body("email_otp_code").not().isEmpty().withMessage("Email Otp code is required")
        .isLength({ min: 6, max: 6 }).withMessage("Email OTP code must be exactly 6 digits.")
    ],
    validateRequest,
    verifyEmailOtpHandler
);

export {
router as verifyEmailOtpROuter
}