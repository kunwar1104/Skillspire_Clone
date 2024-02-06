import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '../auth.service';
import { NotificationService } from './../../shared/notification/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  [x: string]: any;
  signinForm!: FormGroup | any;
  title?: string;
  closeBtnName?: string;
  list: string[] = [];
  data: any;
  passord_pattern = /^[a-zA-Z0-9]{8}$/;
  name_patter = /^[a-zA-Z]{3,15}$/;
  number_pattern = /^[0-9]{10}$/
  signinMessage: string | undefined;
  message: string | undefined;
  sending: boolean = false
  errorMessage :   any = {};
  
  constructor(
    public bsModalRef: BsModalRef,
    public authService: AuthService,
    private notification: NotificationService,
    private router: Router,
    private modalService: BsModalService,
    

  ) { }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.pattern(this.name_patter)]),
      last_name: new FormControl('', [Validators.required, Validators.pattern(this.name_patter)]),
      email_id: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passord_pattern)]),
      referral_code: new FormControl('', [Validators.required,]),
      phone_no: new FormControl('', [Validators.required, Validators.pattern(this.number_pattern)]),
      is_student: new FormControl('', [Validators.required]),
      receive_newsletter: new FormControl('', [Validators.required]),
      terms: new FormControl('', [Validators.required]),
      resume_path: new FormControl ('', [Validators.required]),

    });
  };

  submit() {
    // console.log(this.signinForm.value)
    this.sending = true;
    if (this.signinForm.value) {
      let data = this.signinForm.value
      console.log(data)
      this.authService.signUp(data).subscribe(
      {
        next:(res) => {
          console.log(res)
          const response = res
          // if (res ) {
          //    this.notification.showNotification('Signup Successfull', 'success', true, 2000)
          //     this.bsModalRef.hide()
          //     console.log("ifffffffffffffffff")
          // }
          // else {
            
          //   console.log("else")  
          // }
          },
          error :(error) => {
            console.log(error)
            console.log(error.statusText)
            this.errorMessage = error.statusText;
            if(error){
              this.notification.showNotification(this.errorMessage, "failed", true, 2000)
              this.bsModalRef.hide()

              this.sending = false;
            }
          },
          complete:() => {
            console.log()
            // if ( ) {
              this.notification.showNotification('Signup Successfull', 'success', true, 2000)
               this.bsModalRef.hide()
          //  }
          }
      }
      )
    }
  }
}
