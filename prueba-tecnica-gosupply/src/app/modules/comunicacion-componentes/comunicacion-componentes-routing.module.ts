import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunicacionComponentesComponent } from './comunicacion-componentes.component';

const routes: Routes = [{ path: '', component: ComunicacionComponentesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComunicacionComponentesRoutingModule { }
