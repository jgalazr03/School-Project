import { Router } from 'express';
import cursoRoutes from './curso.routes';
import alumnoRoutes from './alumno.routes';
import authRoutes from './auth.routes';

const router = Router();

router.use('/cursos', cursoRoutes);
router.use('/alumnos', alumnoRoutes);
router.use('/auth', authRoutes);

export default router;