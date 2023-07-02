import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunicacionComponentesRoutingModule } from './comunicacion-componentes-routing.module';
import { ComunicacionComponentesComponent } from './comunicacion-componentes.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserInfoComponent } from './components/user-info/user-info.component';


@NgModule({
  declarations: [
    ComunicacionComponentesComponent,
    UserSettingsComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    ComunicacionComponentesRoutingModule
  ]
})
export class ComunicacionComponentesModule { }
