import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasApiRoutingModule } from './consultas-api-routing.module';
import { ConsultasApiComponent } from './consultas-api.component';


@NgModule({
  declarations: [
    ConsultasApiComponent
  ],
  imports: [
    CommonModule,
    ConsultasApiRoutingModule
  ]
})
export class ConsultasApiModule { }
