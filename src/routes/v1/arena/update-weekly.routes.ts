import express from 'express';
import { currentArena } from '../../../common/middlewares/current-arena';
import { requireAuthArena } from '../../../common/middlewares/require-auth-arena';
import { validateRequest } from '../../../common/middlewares/validate-request';
import { updateWeeklyAvailabilityHandler } from '../../../controllers/arenas/update_availability.controller';

const router = express.Router();


router.put(
    "/weekly",
    currentArena,
    requireAuthArena,
    validateRequest,
    updateWeeklyAvailabilityHandler
);

export { router as updateWeeklyAvailabilityRouter }