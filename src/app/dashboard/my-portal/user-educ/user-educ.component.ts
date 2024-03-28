import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-educ',
  templateUrl: './user-educ.component.html',
  styleUrls: ['./user-educ.component.scss']
})
export class UserEducComponent {
  bsModalRef?:BsModalRef | null ;
  modalRef?: BsModalRef;
  constructor (private modalService : BsModalService){ }  
  
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }

}
