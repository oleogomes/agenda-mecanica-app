import { Role } from './role.model';
export interface Pessoa {
  id: number;
  username: string;
  nome: string;
  roles: Array<Role>;
}
