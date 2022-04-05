import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria.model';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css'],
})
export class ListaCategoriasComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Categoria[]>(environment.apiUrlSB + '/categoria/categorias')
      .subscribe((data: Categoria[]) => {
        this.categorias = data;
      });
  }
}
