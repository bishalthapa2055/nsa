import express from "express";
import { resetPasswordUserControllerHandler } from "../../../../controllers/auth/user/resetPassword.controller";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { body } from "express-validator";

const router = express.Router()

router.post(
    "/reset-password",
    [
        body("newPassword")
        .not().isEmpty().withMessage("New password is required")
        .isLength({ min: 6 }).withMessage("Password Length must be greater than 6 characters"),
        body("confirmPassword")
        .not().isEmpty().withMessage("Confirm password is required")
        .isLength({ min: 6 }).withMessage("Password Length must be greater than 6 characters"),
    ],
    validateRequest,
    resetPasswordUserControllerHandler
)

export{ router as resetPasswordUserRouter }