import express from "express";
import { currentArena } from "../../../common/middlewares/current-arena";
import { requireAuthArena } from "../../../common/middlewares/require-auth-arena";
import { validateRequest } from "../../../common/middlewares/validate-request";
import { addWeeklyAvaibleControllerHandler } from "../../../controllers/arenas/add_weekly_avvailable.controller";

const router = express.Router();

router.post(
    '/avaiability',
    currentArena,
    requireAuthArena,
    validateRequest,
    addWeeklyAvaibleControllerHandler
);

export { router as addWeeklyAvaibleRouter }