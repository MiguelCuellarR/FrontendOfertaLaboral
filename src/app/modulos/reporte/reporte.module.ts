import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { PersonasCiudadComponent } from './personas-ciudad/personas-ciudad.component';
import { PersonasEmpresaComponent } from './personas-empresa/personas-empresa.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { PersonaMasSolicitadaComponent } from './persona-mas-solicitada/persona-mas-solicitada.component';


@NgModule({
  declarations: [
    PersonasCiudadComponent,
    PersonasEmpresaComponent,
    EmpresasComponent,
    PersonaMasSolicitadaComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule
  ]
})
export class ReporteModule { }
