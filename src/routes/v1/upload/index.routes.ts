import express from "express";
import { uploadProfileRouter } from "./profile-upload.routes";

const router = express.Router();

router.use(uploadProfileRouter); //upload profiles


export { router as indexFileUploadRouter}