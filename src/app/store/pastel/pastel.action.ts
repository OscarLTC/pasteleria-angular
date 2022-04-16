import { Pastel } from 'src/app/models/pastel.model';

export class BuscarPastelCategoria {
  static readonly type = '[Carrito] Buscar pastel por categoria';
  constructor(public idCategoria: number) {}
}

export class BuscarPastelNombre {
  static readonly type = '[Carrito] Buscar pastel por nombre';
  constructor(public nombre: string) {}
}

export class MostrarTodos {
  static readonly type = '[Carrito] Mostrar todos los pasteles';
  constructor() {}
}
