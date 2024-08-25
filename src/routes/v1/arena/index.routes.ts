import express from "express";
import { checkOnboardStatsArenaRouter } from "./get-onboarding-stats.routes";
import { updateArenaDetailsRouter } from "./update-arena-details.routes";
import { getArenaProfileRouter } from "./get-arena-profile.routes";

const router = express.Router();

router.use(checkOnboardStatsArenaRouter); // get arenas onboard stats
router.use(updateArenaDetailsRouter); //update arena datas
router.use(getArenaProfileRouter); //get arena profile

export { router as indexArenaRouter}