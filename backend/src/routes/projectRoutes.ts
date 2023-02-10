import { NextFunction, Router } from 'express';
import projectController from '../controller/projectController';
import tokenMiddleware from '../middleware/tokenMiddleware';
import { body, validationResult } from 'express-validator';
import { Request, Response } from 'express';

const projectRoutes = Router();

projectRoutes.post(
  '/',
  [
    body('estado')
      .not()
      .isEmpty()
      .withMessage('Estado é um campo obrigatório.')
      .isString()
      .isUppercase()
      .isLength({ min: 2, max: 2 })
      .withMessage(
        'Estado deve ser uma string de 2 letras uppercase.'
      ),
    body('cep')
      .not()
      .isEmpty()
      .withMessage('CEP é um campo obrigatório.')
      .isString()
      .isLength({ min: 8, max: 8 })
      .isNumeric()
      .withMessage('CEP deve ser uma string de 8 números.'),
    body('cidade')
      .not()
      .isEmpty()
      .withMessage('Cidade é um campo obrigatório.')
      .isString()
      .withMessage('Cidade deve ser uma string.'),
    body('bairro')
      .not()
      .isEmpty()
      .withMessage('Bairro é um campo obrigatório.')
      .isString()
      .withMessage('Bairro deve ser uma string.'),
    body('endereco')
      .not()
      .isEmpty()
      .withMessage('Endereço é um campo obrigatório.')
      .isString()
      .withMessage('Endereço deve ser uma string.'),
    body('numero')
      .not()
      .isEmpty()
      .withMessage('Número é um campo obrigatório.')
      .isString()
      .isNumeric()
      .withMessage('Número deve ser uma string.'),
    body('complemento')
      .not()
      .isEmpty()
      .withMessage('Complemento é um campo obrigatório.')
      .isString(),
    body('concessionaria')
      .not()
      .isEmpty()
      .withMessage('Concessionária é um campo obrigatório.')
      .isString(),
    body('potencia')
      .not()
      .isEmpty()
      .withMessage('Potência é um campo obrigatório.')
      .isString(),
    body('pdf')
      .not()
      .isEmpty()
      .withMessage('PDF é um campo obrigatório.')
      .isString()
      .withMessage('PDF deve ser uma string.'),
    body('cliente')
      .not()
      .isEmpty()
      .withMessage('Cliente é um campo obrigatório.')
      .isString()
      .withMessage('Cliente deve ser uma string.'),
    body('telefone')
      .not()
      .isEmpty()
      .withMessage('Telefone é um campo obrigatório.')
      .isString()
      .isLength({ min: 11, max: 11 })
      .isNumeric()
      .withMessage(
        'Telefone deve ser uma string de 11 números.'
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
    next()
  },
  tokenMiddleware.user,
  projectController.create
);

projectRoutes.get('/', projectController.readAll);

projectRoutes.get(
  '/perState',
  projectController.readPerState
);

projectRoutes.patch(
  '/',
  [
    body('estado')
      .optional()
      .isString()
      .isUppercase()
      .isLength({ min: 2, max: 2 })
      .withMessage(
        'Estado deve ser uma string de 2 letras uppercase.'
      ),
    body('cep')
      .optional()
      .isString()
      .isLength({ min: 8, max: 8 })
      .isNumeric()
      .withMessage('CEP deve ser uma string de 8 números.'),
    body('cidade')
      .optional()
      .isString()
      .withMessage('Cidade deve ser uma string.'),
    body('bairro')
      .optional()
      .isString()
      .withMessage('Bairro deve ser uma string.'),
    body('endereco')
      .optional()
      .isString()
      .withMessage('Endereço deve ser uma string.'),
    body('numero')
      .optional()
      .isString()
      .isNumeric()
      .withMessage('Número deve ser uma string.'),
    body('complemento').optional().isString(),
    body('concessionaria').optional().isString(),
    body('potencia').optional().isString(),
    body('pdf')
      .optional()
      .isString()
      .withMessage('PDF deve ser uma string.'),
    body('cliente').optional().isString(),
    body('telefone')
      .optional()
      .isString()
      .isLength({ min: 11, max: 11 })
      .isNumeric()
      .withMessage(
        'Telefone deve ser uma string de 11 números.'
      ),
  ],
  (req: Request, res: Response) => {
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
  },
  projectController.update
);

projectRoutes.delete(
  '/',
  [
    body('pdf')
      .not()
      .isEmpty()
      .withMessage('PDF é um campo obrigatório.')
      .isString()
      .withMessage('PDF deve ser uma string.'),
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
    next()
  },
  projectController.delete
);

export default projectRoutes;
