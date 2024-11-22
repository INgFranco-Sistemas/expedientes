import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArbitrajeconciliacionComponent } from './arbitrajeconciliacion.component';
import { ListaConarbitComponent } from './lista-conarbit/lista-conarbit.component';

const routes: Routes = [
  {
    path: '',
    component: ArbitrajeconciliacionComponent,
    children: [
      {
        path: 'list',
        component: ListaConarbitComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArbitrajeconciliacionRoutingModule { }
