import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { AppComponent } from './app.component';
import { LogInComponent } from '../logIn/logIn.component';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { BarralateralComponent } from './contenido/barralateral/barralateral.component';
import { FooterComponent } from './footer/footer.component';
import { NuevoUsuarioComponent } from '../Usuario/nuevoUsuario/nuevoUsuario.component';

@NgModule({
  declarations: [
    // AppComponent,
    LogInComponent,
    CabeceraComponent,
    ContenidoComponent,
    BarralateralComponent,
    FooterComponent,
    NuevoUsuarioComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // We will need to expose the API, and only a provider can do that.
  providers: [ContenidoComponent],
  bootstrap: [ContenidoComponent]
})
export class AppModule { }
