export interface IUserCreate {
  ip: string;
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  telefone: string;
  cep: string;
  cidade: string;
  bairro: string;
  endereco: string;
  numero: string;
  complemento: string;
}

export interface IUserEdit {
  userId?: string;
  nome?: string;
  email?: string;
  senha?: string;
  cpf?: string;
  telefone?: string;
  cep?: string;
  cidade?: string;
  bairro?: string;
  endereco?: string;
  numero?: string;
  complemento?: string;
  isActive?: boolean;
}

export interface IUserDelete {
  userId: string;
}

export interface IUserSessions {
  userId: string;
  ip: string;
  type: string;
}
export interface IProjectCreate {
  ip: string;
  UserId: string;
  estado: string;
  cliente: string;
  cep: string;
  cidade: string;
  bairro: string;
  endereco: string;
  telefone: string;
  numero: string;
  complemento: string;
  concessionaria: string;
  potencia: string;
  pdf: string;
}

export interface IReadPerStateProject {
  estado: string;
}

export interface IProjectEdit {
  id?: string;
  userId?: string;
  estado?: string;
  cliente?: string;
  cep?: string;
  cidade?: string;
  bairro?: string;
  endereco?: string;
  telefone?: string;
  numero?: string;
  complemento?: string;
  concessionaria?: string;
  potencia?: string;
  pdf?: string;
}

export interface IProjectDelete {
  pdf: string;
}
