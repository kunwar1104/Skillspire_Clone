import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPortalComponent } from './my-portal.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserEducComponent } from './user-educ/user-educ.component';
import { DashbordLayoutComponent } from 'src/app/layout/dashbord-layout/dashbord-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-portal',
    pathMatch: 'full'
  },
  {
    path: 'my-portal',
    component: MyPortalComponent
  },
  {
    path: "pers-info",
    component: UserInfoComponent
  },
  {
    path: 'edu-info',
    component: UserEducComponent
  },
  {
    path: 'per-detail',
    component: UserEducComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPortalRoutingModule { }
