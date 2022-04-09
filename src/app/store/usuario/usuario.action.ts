import { Usuario } from 'src/app/models/usuario.model';

export class StoreUsuario {
  static readonly type = '[Usuario] Almacenar Usuario';
  constructor(public usuario: Usuario) {}
}

export class ClearUsuario {
  static readonly type = '[Usuario] Limpiar Usuario';
  constructor() {}
}
