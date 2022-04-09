import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { PastelCarrito } from '../models/pastel-carrito.model';
import { Pastel } from '../models/pastel.model';
import { AddPastel } from '../store/carrito/carrito.actions';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})

export class DetalleComponent implements OnInit {


  pastel: Pastel = {} as Pastel;

  cantidad: number = 1

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.http
      .get<PastelCarrito>(environment.apiUrlSB + '/pastel/pasteles/' + id)
      .subscribe((data: PastelCarrito) => {
        this.pastel = data;
      });
  }

  onAnadirClick(pastel: Pastel): void {
    const pastelCarrito: PastelCarrito = {
      ...pastel,
      cantidad: this.cantidad,
    }
    this.store.dispatch(new AddPastel(pastelCarrito));
    this.router.navigateByUrl("/carrito")
  }
}
