import { NgModule } from '@angular/core';
import { AngularOntouchComponent } from './angular-ontouch.component';
import { TouchDirective } from './directive/touch.directive';



@NgModule({
  declarations: [
    AngularOntouchComponent,
    TouchDirective
  ],
  imports: [
  ],
  exports: [
    AngularOntouchComponent,
    TouchDirective
  ]
})
export class AngularOntouchModule { }
