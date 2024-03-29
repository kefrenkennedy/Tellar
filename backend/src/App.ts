import 'express-async-errors';
import express from 'express';

import cors from 'cors';
import errorMiddleware from './middleware/errorMiddleware';
import userRoutes from './routes/userRoutes';
import authRotes from './routes/authRoutes';
import projectRoutes from './routes/projectRoutes';

class App {
  server: any;
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  async enableCors() {
    const options: cors.CorsOptions = {
      methods: 'GET,POST,PATCH,DELETE',
      origin: '*',
    };

    this.server.use(cors(options));
  }

  async middlewares() {
    this.enableCors();
    this.server.use(express.json());
  }

  async routes() {
    this.server.use('/login', authRotes);
    this.server.use('/user', userRoutes);
    this.server.use('/project', projectRoutes);
    this.server.use(errorMiddleware);
  }
}


export default new App().server;
