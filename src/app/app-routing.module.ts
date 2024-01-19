import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertComponent } from 'ngx-bootstrap/alert';
import { DemoComponent } from './prectice/demo/demo.component';


const routes: Routes = [
  { path: "", 
    redirectTo: '',
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
 {
   path: 'demo',
   component : DemoComponent
 }
  
  
 
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
