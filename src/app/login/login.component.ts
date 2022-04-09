import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { StoreUsuario } from '../store/usuario/usuario.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  hasError = false;

  constructor(
    private http: HttpClient,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onFormSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const request = {
        name: this.form.value.name,
        pass: this.form.value.password,
      };
      this.http
        .post(environment.apiUrlSB + '/usuario/login', request)
        .subscribe((response: any) => {
          if (response) {
            this.store.dispatch(new StoreUsuario(response));
            this.router.navigateByUrl('/carrito');
            this.hasError = false;
          } else {
            this.hasError = true;
          }
        });
    }
  }
}
