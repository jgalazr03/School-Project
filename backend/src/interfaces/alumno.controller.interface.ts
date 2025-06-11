import { Alumno } from '../types/alumno';

export interface AlumnoController {
  getAlumnos(): Promise<Alumno[]>;
  createAlumno(data: Alumno): Promise<Alumno>;
}