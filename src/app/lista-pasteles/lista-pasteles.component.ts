import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Pastel } from '../models/pastel.model';

@Component({
  selector: 'app-lista-pasteles',
  templateUrl: './lista-pasteles.component.html',
  styleUrls: ['./lista-pasteles.component.css'],
})
export class ListaPastelesComponent implements OnInit {
  pasteles: Pastel[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http
      .get<Pastel[]>(environment.apiUrlSB + '/pastel/pasteles')
      .subscribe((data: Pastel[]) => {
        this.pasteles = data;
      });
  }

  onVerDetalleClick(id: number): void {
    this.router.navigateByUrl('/pasteles/' + id);
  }
}
