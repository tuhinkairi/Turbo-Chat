import { Router } from 'express';
import { checkUser } from '../../controller/AuthenticationController.js';

const router = Router();

router.post('/check-user', checkUser);

export default router;
