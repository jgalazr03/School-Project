export type CursoConAlumno = {
  nombre: string;
  calif: number;
  alumno: {
    nombre: string;
    apellido: string;
  } | null;
};