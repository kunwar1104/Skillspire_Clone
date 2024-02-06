import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordLayoutComponent } from './layout/dashbord-layout/dashbord-layout.component';

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
    path: "",
    loadChildren: () => import ( './shared/shared.module').then(m => m.SharedModule)
  },
  {
    path: 'd-layout',
    component: DashbordLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
