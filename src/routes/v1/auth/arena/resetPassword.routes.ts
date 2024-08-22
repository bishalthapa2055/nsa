import express from "express";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { resetPasswordArenaControllerHandler } from "../../../../controllers/auth/arena/resetPassword.controller";
import { currentArena } from "../../../../common/middlewares/current-arena";
import { requireAuthArena } from "../../../../common/middlewares/require-auth-arena";
import { body } from "express-validator";

const router = express.Router();

router.post(
    '/reset-password',
    currentArena,
    requireAuthArena,
    [
        body("newPassword")
        .not().isEmpty().withMessage("New password is required")
        .isLength({ min: 6 }).withMessage("Password Length must be greater than 6 characters"),
        body("confirmPassword")
        .not().isEmpty().withMessage("Confirm password is required")
        .isLength({ min: 6 }).withMessage("Password Length must be greater than 6 characters"),
    ],
    validateRequest,
    resetPasswordArenaControllerHandler
);

export { router as resetPasswordRouter}