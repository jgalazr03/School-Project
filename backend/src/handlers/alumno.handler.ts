import {Request, Response} from 'express';
import { AlumnoController } from '../interfaces/alumno.controller.interface';

export class AlumnoHandler{
    constructor(private controller: AlumnoController){}

    getAlumnos = async (req: Request, res: Response) => {
        try{
            const data = await this.controller.getAlumnos();
            res.json(data);
        } catch(err: any){
            res.status(500).json({error: err.message});
        }
    };

    createAlumno = async (req: Request, res: Response) => {
        try {
            const nuevo = await this.controller.createAlumno(req.body);
            res.status(201).json(nuevo);
        } catch(err: any){
            res.status(400).json({error: err.message});
        }
    }
}