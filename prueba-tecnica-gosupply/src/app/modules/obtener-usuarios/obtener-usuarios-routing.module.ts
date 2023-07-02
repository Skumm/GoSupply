import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObtenerUsuariosComponent } from './obtener-usuarios.component';

const routes: Routes = [{ path: '', component: ObtenerUsuariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObtenerUsuariosRoutingModule { }
