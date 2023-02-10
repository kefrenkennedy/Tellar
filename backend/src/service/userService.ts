import { hash } from 'bcryptjs';
import {
  IUserCreate,
  IUserDelete,
  IUserEdit,
} from '../interfaces/index';
import prismaConnect from '../utils/dataBaseClient/index';
import {
  ConflitError,
  NotFoundError,
} from '../utils/error/index';
import authService from './authService';
import 'dotenv/config';

class userService {
  async create({
    ip,
    nome,
    email,
    senha,
    cpf,
    telefone,
    cep,
    cidade,
    bairro,
    endereco,
    numero,
    complemento,
  }: IUserCreate) {
    const verifyUserEmail =
      await prismaConnect.users.findUnique({
        where: { email },
      });

    if (verifyUserEmail) {
      throw new ConflitError(
        'this email is already registered'
      );
    }

    const verifyUserCpf =
      await prismaConnect.users.findUnique({
        where: { cpf },
      });

    if (verifyUserCpf) {
      throw new ConflitError(
        'this cpf is already registered'
      );
    }

    const formatedCPF = `${cpf.substring(
      0,
      3
    )}.${cpf.substring(3, 6)}.${cpf.substring(
      6,
      9
    )}-${cpf.substring(9, 11)}`;

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

    const hashedSenha = await hash(senha.toString(), 10);

    const user = await prismaConnect.users.create({
      data: {
        ip,
        nome,
        email,
        senha: hashedSenha,
        cpf: formatedCPF,
        telefone: formatedTelefone,
        cep: formatedCEP,
        cidade,
        bairro,
        endereco,
        numero,
        complemento,
        isActive: true,
      },
    });

    const accessToken = await authService.login(
      email,
      senha,
      ip
    );

    await prismaConnect.userSessions.create({
      data: {
        UserId: user.id,
        ip,
        type: 'user: create user',
      },
    });

    return {
      user,
      accessToken,
    };
  }

  async readAll() {
    const AllUsers = await prismaConnect.users.findMany();
    if (!AllUsers) {
      throw new NotFoundError('No User Found.');
    }
    return AllUsers;
  }

  async update({
    userId,
    nome,
    email,
    senha,
    cpf,
    telefone,
    cep,
    cidade,
    bairro,
    endereco,
    numero,
    complemento,
  }: IUserEdit) {
    const id = userId;

    const updateUser = await prismaConnect.users.update({
      where: {
        id,
      },
      data: {
        nome,
        email,
        senha,
        cpf,
        telefone,
        cep,
        cidade,
        bairro,
        endereco,
        numero,
        complemento,
      },
    });

    return { updateUser };
  }

  async delete({ userId }: IUserDelete) {
    const user = await prismaConnect.users.findUnique({
      where: { id: userId },
    });

    if (!user?.isActive) {
      throw new NotFoundError('User not found.');
    }

    await prismaConnect.users.update({
      where: {
        id: userId,
      },
      data: {
        isActive: false,
      },
    });

    return { response: 'User deleted with success.' };
  }
}

export default new userService();
