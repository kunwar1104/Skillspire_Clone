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
  user_Info: FormGroup<any> | any = {};
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
  token : any ;

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

    this.token =  localStorage.getItem('accessToken')
    console.log(this.token)
      this.authService.userProfile().subscribe((res:any) => {
        console.log(res)
        // this.user_Info = res
      },
      // (err:any)=>{
      //   console.log(err)

      // }
      )  
    // this.authService.updateUserProfile(this.token).subscribe((res) => {
    //    console.log(res);

    // })
    

    this.user_Info = new FormGroup({
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

    this.authService.userProfile().subscribe((res) => {
         console.log(res)
         

         this.user_Info.patchValue({
          first_name: res,
          last_name: res,
          email_id:  res,
          password: res,
          referral_code:  res,
          phone_no:  res,
          is_student:  res,
          receive_newsletter:  res,
          terms: res
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

  }
}
