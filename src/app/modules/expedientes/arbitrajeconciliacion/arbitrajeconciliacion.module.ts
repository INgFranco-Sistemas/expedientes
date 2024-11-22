import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArbitrajeconciliacionRoutingModule } from './arbitrajeconciliacion-routing.module';
import { ArbitrajeconciliacionComponent } from './arbitrajeconciliacion.component';
import { ListaConarbitComponent } from './lista-conarbit/lista-conarbit.component';
import { CrearConarbitComponent } from './crear-conarbit/crear-conarbit.component';
import { EditarConarbitComponent } from './editar-conarbit/editar-conarbit.component';
import { EliminarConarbitComponent } from './eliminar-conarbit/eliminar-conarbit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';


@NgModule({
  declarations: [
    ArbitrajeconciliacionComponent,
    ListaConarbitComponent,
    CrearConarbitComponent,
    EditarConarbitComponent,
    EliminarConarbitComponent
  ],
  imports: [
    CommonModule,
    ArbitrajeconciliacionRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbModalModule,
    NgbPaginationModule,
  ]
})
export class ArbitrajeconciliacionModule { }
