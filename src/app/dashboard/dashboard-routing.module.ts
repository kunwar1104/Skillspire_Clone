import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordLayoutComponent } from '../layout/dashbord-layout/dashbord-layout.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from '../authentication/login/login.component';
import { SignUpComponent } from '../authentication/sign-up/sign-up.component';
import { MyPortalComponent } from './my-portal/my-portal.component';
import { JobsComponent } from './jobs/jobs.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ProgramsComponent } from './programs/programs.component';
import { TrainersComponent } from './trainers/trainers.component';
import { UserInfoComponent } from './my-portal/user-info/user-info.component';

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
      },
      {
        path: "my-portal",
        component: MyPortalComponent
      },
      {
        path: 'jobs',
        component: JobsComponent
      },
      {
        path: 'blogs',
        component: BlogsComponent
      },
      {
        path: "programs",
        component: ProgramsComponent
      },
      {
        path: 'trainers',
        component: TrainersComponent
      },
      {
        path: "",
        loadChildren: () => import('./my-portal/my-portal.module').then(m => m.MyPortalModule)
      },
      {
        path: 'pers-info',
        component: UserInfoComponent
      }


    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule),
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
