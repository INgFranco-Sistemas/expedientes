import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesospenalesComponent } from './procesospenales.component';
import { ListaJudicialesComponent } from '../procesosjudiciales/lista-judiciales/lista-judiciales.component';
import { ListaPenalesComponent } from './lista-penales/lista-penales.component';

const routes: Routes = [
  {
    path: '',
    component: ProcesospenalesComponent,
    children: [
      {
        path: 'list',
        component: ListaPenalesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesospenalesRoutingModule { }
