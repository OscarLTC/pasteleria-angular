import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, State, Store } from '@ngxs/store';
import { getStateDiffChanges } from '@ngxs/store/src/internal/internals';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PastelCarrito } from '../models/pastel-carrito.model';
import { Usuario } from '../models/usuario.model';
import { LimpiarCarrito } from '../store/carrito/carrito.actions';
import { CarritoSelector } from '../store/carrito/carrito.selector';
import { UsuarioSelector } from '../store/usuario/usuario.selector';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  @Select(UsuarioSelector.usuario)
  usuario$!: Observable<Usuario>;

  @Select(CarritoSelector.pasteles)
  pasteles$!: Observable<PastelCarrito[]>;

  constructor(
    private router: Router,
    private store: Store,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  envio = false;

  onRegresarClick(): void {
    this.router.navigateByUrl('/carrito');
  }

  total(pasteles: PastelCarrito[]) {
    return pasteles
      .flatMap((pastel) => pastel.cantidad * pastel.precio)
      .reduce((sum, current) => sum + current, 0);
  }

  onDeliveryClick() {
    this.envio = true;
  }

  onRecojoClick() {
    this.envio = false;
  }

  onComprarClick() {
    const usuario = this.store.selectSnapshot(UsuarioSelector.usuario);
    const pasteles = this.store.selectSnapshot(CarritoSelector.pasteles);

    const request = {
      idusuario: usuario?.id,
      detalle: pasteles.map((pastel) => ({
        idpastel: pastel.id,
        cantidad: pastel.cantidad,
        subtotal: pastel.precio * pastel.cantidad,
      })),
    };
    this.http
      .post(environment.apiUrlSB + '/compra/compra', request)
      .subscribe(() => {
        this.store.dispatch(new LimpiarCarrito());
        alert('Venta Finalizada');
        this.router.navigateByUrl('/');
      });
  }
}
