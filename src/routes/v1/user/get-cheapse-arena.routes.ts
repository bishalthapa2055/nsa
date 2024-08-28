import express from "express";
import { currentUser } from "../../../common/middlewares/current-user";
import { requireAuthUser } from "../../../common/middlewares/require-auth-user";
import { validateRequest } from "../../../common/middlewares/validate-request";
import { getCheapestArenaControllerHandler } from "../../../controllers/users/get-cheapest-arena.controller";

const router = express.Router();

router.post(
    '/arena/get-cheapest',
    currentUser,
    requireAuthUser,
    validateRequest,
    getCheapestArenaControllerHandler
);

export { router as getCheapestArenaRouter}