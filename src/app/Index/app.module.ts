import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogInComponent } from '../logIn/logIn.component';

import { CabeceraComponent } from './cabecera/cabecera.component';
import { FooterComponent } from './footer/footer.component';
import { ContenidoComponent } from './contenido/contenido.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CabeceraComponent,
    FooterComponent,
    ContenidoComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // We will need to expose the API, and only a provider can do that.
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
