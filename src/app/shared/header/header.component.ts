import { Component } from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal'
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { SignUpComponent } from 'src/app/authentication/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bsModalRef? : BsModalRef
 constructor ( private modalService:BsModalService) { }

 openLoginModalComponent(){
    this.bsModalRef = this.modalService.show(LoginComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
 }

 openSignupModalComponent() {
    this.bsModalRef = this.modalService.show(SignUpComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
 }
}
