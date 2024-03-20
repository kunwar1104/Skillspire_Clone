import { Component } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
import { AuthService } from 'src/app/authentication/auth.service';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { SignUpComponent } from 'src/app/authentication/sign-up/sign-up.component';
import { NotificationService } from '../notification/notification.service';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bsModalRef? :  BsModalRef |any  ;
  dataa : any;
  isLogedIn? : boolean = false  ;
  getTokenFromApi: any;
  data: any;
 
public sub :Subscription | any

   constructor ( private modalService:BsModalService,
                 private auth: AuthService,
                 public notification : NotificationService,
                //  public bsModalRef : BsModalRef
                // public sub : Subscription
                // public bsModalRef:BsModalRef
                 ) { }

   ngOnInit() {
    const Mytoken = localStorage.getItem('accessToken')
    console.log(Mytoken)
    if(Mytoken){
       this.isLogedIn = true
    }
   }
 

  async openLoginModalComponent(  ) {
      this.bsModalRef = this.modalService.show(LoginComponent) 
      this.bsModalRef.content.closeBtnName = 'Close';
      
      await this.bsModalRef.onHidden.subscribe((result: any) =>  {
          this.handelModelClosed(result)
      });
        // 
       }

   handelModelClosed(result: any ) {
    console.log(result)
     const token  =    localStorage.getItem('accessToken')
      console.log(token)
       if(token){
         this.isLogedIn = true ;
      }else{
        this.isLogedIn = false
      }
 }
 

  //  openLoginModalComponent() {
  //   this.bsModalRef = this.modalService.show(LoginComponent);
  //   this.bsModalRef.content.closeBtnName = 'Close'

  //  this.sub = this.bsModalRef.content.onClose.subscribe(async () => {
      
  //     // This callback will be triggered when the modal is closed
  //     const token = localStorage.getItem('accessToken') 
  //     // const myToken  =  await token
  //     console.log(token);

  //      if (token) {
      
  //      return this.isLogedIn = true;
  //     }
  //   });
  // }
 

  openSignupModalComponent() {
      this.bsModalRef = this.modalService.show(SignUpComponent);
      this.bsModalRef.content.closeBtnName = 'Close';
  }

  logOut() {
    const token = localStorage.getItem('accessToken')
    console.log(token)
    
    if(token ){
      localStorage.clear()
      this.auth.logOut(token )
      this.notification.showNotification("LogedOut Suceessful ","success", true,1000)

      this.isLogedIn = false
    }
 console.log(token)
   
  }

}


