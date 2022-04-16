import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pastel } from 'src/app/models/pastel.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PastelService {
  constructor(private http: HttpClient) {}

  getPasteleByCategory(id: number) {
    if (id > 0) {
      return this.http.get<Pastel[]>(
        environment.apiUrlSB + '/pastel/categoria/' + id
      );
    } else {
      return this.getPasteles();
    }
  }

  getPasteleByNombre(nombre: string) {
    if (nombre === '') {
      return this.getPasteles();
    } else {
      return this.http.get<Pastel[]>(
        environment.apiUrlSB + '/pastel/buscar/' + nombre
      );
    }
  }

  getPasteles() {
    return this.http.get<Pastel[]>(environment.apiUrlSB + '/pastel/pasteles');
  }
}
