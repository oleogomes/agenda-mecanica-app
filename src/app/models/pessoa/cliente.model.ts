import { Pessoa } from './pessoa.model';

export interface Cliente extends Pessoa {
  carros?: number;
  servicos?: number;
}
