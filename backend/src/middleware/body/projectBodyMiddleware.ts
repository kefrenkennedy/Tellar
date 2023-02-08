import { NextFunction, Request, Response } from 'express';

import verifyBodyMiddeware from '../verifyBodyMiddeware';

class projectBodyMiddleware {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.log('reqBody -->', req.body);
    const response = await verifyBodyMiddeware(
      req,
      [
        'userId',
        'nome',
        'cep',
        'cidade',
        'bairro',
        'endereco',
        'telefone',
        'numero',
        'complemento',
        'concessionaria',
        'potenciaDoProjeto',
        'pdf',
      ],
      [
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
      ]
    );

    response === undefined
      ? next()
      : res.status(400).json(response);
  }

  async edit(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    next();
  }
}

export default new projectBodyMiddleware();
