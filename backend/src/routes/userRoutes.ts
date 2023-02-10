import { NextFunction, Router } from 'express';
import userController from '../controller/userController';
import tokenMiddleware from '../middleware/tokenMiddleware';
import { body, validationResult } from 'express-validator';
import { Request, Response } from 'express';

const userRoutes = Router();

userRoutes.post(
  '/',
  [
    body('cpf')
      .not()
      .isEmpty()
      .withMessage('cpf é um campo obrigatório.')
      .isString()
      .isLength({ min: 11, max: 11 })
      .withMessage('CPF inválido.')
      .isNumeric()
      .withMessage(
        'CPF precisa ser uma string com 11 números'
      ),
    body('nome')
      .not()
      .isEmpty()
      .withMessage('nome é um campo obrigatório.')
      .isString()
      .withMessage('Nome precisa ser uma string.'),
    body('email')
      .not()
      .isEmpty()
      .withMessage('email é um campo obrigatório.')
      .isString()
      .withMessage('Email precisa ser uma string.')
      .isEmail()
      .withMessage('Email Invalido.'),
    body('telefone')
      .not()
      .isEmpty()
      .withMessage('telefone é um campo obrigatório.')
      .isString()
      .isLength({ min: 11, max: 11 })
      .withMessage('DDD + Número inválido')
      .isNumeric()
      .withMessage(
        'Telefone precisa ser uma string com 11 números'
      ),
    body('cep')
      .not()
      .isEmpty()
      .withMessage('cep é um campo obrigatório.')
      .isString()
      .isLength({ min: 8, max: 8 })
      .withMessage('CEP inválido.')
      .isNumeric()
      .withMessage(
        'CEP precisa ser uma string com 8 números'
      ),
    body('cidade')
      .not()
      .isEmpty()
      .withMessage('cidade é um campo obrigatório.')
      .isString()
      .withMessage('Cidade precisa ser uma string.'),
    body('bairro')
      .not()
      .isEmpty()
      .withMessage('bairro é um campo obrigatório.')
      .isString()
      .withMessage('Bairro precisa ser uma string.'),
    body('endereco')
      .not()
      .isEmpty()
      .withMessage('endereco é um campo obrigatório.')
      .isString()
      .withMessage('Endereço precisa ser uma string.'),
    body('numero')
      .not()
      .isEmpty()
      .withMessage('numero é um campo obrigatório.')
      .isString()
      .isNumeric()
      .withMessage('Número precisa ser uma string.'),
    body('complemento')
      .not()
      .isEmpty()
      .withMessage('complemento é um campo obrigatório.')
      .isString()
      .withMessage('Complemento precisa ser uma string'),
    body('senha')
      .not()
      .isEmpty()
      .withMessage('senha é um campo obrigatório.')
      .isString()
      .isLength({ min: 8 })
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/,
        'i'
      )
      .withMessage(
        'Senha precisa ter no mínimo 8 caracteres e conter pelo menos 1 letra maiúscula, 1 minúscula, 1 símbolo e 1 número'
      ),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    const response: any = [];

    errors.array().forEach((obj) => {
      if (obj.msg !== 'Invalid value') {
        response.push(obj.msg);
      }
    });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: response });
    }
    next();
  },
  userController.create
);

userRoutes.get('/', userController.readAll);

userRoutes.patch(
  '/',
  [
    body('cpf')
      .optional()
      .isString()
      .isLength({ min: 11, max: 11 })
      .withMessage('CPF inválido.')
      .isNumeric()
      .withMessage(
        'CPF precisa ser uma string com 11 números'
      ),
    body('nome')
      .optional()
      .isString()
      .withMessage('Nome precisa ser uma string.'),
    body('email')
      .optional()
      .isString()
      .withMessage('Email precisa ser uma string.')
      .isEmail()
      .withMessage('Email inválido.'),
    body('telefone')
      .optional()
      .isString()
      .isLength({ min: 11, max: 11 })
      .withMessage('DDD + Número inválido')
      .isNumeric()
      .withMessage(
        'Telefone precisa ser uma string com 11 números'
      ),
    body('cep')
      .optional()
      .isString()
      .isLength({ min: 8, max: 8 })
      .withMessage('CEP inválido.')
      .isNumeric()
      .withMessage(
        'CEP precisa ser uma string com 8 números'
      ),
    body('cidade')
      .optional()
      .isString()
      .withMessage('Cidade precisa ser uma string.'),
    body('bairro')
      .optional()
      .isString()
      .withMessage('Bairro precisa ser uma string.'),
    body('endereco')
      .optional()
      .isString()
      .withMessage('Endereço precisa ser uma string.'),
    body('numero')
      .optional()
      .isString()
      .withMessage('Número precisa ser uma string.'),
    body('complemento')
      .optional()
      .isString()
      .withMessage('Complemento precisa ser uma string'),
    body('senha')
      .optional()
      .isString()
      .isLength({ min: 8 })
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/,
        'i'
      )
      .withMessage(
        'Senha precisa ter no mínimo 8 caracteres e conter pelo menos 1 letra maiúscula, 1 minúscula, 1 símbolo e 1 número'
      ),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    const response: any = [];

    errors.array().forEach((obj) => {
      if (obj.msg !== 'Invalid value') {
        response.push(obj.msg);
      }
    });

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: response });
    }
    next();
  },
  tokenMiddleware.user,
  userController.update
);

userRoutes.delete(
  '/',
  tokenMiddleware.user,
  userController.delete
);

export default userRoutes;
