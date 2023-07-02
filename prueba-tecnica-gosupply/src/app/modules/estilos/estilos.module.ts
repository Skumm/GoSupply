import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstilosRoutingModule } from './estilos-routing.module';
import { EstilosComponent } from './estilos.component';


@NgModule({
  declarations: [
    EstilosComponent
  ],
  imports: [
    CommonModule,
    EstilosRoutingModule
  ]
})
export class EstilosModule { }
