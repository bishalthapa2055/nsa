import express from "express";
import { checkIsExistEmailHandler } from "../../../controllers/general/check-email.controller";
import { validateRequest } from "../../../common/middlewares/validate-request";
import { check } from "express-validator";

const router = express.Router();

router.get(
    '/check-email',
    [
        check('email')
          .isEmail()
          .withMessage('Please provide a valid email address.')
      ],
    validateRequest,
    checkIsExistEmailHandler
)

export { router as checkIsExistEmailRouter }