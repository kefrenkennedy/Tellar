import {
  IProjectCreate,
  IProjectDelete,
  IProjectEdit,
} from '../interfaces/index';
import prismaConnect from '../utils/dataBaseClient/index';
import { NotFoundError } from '../utils/error/index';
import 'dotenv/config';

class projectService {
  async create({
    ip,
    UserId,
    nome,
    cep,
    cidade,
    bairro,
    endereco,
    telefone,
    numero,
    complemento,
    concessionaria,
    potenciaDoProjeto,
    pdf,
  }: IProjectCreate) {
    const project = await prismaConnect.userProjects.create(
      {
        data: {
          ip,
          UserId,
          nome,
          cep,
          cidade,
          bairro,
          endereco,
          telefone,
          numero,
          complemento,
          concessionaria,
          potenciaDoProjeto,
          pdf,
        },
      }
    );

    return {
      project,
    };
  }

  async readAll() {
    const allProjects =
      await prismaConnect.userProjects.findMany();
    if (!allProjects) {
      throw new NotFoundError('No Project Found.');
    }
    return allProjects;
  }

  async update({
    id,
    nome,
    cep,
    cidade,
    bairro,
    endereco,
    telefone,
    numero,
    complemento,
    concessionaria,
    potenciaDoProjeto,
    pdf,
  }: IProjectEdit) {
    const updateProject =
      await prismaConnect.userProjects.update({
        where: {
          id,
        },
        data: {
          nome,
          cep,
          cidade,
          bairro,
          endereco,
          telefone,
          numero,
          complemento,
          concessionaria,
          potenciaDoProjeto,
          pdf,
        },
      });

    return { updateProject };
  }

  async delete({ id }: IProjectDelete) {
    await prismaConnect.userProjects.update({
      where: {
        id: id,
      },
      data: {
        id: id,
      },
    });

    return { response: 'Project deleted with success.' };
  }
}

export default new projectService();
