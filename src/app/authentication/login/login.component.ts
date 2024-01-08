import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from './../auth.service';
import { NotificationService } from './../../shared/notification/notification.service';
import { Router } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup |any ;
  title?: string;
  closeBtnName?: string;
  list: string[] = [];
  passord_pattern = /^[a-zA-Z0-9]{8}$/;
  // Notifiacation
  loginMessage : boolean = true;
  message : string | undefined ; 
  show : boolean = false ;
  // button loder
  sending: boolean = false;
  
 

  constructor  ( public bsModalRef: BsModalRef ,
                 private modalService:BsModalService,
                 public authService:AuthService ,
                 private notification : NotificationService,
                 public router :Router,){ }

  ngOnInit(): void {
    this.loginForm = new  FormGroup({
      email_id: new FormControl('', [Validators.required ]),
      password: new FormControl('', [ Validators.required,Validators.pattern(this.passord_pattern) ])
      });

    };
  
   submit(){
    this.sending = true;
    console.log(this.loginForm.value)
      let data = this.loginForm.value;
    if(data){
       this.authService.login(data).subscribe(( res) => {
               console.log(res)
               const data = res
               console.log(res.accessToken, res.refreshToken)
               localStorage.setItem("accessToken",res.accessToken )
              //  localStorage.setItem("refreshToken",res.refreshToken)
               localStorage.getItem("accessToken")
               console.log("Token after login = ",localStorage.getItem("accessToken"))
               
              if(data){
                 this.notification.showNotification("Login Successfull", "success", true, 2000)
                 this.bsModalRef.hide()
              }
              else{
                data
                this.notification.showNotification("Login Failed", "failed", true, 2000)

              }
      })
    }
   }
 
   openSigninupModalComponent(){
    this.bsModalRef.hide()

    this.bsModalRef = this.modalService.show(SignUpComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
   }
  
}
