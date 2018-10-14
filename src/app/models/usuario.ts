import { Role } from './role';

export class Usuario {
    Id: number;
    Login: string;
    Nome: string;
    Senha: string;
    DataFinalContrato?: Date;
    ContaId?: number;
    RepublicaId?: number;
    Email: string;
    roleId: number;
}
