import { Categoria } from "./categoria.model";

export interface PastelCarrito {
    id: number;
    nombre: string;
    url: string;
    descripcion: string;
    precio: number;
    categoria: Categoria;
    cantidad: number;
  }
  