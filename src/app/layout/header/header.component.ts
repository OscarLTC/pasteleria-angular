import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { CarritoSelector } from 'src/app/store/carrito/carrito.selector';
import { BuscarPastelNombre } from 'src/app/store/pastel/pastel.action';
import { ClearUsuario } from 'src/app/store/usuario/usuario.action';
import { UsuarioSelector } from 'src/app/store/usuario/usuario.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Select(CarritoSelector.items)
  items$!: Observable<number>;

  @Select(UsuarioSelector.isLogged)
  isLogged$!: Observable<boolean>;

  @Select(UsuarioSelector.usuario)
  usuario$!: Observable<Usuario>;

  nombre: string = '';
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  onCerrarClick() {
    this.store.dispatch(new ClearUsuario());
  }

  onBuscarEnter() {
    this.router.navigateByUrl('/pasteles');
    this.store.dispatch(new BuscarPastelNombre(this.nombre));
  }
}
