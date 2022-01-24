import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule} from '@angular/router';


// permite hacer peticiones http 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SesionComponent } from './components/sesion/sesion.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// importar rutas
import { ROUTES } from './app.routes';
import { RegistroComponent } from './components/registro/registro.component';
import { SomosComponent } from './components/somos/somos.component';
import { AyudaComponent } from './components/ayuda/ayuda.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SesionComponent,
    NavbarComponent,
    RegistroComponent,
    SomosComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash:true})
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
