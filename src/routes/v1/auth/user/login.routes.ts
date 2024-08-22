import express from "express";
import { loginUserControllerHandler } from "../../../../controllers/auth/user/login.controller";
import { validateRequest } from "../../../../common/middlewares/validate-request";
import { body } from "express-validator";

const router = express.Router();

router.post(
    "/login",
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
          body("pass_key").trim()
          .notEmpty().withMessage('pass_key is required')
    ],
    validateRequest,
    loginUserControllerHandler
);

export { router as loginUserRouter}