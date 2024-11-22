import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrearJudicialesComponent } from '../crear-judiciales/crear-judiciales.component';

@Component({
  selector: 'app-lista-judiciales',
  templateUrl: './lista-judiciales.component.html',
  styleUrls: ['./lista-judiciales.component.scss']
})
export class ListaJudicialesComponent {
  isLoading$: any;
  constructor(
    public modalService: NgbModal,
  ) {

  }
  openModalCrearProcesoJudicial(){
    const modalRef = this.modalService.open(CrearJudicialesComponent,{centered:true,size: 'lg'});
  }
}
