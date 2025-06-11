import { Router } from 'express';
import { loginHandler, logoutHandler } from '../handlers/auth.handler';

const router = Router();

router.post('/login', loginHandler);
router.post('/logout', logoutHandler);

export default router;