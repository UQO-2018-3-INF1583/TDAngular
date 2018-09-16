import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';
import { AppRoutingModule } from './/app-routing.module';
import {HerosService} from './heros/heros.service';
import { AccueilComponent } from './accueil/accueil.component';


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // Exercice 1.7 : définir HerosService pour toute l'application
  providers: [HerosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
