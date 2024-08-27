import express from "express";
import { uploadProfileRouter } from "./profile-upload.routes";
import { cloudinaryRouter } from "./cloudnary.routes";

const router = express.Router();

router.use(uploadProfileRouter); //upload profiles on aws
router.use(cloudinaryRouter); //upload on cloudinary

export { router as indexFileUploadRouter}