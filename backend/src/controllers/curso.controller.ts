import { CursoController } from '../interfaces/curso.controller.interface';
import { CursoService } from '../interfaces/curso.service.interface';

export class CursoControllerImpl implements CursoController {
  constructor(private service: CursoService) {}

  getAllCursos() {
    return this.service.getAllCursos();
  }

  getPromedioCalificaciones() {
    return this.service.getPromedioCalificaciones();
  }

  getMaxCalificacion() {
    return this.service.getMaxCalificacion();
  }

  getMinCalificacion() {
    return this.service.getMinCalificacion();
  }
}