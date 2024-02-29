import { DetalheVenda } from "./detalhe-venda";

export interface Venda {
  idVenda: number;
  numeroDocumento: string;
  tipoPagamento: string;
  totalTexto: string;
  dataRegistro: string;
  detalheVenda: DetalheVenda[]
}
