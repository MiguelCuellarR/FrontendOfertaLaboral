import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { ListarEmpresaComponent } from './listar-empresa/listar-empresa.component';
import { CrearEmpresaComponent } from './crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
import { EliminarEmpresaComponent } from './eliminar-empresa/eliminar-empresa.component';
import { SolicitarPersonaComponent } from './solicitar-persona/solicitar-persona.component';


@NgModule({
  declarations: [
    ListarEmpresaComponent,
    CrearEmpresaComponent,
    EditarEmpresaComponent,
    EliminarEmpresaComponent,
    SolicitarPersonaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
