import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './logIn/logIn.component';

import { CabeceraComponent } from './Index/cabecera/cabecera.component';
import { FooterComponent } from './Index/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CabeceraComponent,
    FooterComponent
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
