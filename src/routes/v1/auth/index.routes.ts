import express from "express";
import { indexOtpUserRouter } from "./user/index.routes";
import { indexAuthArenaRouter } from "./arena/index.routes";

const router = express.Router();

router.use('/user',indexOtpUserRouter); // auth routes for users
router.use('/arena',indexAuthArenaRouter); //auth routes for arenas


export { router as indexAuthRouter };