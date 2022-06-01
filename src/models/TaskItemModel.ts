export interface TaskItemModel {
  id: string;
  titulo: string;
  descricao: string | null | undefined;
  dataCriacao: Date;
  dispararEmail: boolean;
  dispararWhatsapp: boolean;
  whatsapp: string;
  dataDisparo: Date | null;
}
