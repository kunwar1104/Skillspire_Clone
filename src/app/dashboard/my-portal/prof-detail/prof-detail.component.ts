import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/authentication/auth.service';

@Component({
  selector: 'app-prof-detail',
  templateUrl: './prof-detail.component.html',
  styleUrls: ['./prof-detail.component.scss']
})
export class ProfDetailComponent {
  modalRef?: BsModalRef;
  prof_Form: FormGroup<any> | any ;
  passord_pattern = /^[a-zA-Z0-9]{8}$/;
  name_pattern = /^[a-zA-Z]{3,15}$/ ;
  number_pattern = /^[0-9]{10}$/ ;
  email_id = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.com$|^".*"@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.com$/
  ;
   constructor( public authService:AuthService,
                private modalService: BsModalService) { }

  ngOnInit(): void {
    
    this.prof_Form = new FormGroup({
      company_name: new FormControl('', [Validators.required, Validators.pattern(this.name_pattern)]),
      position: new FormControl('', [Validators.required, Validators.pattern(this.name_pattern)]),
      start_date : new FormControl('',[Validators.required]),
      end_date : new FormControl('',[Validators.required]),
      description : new FormControl('',[Validators.required]),
    })
  }

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }
  submit(data:any){
    console.log(data)
  }
}
