import express from "express";
import { currentUser } from "../../../common/middlewares/current-user";
import { requireAuthUser } from "../../../common/middlewares/require-auth-user";
import { validateRequest } from "../../../common/middlewares/validate-request";
import { getNearestArenaHandler } from "../../../controllers/users/get-lists-of-nearest-arenas.controller";

const router = express.Router();


router.get(
    '/recommendation',
    currentUser,
    requireAuthUser,
    validateRequest,
    getNearestArenaHandler
);

export { router as getNearestArenaRouter }