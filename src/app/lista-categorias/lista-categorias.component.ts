import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria.model';
import {
  BuscarPastelCategoria,
  MostrarTodos,
} from '../store/pastel/pastel.action';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css'],
})
export class ListaCategoriasComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private http: HttpClient, private store: Store) {}

  ngOnInit(): void {
    this.http
      .get<Categoria[]>(environment.apiUrlSB + '/categoria/categorias')
      .subscribe((data: Categoria[]) => {
        this.categorias = data;
      });
  }
  onMostrarTodo() {
    this.store.dispatch(new BuscarPastelCategoria(0));
  }

  onCategoriaClick(id: number) {
    this.store.dispatch(new BuscarPastelCategoria(id));
  }
}
