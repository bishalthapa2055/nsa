import express from "express";
import { checkOnboardStatsArenaRouter } from "./get-onboarding-stats.routes";
import { updateArenaDetailsRouter } from "./update-arena-details.routes";
import { getArenaProfileRouter } from "./get-arena-profile.routes";
import { addWeeklyAvaibleRouter } from "./add-availability.routes";
import { updateWeeklyAvailabilityRouter } from "./update-weekly.routes";


const router = express.Router();

router.use(checkOnboardStatsArenaRouter); // get arenas onboard stats
router.use(updateArenaDetailsRouter); //update arena datas
router.use(getArenaProfileRouter); //get arena profile
router.use(addWeeklyAvaibleRouter); // add avaiubaility
router.use(updateWeeklyAvailabilityRouter); //patch avaiability
export { router as indexArenaRouter}