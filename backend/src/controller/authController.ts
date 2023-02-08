import { Request, Response } from 'express';
import authService from '../service/authService';

class authController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const ip = req.ip;

    const token = await authService.login(
      email,
      password,
      ip
    );

    return res.json({ accessToken: token });
  }


}

export default new authController();
