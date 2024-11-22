import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CrearPenalesComponent } from '../crear-penales/crear-penales.component';

@Component({
  selector: 'app-lista-penales',
  templateUrl: './lista-penales.component.html',
  styleUrls: ['./lista-penales.component.scss']
})
export class ListaPenalesComponent {
  isLoading$: any;
  constructor(
    public modalService: NgbModal,
  ) {

  }

  openModalCrearProcesoPenal(){
    const modalRef = this.modalService.open(CrearPenalesComponent,{centered:true,size: 'lg'});
  }
}
