import express from "express";
import { indexOtpUserRouter } from "./user/index.routes";

const router = express.Router();

router.use('/user',indexOtpUserRouter);


export { router as indexAuthRouter };