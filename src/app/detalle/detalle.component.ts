import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Pastel } from '../models/pastel.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  pastel: Pastel = {} as Pastel;
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.http
      .get<Pastel>(environment.apiUrlSB + '/pastel/pasteles/' + id)
      .subscribe((data: Pastel) => {
        this.pastel = data;

        console.log(data.categoria);
      });
  }
}
