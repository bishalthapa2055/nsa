import express from "express";
import { checkUserStatsRouter } from "./check-stats.routes";
import { updateUserRouter } from "./update-profile.routes";

const router = express.Router();


router.use(checkUserStatsRouter); //check onboarding stats
router.use(updateUserRouter); //update users datas


export { router as indexUser}