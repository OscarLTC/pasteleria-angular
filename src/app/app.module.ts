import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PastelesComponent } from './pasteles/pasteles.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaCategoriasComponent } from './lista-categorias/lista-categorias.component';
import { ListaPastelesComponent } from './lista-pasteles/lista-pasteles.component';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PastelesComponent,
    InicioComponent,
    ListaCategoriasComponent,
    ListaPastelesComponent,
    CarritoComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    DetalleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
