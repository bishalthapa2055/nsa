import express from "express";
import { CloundnaryUploadHandler } from "../../../controllers/upload/cloudnary-upload";

const router = express.Router();


router.post(
    "/cloud",
    CloundnaryUploadHandler
)

export { router as cloudinaryRouter }