import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert';


const routes: Routes = [
  { path: "", 
    redirectTo: 'dashboard',
    pathMatch : 'full'
  },
  {
    path: "",
    loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "auth",
    loadChildren: () => import ('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  // {
  //   path: 'alert', component : AlertComponent  
  // }
  
 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
