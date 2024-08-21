import express from "express";
import { verifyUserOtpControllerHandler } from "../../../../controllers/auth/user/verifyOtp";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { body } from "express-validator";

const router = express.Router();

router.post(
    "/verify-otp",
    [
        body("phone_number").not().isEmpty().withMessage("Phone Number field is required !!!")
        .custom((value) => {
            // Validate the phone number starts with +977
            if (!value.startsWith("+977")) {
              throw new Error("Phone number must start with +977.");
            }
            
            // Validate the remaining 10 digits
            const remainingPart = value.slice(4); // Extract part after +977
            const remainingRegex = /^9\d{9}$/;
            
            if (!remainingRegex.test(remainingPart)) {
              throw new Error("After +977, the phone number must start with 9 and be followed by 9 digits.");
            }
            
            return true;
        }),
        body("otp_code")
        .not().isEmpty().withMessage("OTP code is required.")
        .isNumeric().withMessage("OTP code must be numeric.")
        .isLength({ min: 6, max: 6 }).withMessage("OTP code must be exactly 6 digits.")
    ],
    validateRequest,
    verifyUserOtpControllerHandler
)

export { router as verifyUserOtpRouter}