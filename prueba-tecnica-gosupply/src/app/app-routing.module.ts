import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'comunicacion-componentes',
    pathMatch: 'full',
  },
  { path: 'obtener-usuarios', loadChildren: () => import('./modules/obtener-usuarios/obtener-usuarios.module').then(m => m.ObtenerUsuariosModule) },
  { path: 'consultas-api', loadChildren: () => import('./modules/consultas-api/consultas-api.module').then(m => m.ConsultasApiModule) },
  { path: 'estilos', loadChildren: () => import('./modules/estilos/estilos.module').then(m => m.EstilosModule) },
  { path: 'comunicacion-componentes', loadChildren: () => import('./modules/comunicacion-componentes/comunicacion-componentes.module').then(m => m.ComunicacionComponentesModule) },
]
@NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        onSameUrlNavigation: 'reload',
      }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}