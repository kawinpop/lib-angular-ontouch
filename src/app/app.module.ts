import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularOntouchModule, TouchDirective } from 'projects/angular-ontouch/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularOntouchModule
  ],
  providers: [
    TouchDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
