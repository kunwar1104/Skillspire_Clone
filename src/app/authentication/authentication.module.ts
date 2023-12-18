import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  
  exports: [
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent
  ]
})
export class AuthenticationModule { }
