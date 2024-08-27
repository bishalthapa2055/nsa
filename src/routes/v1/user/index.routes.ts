import express from "express";
import { checkUserStatsRouter } from "./check-stats.routes";
import { updateUserRouter } from "./update-profile.routes";
import { getUserProfileRouter } from "./get-profile.routes";
import { getNearestArenaRouter } from "./get-lists-of-nearest-arena.routes";
import { getCheapestArenaRouter } from "./get-cheapse-arena.routes";

const router = express.Router();


router.use(checkUserStatsRouter); //check onboarding stats
router.use(updateUserRouter); //update users datas
router.use(getUserProfileRouter); //get user profile



router.use(getNearestArenaRouter); //get nearest arenas
router.use(getCheapestArenaRouter); //get cheapest arenas

export { router as indexUser}