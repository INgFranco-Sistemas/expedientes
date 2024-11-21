import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesosjudicialesRoutingModule } from './procesosjudiciales-routing.module';
import { ProcesosjudicialesComponent } from './procesosjudiciales.component';
import { ListaJudicialesComponent } from './lista-judiciales/lista-judiciales.component';
import { CrearJudicialesComponent } from './crear-judiciales/crear-judiciales.component';
import { EditarJudicialesComponent } from './editar-judiciales/editar-judiciales.component';
import { EliminarJudicialesComponent } from './eliminar-judiciales/eliminar-judiciales.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';


@NgModule({
  declarations: [
    ProcesosjudicialesComponent,
    ListaJudicialesComponent,
    CrearJudicialesComponent,
    EditarJudicialesComponent,
    EliminarJudicialesComponent
  ],
  imports: [
    CommonModule,
    ProcesosjudicialesRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbModalModule,
  ]
})
export class ProcesosjudicialesModule { }
