import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcesosjudicialesComponent } from './procesosjudiciales.component';
import { ListaJudicialesComponent } from './lista-judiciales/lista-judiciales.component';

const routes: Routes = [
  {
    path: '',
    component: ProcesosjudicialesComponent,
    children: [
      {
        path: 'list',
        component: ListaJudicialesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcesosjudicialesRoutingModule { }
