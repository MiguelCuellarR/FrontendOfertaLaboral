import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParametrizacionModule } from './modulos/parametrizacion/parametrizacion.module';
import { SeguridadModule } from './modulos/seguridad/seguridad.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { Error404Component } from './publico/errores/error404/error404.component';
import { InicioComponent } from './publico/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio' 
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(() => SeguridadModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./modulos/usuario/usuario.module').then(() => UsuarioModule)
  },
  {
    path: 'parametrizacion',
    loadChildren: () => import('./modulos/parametrizacion/parametrizacion.module').then(() => ParametrizacionModule)
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
