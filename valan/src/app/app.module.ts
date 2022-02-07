import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './components/shared/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { SidenavListComponent } from './components/shared/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SesionComponent,
    NavbarComponent,
    RegistroComponent,
    SomosComponent,
    AyudaComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, {useHash:true}),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  exports:[
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
