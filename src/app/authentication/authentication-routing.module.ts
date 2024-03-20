import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from '../shared/header/header.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"

  },
  {
    path :'login', 
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
