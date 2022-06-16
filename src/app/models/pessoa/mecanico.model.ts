import { Pessoa } from './pessoa.model';
import { Servico } from "../servico/servico.model";

export interface Mecanico extends Pessoa {
  servicos?: number;
}
