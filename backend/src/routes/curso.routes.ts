import { Router } from 'express';
import { CursoHandler } from '../handlers/curso.handler';
import { CursoControllerImpl } from '../controllers/curso.controller';
import { CursoServiceImpl } from '../services/curso.service';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.use(authMiddleware);

const service = new CursoServiceImpl();
const controller = new CursoControllerImpl(service);
const handler = new CursoHandler(controller);

router.get('/', handler.getAllCursos);
router.get('/promedio', handler.getPromedio);
router.get('/maxima', handler.getMax);
router.get('/minima', handler.getMin);

export default router;