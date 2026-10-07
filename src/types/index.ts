// Tipagens baseadas no diagrama de classes do Fit Friend

export type UUID = string;

// TODO: ajustar os valores conforme definido pelo grupo
export type CategoriaParceiro = string;

export interface Usuario {
  id: UUID;
  nome: string;
  email: string;
  telefone: string;
  senha?: string;
}

export interface Treino {
  id: UUID;
  nomeEquipe: string;
  participantes: Usuario[];
}

export interface Parceiro {
  id: UUID;
  nomeFantasia: string;
  categoria: CategoriaParceiro;
}

export interface Comentario {
  id: UUID;
  texto: string;
  dataHora: string;
  autor: Usuario;
}

export interface Postagem {
  id: UUID;
  conteudo: string;
  dataHora: string;
  autor: Usuario;
  comentarios: Comentario[];
}