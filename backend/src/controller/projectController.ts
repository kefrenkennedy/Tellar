import { Request, Response } from 'express';

import {
  IProjectCreate,
  IProjectEdit,
  IReadPerStateProject,
} from '../interfaces/index';
import projectService from '../service/projectService';

class projectController {
  async create(req: Request, res: Response) {
    const {
      UserId,
      estado,
      cliente,
      cep,
      cidade,
      bairro,
      endereco,
      telefone,
      numero,
      complemento,
      concessionaria,
      potencia,
      pdf,
    }: IProjectCreate = req.body;

    const ip = req.ip;

    const data = await projectService.create({
      ip,
      UserId,
      estado,
      cliente,
      cep,
      cidade,
      bairro,
      endereco,
      telefone,
      numero,
      complemento,
      concessionaria,
      potencia,
      pdf,
    });

    return res.status(201).json({
      data: data,
    });
  }

  async update(req: Request, res: Response) {

    const {
      id,
      estado,
      cliente,
      cep,
      cidade,
      bairro,
      endereco,
      telefone,
      numero,
      complemento,
      concessionaria,
      potencia,
      pdf,
    }: IProjectEdit = req.body;

    const data = await projectService.update({
      id,
      cliente,
      estado,
      cep,
      cidade,
      bairro,
      endereco,
      telefone,
      numero,
      complemento,
      concessionaria,
      potencia,
      pdf,
    });

    return res.status(200).json({
      data: data,
    });
  }

  async readAll(req: Request, res: Response) {
    const data = await projectService.readAll();

    return res.status(200).json({
      data: data,
    });
  }

  async readPerState(req: Request, res: Response) {
    const estado = req.body.estado;
    const data = await projectService.readPerState(estado);

    return res.status(200).json({
      data: data,
    });
  }

  async delete(req: Request, res: Response) {
    const { pdf }: any = req.body;

    await projectService.delete({ pdf });

    return res
      .status(200)
      .json({ message: 'Project Deleted with Sucess' });
  }
}

export default new projectController();
