import { Router } from 'express';
import { checkUser, registerUser } from '../../controller/AuthenticationController.js';

const router = Router();

router.post('/check-user', checkUser);
router.post('/register-user', registerUser);

export default router;
