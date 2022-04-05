import { Categoria } from './categoria.model';

export interface Pastel {
  id: number;
  nombre: string;
  url: string;
  descripcion: string;
  precio: number;
  categoria: Categoria;
}
