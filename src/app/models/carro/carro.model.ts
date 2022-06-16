import { Pessoa } from '../pessoa/pessoa.model';
import { ModeloCarro } from './modelo-carro.model';

export interface Carro {
  id: number;
  placa: string;
  anoModelo?: string;
  modelo: ModeloCarro;
  proprietario: Pessoa;
}
