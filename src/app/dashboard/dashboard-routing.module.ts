import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordLayoutComponent } from '../layout/dashbord-layout/dashbord-layout.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from '../authentication/login/login.component';
import { SignUpComponent } from '../authentication/sign-up/sign-up.component';

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '', 
    component: DashbordLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import ('../authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
