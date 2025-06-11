import { Router } from 'express';
import cursoRoutes from './curso.routes';
import alumnoRoutes from './alumno.routes';

const router = Router();

router.use('/cursos', cursoRoutes);
router.use('/alumnos', alumnoRoutes);

export default router;