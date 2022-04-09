import { PastelCarrito } from '../../models/pastel-carrito.model';
import { Pastel } from '../../models/pastel.model';

export class AddPastel {
  static readonly type = '[Carrito] Añadir Pastel';
  constructor(public pastel: PastelCarrito) {}
}

export class RemovePastel {
  static readonly type = '[Carrito] Eliminar Pastel';
  constructor(public id: number) {}
}
