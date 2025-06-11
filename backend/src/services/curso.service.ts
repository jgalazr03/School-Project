import { supabase } from '../db';
import { CursoService } from '../interfaces/curso.service.interface';
import { CursoConAlumno } from '../types/curso';
import { PostgrestSingleResponse } from '@supabase/supabase-js';

export class CursoServiceImpl implements CursoService {
  async getAllCursos(): Promise<any[]> {
    const response: PostgrestSingleResponse<CursoConAlumno[]> = await supabase
      .from('curso')
      .select('nombre, calif, alumno:alumno_id(nombre, apellido)');

    const { data, error } = response;

    if (error) throw new Error(error.message);
    return (data || []).map((curso) => ({
      curso: curso.nombre,
      calificacion: curso.calif,
      nombre: curso.alumno?.nombre || null,
      apellido: curso.alumno?.apellido || null
    }));
  }

  async getPromedioCalificaciones(): Promise<number> {
    const { data, error } = await supabase
      .from('curso')
      .select('calif');

    if (error) throw new Error(error.message);

    if (!data || data.length === 0) return 0;

    const total = data.reduce((acc, cur) => acc + cur.calif, 0);
    return total / data.length;
  }

  async getMaxCalificacion(): Promise<number> {
    const { data, error } = await supabase
      .from('curso')
      .select('calif');

    if (error) throw new Error(error.message);

    if (!data || data.length === 0) return 0;

    return Math.max(...data.map(d => d.calif));
  }

  async getMinCalificacion(): Promise<number> {
    const { data, error } = await supabase
      .from('curso')
      .select('calif');

    if (error) throw new Error(error.message);

    if (!data || data.length === 0) return 0;

    return Math.min(...data.map(d => d.calif));
  }
}