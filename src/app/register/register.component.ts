import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { StoreUsuario } from '../store/usuario/usuario.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  hasError = false;

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onFormSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const request = {
        nombre: this.form.value.name,
        telefono: this.form.value.phone,
        direccion: this.form.value.address,
        email: this.form.value.email,
        contrasenia: this.form.value.password,
      };
      this.http
        .post(environment.apiUrlSB + '/usuario/registrar', request)
        .subscribe((response: any) => {
          if (response) {
            this.store.dispatch(new StoreUsuario(response));
            this.router.navigateByUrl('/carrito');
          }
        });
    } else {
      console.log('zzzzzzzz');
    }
  }
}
