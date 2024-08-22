import express from "express";
import { currentUser } from "../../../common/middlewares/current-user";
import { requireAuthUser } from "../../../common/middlewares/require-auth-user";
import { validateRequest } from "../../../common/middlewares/validate-request";
import { checkUserStatsHandler } from "../../../controllers/users/check-step.controller";

const router = express.Router();

router.get(
    "/get-stats",
    currentUser,
    requireAuthUser,
    validateRequest,
    checkUserStatsHandler
);

export { router as checkUserStatsRouter}