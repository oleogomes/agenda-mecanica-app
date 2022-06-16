import { Role } from './role.model';
export interface Pessoa {
  id: number;
  email: string;
  username: string;
  nome: string;
  roles: Array<Role>;
}
