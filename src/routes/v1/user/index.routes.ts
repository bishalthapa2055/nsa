import express from "express";
import { checkUserStatsRouter } from "./check-stats.routes";
import { updateUserRouter } from "./update-profile.routes";
import { getUserProfileRouter } from "./get-profile.routes";

const router = express.Router();


router.use(checkUserStatsRouter); //check onboarding stats
router.use(updateUserRouter); //update users datas
router.use(getUserProfileRouter); //get user profile


export { router as indexUser}