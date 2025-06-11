import { supabase } from '../db';
import { AlumnoService } from '../interfaces/alumno.service.interface';
import { Alumno } from '../types/alumno';

export class AlumnoServiceImpl implements AlumnoService {
  async getAlumnos(): Promise<Alumno[]> {
    const { data, error } = await supabase.from('alumno').select('*');
    if (error) throw new Error(error.message);
    return data || [];
  }

  async createAlumno(alumno: Alumno): Promise<Alumno> {
    const { data, error } = await supabase
      .from('alumno')
      .insert([alumno])
      .select()
      .single();
    if (error) throw new Error(error.message);
    return data;
  }
}