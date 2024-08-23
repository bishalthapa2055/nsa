import express from "express";
import { currentUser } from "../../../common/middlewares/current-user";
import { requireAuthUser } from "../../../common/middlewares/require-auth-user";
import { validateRequest } from "../../../common/middlewares/validate-request";
import { getUserProfileControllerHandler } from "../../../controllers/users/get-users-profile.controller";

const router = express.Router();

router.get(
    '/',
    currentUser,
    requireAuthUser,
    validateRequest,
    getUserProfileControllerHandler
);

export { router as getUserProfileRouter}