import { Component } from '@angular/core';
import {BsModalRef, BsModalService, ModalOptions} from 'ngx-bootstrap/modal'
import { AuthService } from 'src/app/authentication/auth.service';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { SignUpComponent } from 'src/app/authentication/sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bsModalRef? : BsModalRef
  isLogedIn: boolean = false  // for show and hide of navbutton 

  private get token() {
   return this.token
  }
  
  private set token(mytoken : string) {
   this.token  = mytoken
  }
  
   constructor ( private modalService:BsModalService,
                 private auth: AuthService ) { }

   ngOnInit(data : any): void {
      // this.auth.login(data).subscribe((res) => {
      //    console.log(res)
      //     localStorage.getItem('token')
      //    let token = "token"
      //    console.log("Login Token",token)
      //    this.isLogedIn = true ;
      //   })
     let tokenkey =  localStorage.getItem('mytoken')
       console.log("tokenkey =",tokenkey)
       tokenkey = JSON.parse(data)
       console.log(data)
     if(data){
        this.isLogedIn = true
     }
   }

 openLoginModalComponent(){
    this.bsModalRef = this.modalService.show(LoginComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
 }

 openSignupModalComponent() {
    this.bsModalRef = this.modalService.show(SignUpComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
 }

  login(data : any){
    this.auth.login(data).subscribe((res) => {
     console.log(res)
    })
  }
}
