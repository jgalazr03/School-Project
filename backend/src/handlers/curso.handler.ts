import { Request, Response } from 'express';
import { CursoController } from '../interfaces/curso.controller.interface';

export class CursoHandler {
  constructor(private controller: CursoController) {}

  getAllCursos = async (req: Request, res: Response) => {
    try {
      const data = await this.controller.getAllCursos();
      res.json(data);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

  getPromedio = async (req: Request, res: Response) => {
    try {
      const promedio = await this.controller.getPromedioCalificaciones();
      res.json({ promedio });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

  getMax = async (req: Request, res: Response) => {
    try {
      const maxima = await this.controller.getMaxCalificacion();
      res.json({ maxima });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };

  getMin = async (req: Request, res: Response) => {
    try {
      const minima = await this.controller.getMinCalificacion();
      res.json({ minima });
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  };
}