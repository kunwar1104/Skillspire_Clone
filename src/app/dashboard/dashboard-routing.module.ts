import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordLayoutComponent } from '../layout/dashbord-layout/dashbord-layout.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '', 
    component: DashbordLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
