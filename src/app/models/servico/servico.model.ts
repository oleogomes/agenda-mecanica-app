import { Pessoa } from './../pessoa/pessoa.model';
import { Carro } from './../carro/carro.model';
import { TipoServico } from './tipo-servico.model';
import { StatusServico } from './status-servico.model';
export interface Servico {
  id: number;
  dataHora: Date;
  carro: Carro;
  status: StatusServico;
  tipoServico: TipoServico;
  mecanico?: Pessoa;
  cliente: Pessoa;
}
