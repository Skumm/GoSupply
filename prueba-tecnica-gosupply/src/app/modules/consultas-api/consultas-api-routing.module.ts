import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasApiComponent } from './consultas-api.component';

const routes: Routes = [{ path: '', component: ConsultasApiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasApiRoutingModule { }
