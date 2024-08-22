import express from "express";
import { indexAuthRouter } from "./auth/index.routes";
import { indexUser } from "./user/index.routes";
import { indexGeneralRouter } from "./general/index.routes";

const router = express.Router();

router.use("/auth", indexAuthRouter); //auth routes for both users and arenas
router.use("/user",indexUser);        // users details routes
router.use("/general" , indexGeneralRouter) // general routes

export { router as indexRouter };