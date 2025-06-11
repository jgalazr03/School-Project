import {Router} from 'express';
import { AlumnoServiceImpl } from '../services/alumno.service'
import { AlumnoControllerImpl } from '../controllers/alumno.controller';
import { AlumnoHandler } from '../handlers/alumno.handler';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.use(authMiddleware);

const service = new AlumnoServiceImpl();
const controller = new AlumnoControllerImpl(service);
const handler = new AlumnoHandler(controller);

router.get('/', handler.getAlumnos);
router.post('/', handler.createAlumno);

export default router;