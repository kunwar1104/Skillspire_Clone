import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPortalComponent } from './my-portal.component';
import { UserEducComponent } from './user-educ/user-educ.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProfDetailComponent } from './prof-detail/prof-detail.component';

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
    component: PersonalInfoComponent
  },
  {
    path: 'edu-info',
    component: UserEducComponent
  },
  {
    path: 'per-detail',
    component: ProfDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPortalRoutingModule { }
