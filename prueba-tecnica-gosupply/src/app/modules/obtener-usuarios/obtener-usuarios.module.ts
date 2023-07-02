import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObtenerUsuariosRoutingModule } from './obtener-usuarios-routing.module';
import { ObtenerUsuariosComponent } from './obtener-usuarios.component';


@NgModule({
  declarations: [
    ObtenerUsuariosComponent
  ],
  imports: [
    CommonModule,
    ObtenerUsuariosRoutingModule
  ]
})
export class ObtenerUsuariosModule { }
