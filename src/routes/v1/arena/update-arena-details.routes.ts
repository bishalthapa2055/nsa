import express from "express";
import { currentArena } from "../../../common/middlewares/current-arena";
import { requireAuthArena } from "../../../common/middlewares/require-auth-arena";
import { validateRequest } from "../../../common/middlewares/validate-request";
import { createArenaProfileControllerHandler } from "../../../controllers/arenas/create_profile.controller";
import { body } from "express-validator";

const router = express.Router();


router.patch(
    '/',
    currentArena,
    requireAuthArena,
    [
        body("arena_full_name").optional().not().isEmpty().withMessage("Full Name is required"),
        body("lng_lat").optional().not().isEmpty().withMessage("lng and lat is required"),
        body("email").optional().isEmail().withMessage("Valid email is required"),
        body("address").optional().not().isEmpty().withMessage("Address is required"),
        body("registration_number").optional().not().notEmpty().withMessage("registration_number is required"),
        body("registered_year").optional().not().isEmpty().withMessage("registered_year is required"),
        body("secondary_number").optional().not().isEmpty().withMessage("secondary_number is required"),
        body("telephone_number").optional().not().isEmpty().withMessage("telephone_number is required"),
        body("registration_photo").optional().not().notEmpty().withMessage("registration_photo is required"),
        body("weekday_price").optional().not().isEmpty().withMessage("weekday_price is required"),
        body("weekend_price").optional().not().isEmpty().withMessage("weekend_price is required"),
        body("photo_url").optional().not().isEmpty().withMessage("cover photo is required"),
    ],
    validateRequest,
    createArenaProfileControllerHandler

)

export { router as updateArenaDetailsRouter}