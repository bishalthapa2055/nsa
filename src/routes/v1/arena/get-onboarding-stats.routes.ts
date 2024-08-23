import express from "express";
import { currentArena } from "../../../common/middlewares/current-arena";
import { requireAuthArena } from "../../../common/middlewares/require-auth-arena";
import { validateRequest } from "../../../common/middlewares/validate-request";
import { checkOnboardStatsArenaRouter } from "../../../controllers/arenas/get-onboarding-stats.controller";


const router = express.Router();

router.get(
    '/get-onboarding-stats',
    currentArena,
    requireAuthArena,
    validateRequest,
    checkOnboardStatsArenaRouter
);


export { router as checkOnboardStatsArenaRouter }