import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pastel } from '../models/pastel.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  pasteles: Pastel[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Pastel[]>(environment.apiUrlSB + '/pastel/ranking')
      .subscribe((data: Pastel[]) => {
        this.pasteles = data;
      });
  }
}
