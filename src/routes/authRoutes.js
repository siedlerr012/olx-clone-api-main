import { Router } from "express";
import { signin, signup, signinv2 } from "../controllers/AuthController.js"


const router = Router();

router.post('/user/signin', signin);
router.post('/v2/user/signin', signinv2);
router.post('/user/signup', signup);

export default router;