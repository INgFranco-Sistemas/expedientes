import { Component } from '@angular/core';
import { CrearConarbitComponent } from '../crear-conarbit/crear-conarbit.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-conarbit',
  templateUrl: './lista-conarbit.component.html',
  styleUrls: ['./lista-conarbit.component.scss']
})
export class ListaConarbitComponent {
  isLoading$: any;
  constructor(
    public modalService: NgbModal,
  ) {

  }
  openModalCrearArbitrajeConciliacionJudicial(){
    const modalRef = this.modalService.open(CrearConarbitComponent,{centered:true,size: 'lg'});
  }
}
