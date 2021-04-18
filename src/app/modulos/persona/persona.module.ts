import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { ListarPersonaComponent } from './listar-persona/listar-persona.component';
import { CrearPersonaComponent } from './crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './eliminar-persona/eliminar-persona.component';
import { DocumentoPersonaComponent } from './documento-persona/documento-persona.component';


@NgModule({
  declarations: [
    ListarPersonaComponent,
    CrearPersonaComponent,
    EditarPersonaComponent,
    EliminarPersonaComponent,
    DocumentoPersonaComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule
  ]
})
export class PersonaModule { }
