import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from 'src/app/authentication/auth.service';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent {
  [x: string]: any;
  // signinForm!: FormGroup | any;
  user_Info: FormGroup<any> | any ;
  title?: string;
  closeBtnName?: string;
  list: string[] = [];
  data: any;
  passord_pattern = /^[a-zA-Z0-9]{8}$/;
  name_pattern = /^[a-zA-Z]{3,15}$/ ;
  number_pattern = /^[0-9]{10}$/ ;
  email_id = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.com$|^".*"@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.com$/
  ;
  signinMessage: string | undefined;
  message: string | undefined;
  sending: boolean = false;
  token : any ;
  update_Message : string | any;

  constructor(
    public bsModalRef: BsModalRef,
    public authService: AuthService,
    private notification: NotificationService,
    private router: Router,
    private modalService: BsModalService,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {

    this.setTokenAsCookie()

   
      this.authService.userProfile().subscribe((res:any) => {
        console.log(res)
        console.log(res.first_name)
      },
      )  

    // this.authService.updateUserProfile(this.token).subscribe((res) => {
    //    console.log(res);

    // })
    

    this.user_Info = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.pattern(this.name_pattern)]),
      last_name: new FormControl('', [Validators.required, Validators.pattern(this.name_pattern)]),
      email_id: new FormControl('', [Validators.required, Validators.pattern(this.email_id)]),
      // password: new FormControl('', [Validators.required, Validators.pattern(this.passord_pattern)]),
      referral_code: new FormControl('', [Validators.required,]),
      phone_no: new FormControl('', [Validators.required, Validators.pattern(this.number_pattern)]),
      is_student: new FormControl('', [Validators.required]),
      receive_newsletter: new FormControl('', [Validators.required]),
      terms: new FormControl('', [Validators.required]),
      resume_path: new FormControl ('', [Validators.required]),
  
    });

    this.authService.userProfile().subscribe((res:any) => {
         console.log(res)
         console.log(res.first_name)

         

         this.user_Info.patchValue({
          first_name: res.first_name,
          last_name: res.last_name,
          email_id:  res.email_id,
          // password: res.password,
          referral_code:  res.referral_code,
          phone_no:  res.phone_no,
          is_student:  res.is_student,
          receive_newsletter:  res.receive_newsletter,
          terms: res.terms
        });
    })    


  };

  setTokenAsCookie(){

    const token = localStorage.getItem('accessToken');

    if( token !== null &&  token  !== undefined ){

       this.cookieService.set('accessToken', token, { expires:7})

    }
    else {
      console.error('Access token is null or undefined');
      // Handle the case where the token is null or undefined
    }
    const token_Data = this.cookieService.get('accessToken') ;
    console.log("token data from cookie : ", token_Data);
 
  }
   
  submit(data:any ){
    console.log(this.user_Info.value)
    console.log(data)

    this.authService.updateUserProfile(data).subscribe((res:any) => {
         console.log(res)
        
         if(res) {
           this.update_Message = 'Updated SuccessFull'   
         }
    })

  }
}
