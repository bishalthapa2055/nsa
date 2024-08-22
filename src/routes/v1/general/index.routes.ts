import express from "express"
import { checkIsExistEmailRouter } from "./check-email.routes";

const router = express.Router();

router.use(checkIsExistEmailRouter); //search email


export { router as indexGeneralRouter }