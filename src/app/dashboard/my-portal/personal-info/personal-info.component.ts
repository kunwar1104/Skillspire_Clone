import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/authentication/auth.service';
import { NotificationService } from 'src/app/shared/notification/notification.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
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
  sending: boolean = false;
  
  constructor(
    public bsModalRef: BsModalRef,
    public authService: AuthService,
    private notification: NotificationService,
    private router: Router,
    private modalService: BsModalService

  ) { }

  ngOnInit(): void {
    console.log("sssssssssssssssss")
    this.authService.userProfile().subscribe((res) => {
      console.log('sdsdsdsd')
       console.log(res)
    })
    

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
      // resume_path: new FormControl ('', [Validators.required]),
  
    });

    this.authService.userProfile().subscribe((res) => {
         console.log(res)

        //  this.signinForm.patchValue({
        //   first_name: res.
        //   last_name: res.last_name,
        //   email_id: 
        //   password:
        //   referral_code: 
        //   phone_no: 
        //   is_student: 
        //   receive_newsletter: 
        //   terms: 
        // });
    })

    
  };
   
  



  submit( ){
    console.log(this.signinForm.value)

  }
}
