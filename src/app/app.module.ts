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
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarritoState } from './store/carrito/carrito.state';
import { UsuarioState } from './store/usuario/usuario.state';
import { PastelState } from './store/pastel/pastel.state';

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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([CarritoState, UsuarioState, PastelState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: [CarritoState, UsuarioState, PastelState],
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
