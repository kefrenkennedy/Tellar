import {
  IProjectCreate,
  IProjectDelete,
  IProjectEdit,
} from '../interfaces/index';
import prismaConnect from '../utils/dataBaseClient/index';
import {
  ConflitError,
  NotFoundError,
} from '../utils/error/index';
import 'dotenv/config';

class projectService {
  async create({
    ip,
    estado,
    cep,
    cidade,
    bairro,
    endereco,
    numero,
    complemento,
    concessionaria,
    potencia,
    pdf,
    cliente,
    telefone,
  }: IProjectCreate) {
    const formatedTelefone = `(${telefone.substring(
      0,
      2
    )}) ${telefone[2]} ${telefone.substring(
      3,
      7
    )}-${telefone.substring(7, 11)}`;

    const formatedCEP = `${cep.substring(
      0,
      5
    )}-${cep.substring(5, 8)}`;

    const verifyProject =
      await prismaConnect.projects.findUnique({
        where: { pdf },
      });

    if (verifyProject) {
      throw new ConflitError(
        'this project is already registered. (check the pdf file).'
      );
    }

    const project = await prismaConnect.projects.create({
      data: {
        ip,
        estado,
        cep: formatedCEP,
        cidade,
        bairro,
        endereco,
        numero,
        complemento,
        concessionaria,
        potencia,
        pdf,
        cliente,
        telefone: formatedTelefone,
      },
    });

    return {
      project,
    };
  }

  async readAll() {
    const allProjects =
      await prismaConnect.projects.findMany();
    if (!allProjects) {
      throw new NotFoundError('Projects Not Found.');
    }
    return allProjects;
  }

  async readPerState({ estado }: any) {
    const stateProjects =
      await prismaConnect.projects.findMany({
        where: {
          estado: estado,
        },
      });

    if (!stateProjects) {
      throw new NotFoundError('Projects not Found.');
    }
    return stateProjects;
  }

  async update({
    id,
    cliente,
    cep,
    cidade,
    bairro,
    endereco,
    telefone,
    numero,
    complemento,
    concessionaria,
    potencia,
    pdf,
  }: IProjectEdit) {
    const updateProject =
      await prismaConnect.projects.update({
        where: {
          id,
        },
        data: {
          cliente,
          cep,
          cidade,
          bairro,
          endereco,
          telefone,
          numero,
          complemento,
          concessionaria,
          potencia,
          pdf,
        },
      });

    return { updateProject };
  }

  async delete({ pdf }: IProjectDelete) {
    const project = prismaConnect.projects.findUnique({
      where: {
        pdf: pdf,
      },
    });

    if (!project) {
      throw new NotFoundError('Project not found.');
    }

    await prismaConnect.projects.delete({
      where: {
        pdf: pdf,
      },
    });

    return { response: 'Project deleted with success.' };
  }
}

export default new projectService();
