import { Router } from 'express';
import projectController from '../controller/projectController';
import tokenMiddleware from '../middleware/tokenMiddleware';

const projectRoutes = Router();

projectRoutes.post(
  '/',
  tokenMiddleware.user,
  projectController.create
);

projectRoutes.get('/', projectController.readAll);

projectRoutes.patch(
  '/',
  tokenMiddleware.user,
  projectController.update
);

projectRoutes.delete(
  '/',
  tokenMiddleware.user,
  projectController.delete
);

export default projectRoutes;
