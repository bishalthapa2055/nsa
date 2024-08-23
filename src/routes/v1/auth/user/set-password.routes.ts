import express from "express";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { setUserPasswordHandler } from "../../../../controllers/auth/user/set-password.controller";
import { body } from "express-validator";

const router = express.Router();

router.post(
    "/set-password",
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
        body("pass_key")
        .not().isEmpty().withMessage("pass_key is required")
        .isLength({ min: 6 }).withMessage("pass_Key Length must be greater than 6 characters"),
    ],
    validateRequest,
    setUserPasswordHandler
)

export { router as setUserPasswordRouter }