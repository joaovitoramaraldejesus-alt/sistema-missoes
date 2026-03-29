// Usar tipos literais para o status aumenta a segurança do código (Type Safety)
export type StatusMissao = 'pendente' | 'andamento' | 'pausada' | 'concluida';

export interface IMissao {
  id: number;
  titulo: string;
  descricao: string;
  status: StatusMissao;
  prioridade: 'baixa' | 'media' | 'alta'; // Adicionar isso dá um toque extra de detalhe
}