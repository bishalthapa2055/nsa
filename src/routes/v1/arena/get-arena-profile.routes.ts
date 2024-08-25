import express from "express";
import { currentArena } from "../../../common/middlewares/current-arena";
import { requireAuthArena } from "../../../common/middlewares/require-auth-arena";
import { getArenaProfileHandler } from "../../../controllers/arenas/get-arena-profile.controller";
import { validateRequest } from "../../../common/middlewares/validate-request";


const router = express.Router();

router.get(
    '/',
    currentArena,
    requireAuthArena,
    validateRequest,
    getArenaProfileHandler
)

export { router as getArenaProfileRouter}