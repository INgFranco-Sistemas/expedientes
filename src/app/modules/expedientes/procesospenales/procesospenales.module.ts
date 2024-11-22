import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcesospenalesRoutingModule } from './procesospenales-routing.module';
import { ProcesospenalesComponent } from './procesospenales.component';
import { ListaPenalesComponent } from './lista-penales/lista-penales.component';
import { CrearPenalesComponent } from './crear-penales/crear-penales.component';
import { EditarPenalesComponent } from './editar-penales/editar-penales.component';
import { EliminarPenalesComponent } from './eliminar-penales/eliminar-penales.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';


@NgModule({
  declarations: [
    ProcesospenalesComponent,
    ListaPenalesComponent,
    CrearPenalesComponent,
    EditarPenalesComponent,
    EliminarPenalesComponent
  ],
  imports: [
    CommonModule,
    ProcesospenalesRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbModalModule,
    NgbPaginationModule,
  ]
})
export class ProcesospenalesModule { }
