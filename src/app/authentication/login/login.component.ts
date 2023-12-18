import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthService } from './../auth.service';
import { NotificationService } from './../../shared/notification/notification.service';
import { Router } from '@angular/router';

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
                 public authService:AuthService ,
                 private notification : NotificationService,
                 public router: Router          
    ){ }

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
              if(res){
                 this.notification.showNotification("Login Successfull", "success", true, 2000)
                 this.bsModalRef.hide()
              }
              else{
                this.notification.showNotification("Login Failed", "failed", true, 2000)

              }
      })
    }
   }
 
   
  
}
