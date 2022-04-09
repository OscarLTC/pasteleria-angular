import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { CarritoSelector } from 'src/app/store/carrito/carrito.selector';
import { ClearUsuario } from 'src/app/store/usuario/usuario.action';
import { UsuarioSelector } from 'src/app/store/usuario/usuario.selector';
import { UsuarioState } from 'src/app/store/usuario/usuario.state';

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

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onCerrarClick() {
    this.store.dispatch(new ClearUsuario());
  }
}
