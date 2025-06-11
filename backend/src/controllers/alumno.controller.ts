import { AlumnoController } from '../interfaces/alumno.controller.interface'
import { AlumnoService } from '../interfaces/alumno.service.interface';
import { Alumno } from '../types/alumno';

export class AlumnoControllerImpl implements AlumnoController{
    constructor(private service: AlumnoService){}

    async getAlumnos(){
        return await this.service.getAlumnos();
    }

    async createAlumno(data: Alumno){
        return await this.service.createAlumno(data);
    }
}