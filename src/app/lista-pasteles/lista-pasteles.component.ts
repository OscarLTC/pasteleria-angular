import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pastel } from '../models/pastel.model';
import { MostrarTodos } from '../store/pastel/pastel.action';
import { PastelSelector } from '../store/pastel/pastel.selector';

@Component({
  selector: 'app-lista-pasteles',
  templateUrl: './lista-pasteles.component.html',
  styleUrls: ['./lista-pasteles.component.css'],
})
export class ListaPastelesComponent implements OnInit {
  @Select(PastelSelector.pasteles)
  pasteles$!: Observable<Pastel[]>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new MostrarTodos());
  }

  onVerDetalleClick(id: number): void {
    this.router.navigateByUrl('/pasteles/' + id);
  }
}
