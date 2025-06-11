export interface AlumnoService {
  getAlumnos(): Promise<any[]>;
  createAlumno(data: any): Promise<any>;
}