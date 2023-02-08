import { Request, Response } from 'express';

import {
  IProjectCreate,
  IProjectEdit,
} from '../interfaces/index';
import projectService from '../service/projectService';

class projectController {
  async create(req: Request, res: Response) {
    const {
      UserId,
      estado,
      nome,
      cep,
      cidade,
      bairro,
      endereco,
      telefone,
      numero,
      complemento,
      concessionaria,
      potenciaDoProjeto,
      pdf,
    }: IProjectCreate = req.body;

    const ip = req.ip;

    const data = await projectService.create({
      ip,
      UserId,
      estado,
      nome,
      cep,
      cidade,
      bairro,
      endereco,
      telefone,
      numero,
      complemento,
      concessionaria,
      potenciaDoProjeto,
      pdf,
    });

    return res.status(201).json({
      data: data,
    });
  }

  async update(req: Request, res: Response) {
    const {
      userId,
      estado,
      nome,
      cep,
      cidade,
      bairro,
      endereco,
      telefone,
      numero,
      complemento,
      concessionaria,
      potenciaDoProjeto,
      pdf,
    }: IProjectEdit = req.body;

    const data = await projectService.update({
      userId,
      nome,
      cep,
      cidade,
      bairro,
      endereco,
      telefone,
      numero,
      complemento,
      concessionaria,
      potenciaDoProjeto,
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

  async delete(req: Request, res: Response) {
    const { id } = req.project;

    await projectService.delete({ id });

    return res
      .status(200)
      .json({ message: 'Project Deleted with Sucess' });
  }
}

export default new projectController();
