import express from "express"
import { currentUser } from "../../../common/middlewares/current-user";
import { requireAuthUser } from "../../../common/middlewares/require-auth-user";
import { updateUserDetailsHandler } from "../../../controllers/users/update-details.controller";
import { validateRequest } from "../../../common/middlewares/validate-request";
import { body } from "express-validator";
import { TypeGender } from "../../../model/users";

const router = express.Router();

router.patch(
    '/',
    currentUser,
    requireAuthUser,
    [
        body("full_name").optional().not().isEmpty().withMessage("Full Name is required"),
        body("full_name").optional().isLength({min : 8}).withMessage("full_name cannot be less than 8 letters"),
        body("email").optional().isEmail().withMessage("Valid email is required"),
        body("gender").optional().isIn(Object.values(TypeGender)).withMessage("Gender must be male , female , or other"),
        body("photo_url").optional().not().notEmpty().withMessage("Photo url is required"),
        body("timeZone").optional().not().isEmpty().withMessage("timeZone is required"),
        body("lng_lat").optional().not().isEmpty().withMessage("lng_lat is required"),
        body("date_of_birth").optional().not().isEmpty().withMessage("lng_lat is required"),
    ],
    validateRequest,
    updateUserDetailsHandler
);

export { router as updateUserRouter }