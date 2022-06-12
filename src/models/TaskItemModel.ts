export interface TaskItemModel {
  id: string;
  titulo: string;
  notas: string | null | undefined;
  dataCriacao: Date | string;
  dispararEmail: boolean;
  dispararWhatsapp: boolean;
  whatsapp: string;
  dataDisparo: Date | string;
}
