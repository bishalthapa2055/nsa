import express from "express";
import { indexAuthRouter } from "./auth/index.routes";

const router = express.Router();

router.use("/auth", indexAuthRouter);


export { router as indexRouter };