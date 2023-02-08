import { Router } from 'express';
import userController from '../controller/userController';
import tokenMiddleware from '../middleware/tokenMiddleware';


const userRoutes = Router();

userRoutes.post(
  '/',
  userController.create
);

userRoutes.get('/', userController.readAll);

userRoutes.patch(
  '/',
  tokenMiddleware.user,
  userController.update
);

userRoutes.delete(
  '/',
  tokenMiddleware.user,
  userController.delete
);

export default userRoutes;
