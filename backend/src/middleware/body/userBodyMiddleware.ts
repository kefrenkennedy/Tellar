import { NextFunction, Request, Response } from 'express';

import { BadRequestError } from '../../utils/error/index';
import verifyBodyMiddeware from '../verifyBodyMiddeware';

class userBodyMiddleware {
  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.log('reqBody -->', req.body);
    const response = await verifyBodyMiddeware(
      req,
      [
        'nome',
        'email',
        'senha',
        'cpf',
        'telefone',
        'cep',
        'cidade',
        'bairro',
        'endereco',
        'numero',
        'complemento',
      ],
      [
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
        'string',
      ],
      {
        email: (value: string) => {
          const RegExp =
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
          return RegExp.test(value)
            ? undefined
            : {
                message: 'must be a email',
                expected: true,
              };
        },
        password: (value: string) => {
          const RegExp =
            /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;
          return RegExp.test(value)
            ? undefined
            : {
                message:
                  'include upper lower case, symbol and number',
                expected: true,
              };
        },
      }
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

export default new userBodyMiddleware();
