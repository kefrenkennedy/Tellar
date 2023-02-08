import { Router } from 'express';
import authController from '../controller/authController';

const authRotes = Router();

authRotes.post('/', authController.login);

export default authRotes;
