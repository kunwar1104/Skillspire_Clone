import { Component, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-prof-detail',
  templateUrl: './prof-detail.component.html',
  styleUrls: ['./prof-detail.component.scss']
})
export class ProfDetailComponent {
  modalRef?: BsModalRef;
  data: FormGroup<any> | any ;
  
   constructor( public authService:AuthService,
                private modalService: BsModalService) { }

  ngOnInit(): void {
    // this.authService.update_User_Education().subscribe
    
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }
  submit(data:any){
    console.log(data)
  }
}
