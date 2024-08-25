import express from "express";
import { uploadProfileControllerHandler } from "../../../controllers/upload/upload-services";

const router = express.Router();

router.post(
    '/upload-profile',
    uploadProfileControllerHandler("profile","profile")
);

export { router as uploadProfileRouter}