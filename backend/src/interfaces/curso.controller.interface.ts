import { CursoConAlumno } from '../types/curso';

export interface CursoController {
  getAllCursos(): Promise<CursoConAlumno[]>;
  getPromedioCalificaciones(): Promise<number>;
  getMaxCalificacion(): Promise<number>;
  getMinCalificacion(): Promise<number>;
}