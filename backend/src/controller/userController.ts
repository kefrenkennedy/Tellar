import { Request, Response } from 'express';

import {
  IUserCreate,
  IUserEdit,
} from '../interfaces/index';
import { excludeResponseMiddleware } from '../middleware/excludeResponseMiddleware';
import userService from '../service/userService';

class userController {
  async create(req: Request, res: Response) {
    const {
      nome,
      email,
      senha,
      cpf,
      telefone,
      cep,
      cidade,
      bairro,
      endereco,
      numero,
      complemento,
    }: IUserCreate = req.body;

    const ip = req.ip;

    const data = await userService.create({
      ip,
      nome,
      email,
      senha,
      cpf,
      telefone,
      cep,
      cidade,
      bairro,
      endereco,
      numero,
      complemento,
    });

    return res.status(201).json({
      data: excludeResponseMiddleware(data, ['senha']),
    });
  }

  async update(req: Request, res: Response) {
    const {
      nome,
      email,
      senha,
      cpf,
      telefone,
      cep,
      cidade,
      bairro,
      endereco,
      numero,
      complemento,
    }: IUserEdit = req.body;

    const userId = req.user.id;

    const data = await userService.update({
      userId,
      nome,
      email,
      senha,
      cpf,
      telefone,
      cep,
      cidade,
      bairro,
      endereco,
      numero,
      complemento,
    });

    return res.status(200).json({
      data: excludeResponseMiddleware(data, [
        'senha',
        'isActive',
      ]),
    });
  }

  async readAll(req: Request, res: Response) {
    const data = await userService.readAll();

    return res.status(200).json({
      data: excludeResponseMiddleware(data, ['senha']),
    });
  }

  async delete(req: Request, res: Response) {
    const userId = req.user.id;

    await userService.delete({ userId });

    return res
      .status(200)
      .json({ message: 'User Deleted with Sucess' });
  }
}

export default new userController();
