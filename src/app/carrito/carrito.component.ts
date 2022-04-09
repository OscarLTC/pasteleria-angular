import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PastelCarrito } from '../models/pastel-carrito.model';
import { Usuario } from '../models/usuario.model';
import { RemovePastel } from '../store/carrito/carrito.actions';
import { CarritoSelector } from '../store/carrito/carrito.selector';
import { UsuarioSelector } from '../store/usuario/usuario.selector';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  @Select(CarritoSelector.pasteles)
  pasteles$!: Observable<PastelCarrito[]>;

  @Select(UsuarioSelector.usuario)
  usuario$!: Observable<Usuario>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  onPagarClick(): void {
    const key = this.store.selectSnapshot(UsuarioSelector.isLogged);
    console.log(key);

    if (!key) {
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/checkout');
    }
  }

  onRemoveClick(id: number): void {
    this.store.dispatch(new RemovePastel(id));
  }

  total(pasteles: PastelCarrito[]) {
    return pasteles
      .flatMap((pastel) => pastel.cantidad * pastel.precio)
      .reduce((sum, current) => sum + current, 0);
  }
}
